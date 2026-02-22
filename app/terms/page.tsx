export default function TermsOfService() {
    return (
        <div className="mx-auto max-w-4xl px-6 py-24 text-white">
            <h1 className="mb-8 text-4xl font-bold">Terms of Service</h1>
            <p className="mb-8 text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-8 text-gray-300">
                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-white">1. Acceptance of Terms</h2>
                    <p>By accessing and using stackd, you accept and agree to be bound by the terms and provision of this agreement. Any participation in this service will constitute acceptance of this agreement.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-white">2. Use License</h2>
                    <p>Permission is granted to temporarily use stackd for your professional tech identity and portfolio generation purposes. Under this license you may not attempt to decompile or reverse engineer any software contained on stackd's web site.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-white">3. Disclaimer</h2>
                    <p>The materials on stackd's website are provided on an 'as is' basis. stackd makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-white">4. Limitations</h2>
                    <p>In no event shall stackd or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on stackd's website.</p>
                </section>
            </div>
        </div>
    );
}
