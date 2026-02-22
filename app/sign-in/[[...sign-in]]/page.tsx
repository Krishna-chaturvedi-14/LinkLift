import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="min-h-screen bg-[#030303] flex items-center justify-center">
            <div className="absolute inset-0 bg-indigo-500/5 blur-[100px] pointer-events-none" />
            <div className="relative z-10 w-full max-w-md flex flex-col items-center">
                <SignIn appearance={{ elements: { formButtonPrimary: 'bg-indigo-600 hover:bg-indigo-500' } }} />
            </div>
        </div>
    );
}
