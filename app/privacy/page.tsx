export default function PrivacyPolicy() {
    return (
        <div className="mx-auto max-w-4xl px-6 py-24 text-white">
            <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>
            <p className="mb-8 text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-8 text-gray-300">
                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
                    <p>Welcome to stackd. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-white">2. Data We Collect</h2>
                    <p>We may collect, use, store and transfer different kinds of personal data about you. This includes Identity Data (such as your name or username), Contact Data (such as your email address), and Professional Data (such as your github history, portfolio context or resume).</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-white">3. How We Use Your Data</h2>
                    <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to generate and manage your developer portfolio or tech stack dashboard, and where it is necessary for our legitimate interests.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-white">4. Data Security</h2>
                    <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-white">5. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us via our general communication channels on our application or via our contact email.</p>
                </section>
            </div>
        </div>
    );
}
