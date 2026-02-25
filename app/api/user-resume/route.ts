import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createClient } from "@supabase/supabase-js";

// We use the service role key to bypass RLS since we verify auth with Clerk
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET() {
    try {
        const { userId } = await auth();
        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { data, error } = await supabase
            .from("resumes")
            .select("id, parsed_json, file_url, slug, template_id")
            .eq("user_id", userId)
            .order("created_at", { ascending: false })
            .limit(1)
            .single();

        if (error && error.code !== "PGRST116") {
            console.error("Supabase GET error:", error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ data });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const { userId } = await auth();
        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await req.json();
        const { id, template_id, parsed_json } = body;

        if (!id) {
            return NextResponse.json({ error: "Resume ID required to update" }, { status: 400 });
        }

        // Prepare update payload
        const updatePayload: any = {};
        if (template_id !== undefined) updatePayload.template_id = template_id;
        if (parsed_json !== undefined) updatePayload.parsed_json = parsed_json;

        const { data, error } = await supabase
            .from("resumes")
            .update(updatePayload)
            .eq("id", id)
            .eq("user_id", userId) // Extra safety to only update own resume
            .select()
            .single();

        if (error) {
            console.error("Supabase POST error:", error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ data });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
