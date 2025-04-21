import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import '../app/globals.css';

const platforms = [
    { label: "Android", value: "android" },
    { label: "iOS", value: "ios" },
    { label: "macOS", value: "macos" },
];

const SignupPage: React.FC = () => {
    const [email, setEmail] = useState("");
    const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
    const [submitted, setSubmitted] = useState(false);

    const handlePlatformChange = (platform: string) => {
        setSelectedPlatforms((prev) =>
            prev.includes(platform)
                ? prev.filter((p) => p !== platform)
                : [...prev, platform]
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        const supabase = createClient(
            "https://wxvbsqiikrmyhopggaut.supabase.co",
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        );

        // CORS is handled by Supabase Edge Functions configuration.
        // If you get CORS errors, ensure your function allows your domain in its CORS settings.
        await supabase.functions.invoke("save-signup", {
            body: {
                email,
                platforms: selectedPlatforms,
            },
        });
    };

    return (
        <div className="max-w-md bg-gray-950 mx-auto mt-8 p-6 border border-gray-200 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
            {submitted ? (
            <div>
                <p className="text-green-600 text-center">Thank you for signing up!</p>
            </div>
            ) : (
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-950 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                </div>
                <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Platform(s):</label>
                <div>
                    {platforms.map((platform) => (
                    <label key={platform.value} className="flex items-center mt-2">
                        <input
                        type="checkbox"
                        value={platform.value}
                        checked={selectedPlatforms.includes(platform.value)}
                        onChange={() => handlePlatformChange(platform.value)}
                        className="mr-2 accent-blue-600"
                        />
                        <span>{platform.label}</span>
                    </label>
                    ))}
                </div>
                </div>
                <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                Sign Up
                </button>
            </form>
            )}
        </div>
    );
};

export default SignupPage;