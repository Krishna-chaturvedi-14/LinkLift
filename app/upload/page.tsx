"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { Upload, FileText, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";

// 🟢 Helper function to turn "Krishna Chaturvedi" into "krishna-chaturvedi"
const slugify = (text: string) => 
  text.toLowerCase()
    .trim()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');

export default function UploadPage() {
  const { user } = useUser();
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      if (selected.type !== "application/pdf") {
        setMessage({ type: "error", text: "Please select a PDF file." });
        return;
      }
      setFile(selected);
      setMessage(null);
    }
  };

  const handleUpload = async () => {
    // Step 1: Check if a file is selected
    if (!file) {
      setMessage({ type: "error", text: "Please select a file first." });
      return;
    }

    if (!user?.id) {
      setMessage({ type: "error", text: "You must be signed in to upload." });
      return;
    }

    setIsUploading(true);
    setMessage(null);

    // Step 2: Generate a truly unique path (prevents duplicates)
    const filePath = `${user.id}/${Date.now()}-${file.name}`;

    try {
      // Step 3: Upload to Supabase Storage bucket 'resumes'
      const { error: storageError } = await supabase.storage
        .from("resumes")
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (storageError) throw storageError;

      // Step 4: Get the public URL and insert into resumes table
      const { data: urlData } = supabase.storage
        .from("resumes")
        .getPublicUrl(filePath);

      const fileUrl = urlData.publicUrl;

      // 🟢 Generate a temporary slug to fulfill the DB constraint
      const tempSlug = `${slugify(user.fullName || "user")}-${Math.floor(1000 + Math.random() * 9000)}`;

      const { data: insertedResume, error: dbError } = await supabase
        .from("resumes")
        .insert({
          user_id: user.id,
          file_path: filePath,
          file_url: fileUrl,
          parsed_json: null,
          slug: tempSlug, // 🟢 Added slug to the initial insert
        })
        .select("id")
        .single();

      if (dbError) throw dbError;

      const resumeId = insertedResume?.id;
      if (!resumeId) throw new Error("Failed to get resume ID");

      setMessage({ type: "success", text: "Resume uploaded! Analyzing with AI..." });
      setFile(null);
      if (inputRef.current) inputRef.current.value = "";
      setIsUploading(false);
      setIsAnalyzing(true);

      // Step 5: Call the analyze API
      const analyzeResponse = await fetch("/api/analyze-resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileUrl, resumeId }),
      });

      const analyzeData = await analyzeResponse.json();

      if (!analyzeResponse.ok) {
        throw new Error(analyzeData.error ?? "Analysis failed");
      }

      // 🟢 Step 6: Create the final slug from AI data and update DB
      // We use the name returned by the AI for a professional URL
      const finalName = analyzeData.data?.name || user.fullName || "portfolio";
      const finalSlug = `${slugify(finalName)}-${Math.floor(1000 + Math.random() * 9000)}`;

      await supabase
        .from("resumes")
        .update({ slug: finalSlug })
        .eq("id", resumeId);

      setMessage({ type: "success", text: "Analysis complete! Redirecting..." });

      // 🟢 Step 7: Redirect to the user's new dynamic portfolio link
      router.push(`/${finalSlug}`);

    } catch (error) {
      console.error(error);
      setMessage({
        type: "error",
        text: error instanceof Error ? error.message : "Upload failed. Please try again.",
      });
    } finally {
      setIsUploading(false);
      setIsAnalyzing(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const dropped = e.dataTransfer.files?.[0];
    if (dropped?.type === "application/pdf") {
      setFile(dropped);
      setMessage(null);
    } else {
      setMessage({ type: "error", text: "Please drop a PDF file." });
    }
  };

  const handleDragOver = (e: React.DragEvent) => e.preventDefault();

  const isLoading = isUploading || isAnalyzing;

  return (
    <div className="relative mx-auto max-w-2xl px-6 py-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[150px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg md:p-12 hover:scale-[1.02] transition-transform"
      >
        <h1 className="mb-2 text-2xl font-bold text-white md:text-3xl">
          Upload Your Resume
        </h1>
        <p className="mb-8 text-zinc-400">
          Drop your PDF resume below. We&apos;ll analyze it and generate your
          portfolio.
        </p>

        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={() => !isLoading && inputRef.current?.click()}
          className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-white/20 bg-white/5 py-16 transition-all hover:border-white/30 hover:bg-white/10 ${isLoading ? "pointer-events-none opacity-70" : ""}`}
        >
          <input
            ref={inputRef}
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="hidden"
          />
          {file ? (
            <div className="flex flex-col items-center gap-2">
              <FileText className="h-12 w-12 text-zinc-400" />
              <p className="font-medium text-white">{file.name}</p>
              <p className="text-sm text-zinc-500">
                {(file.size / 1024).toFixed(1)} KB
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleUpload();
                }}
                disabled={isLoading}
                className="mt-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:shadow-purple-500/40 disabled:opacity-50"
              >
                {isUploading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Uploading...
                  </span>
                ) : isAnalyzing ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Analyzing...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Upload className="h-5 w-5" />
                    Upload Now
                  </span>
                )}
              </button>
            </div>
          ) : (
            <>
              <Upload className="mb-4 h-14 w-14 text-zinc-500" />
              <p className="mb-1 font-medium text-white">
                Drop your PDF here or click to browse
              </p>
              <p className="text-sm text-zinc-500">
                Only PDF files are supported
              </p>
            </>
          )}
        </div>

        {isLoading && (
          <div className="mt-6">
            <div className="mb-2 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-full animate-pulse rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
            </div>
            <p className="text-center text-sm text-zinc-400">
              {isUploading ? "Uploading..." : "Analyzing..."}
            </p>
          </div>
        )}

        {message && (
          <div
            className={`mt-6 flex items-center gap-3 rounded-xl px-4 py-3 ${
              message.type === "success"
                ? "bg-emerald-500/10 text-emerald-400"
                : "bg-red-500/10 text-red-400"
            }`}
          >
            {message.type === "success" ? (
              <CheckCircle2 className="h-5 w-5 shrink-0" />
            ) : (
              <XCircle className="h-5 w-5 shrink-0" />
            )}
            <p className="text-sm font-medium">{message.text}</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}