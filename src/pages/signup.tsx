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
    const [loading, setLoading] = useState(false);

    const handlePlatformChange = (platform: string) => {
        setSelectedPlatforms((prev) =>
            prev.includes(platform)
                ? prev.filter((p) => p !== platform)
                : [...prev, platform]
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(!email || selectedPlatforms.length === 0) {
            alert("Please fill in all fields.");
            return;
        }
        setLoading(true);
        const supabase = createClient(
            "https://wxvbsqiikrmyhopggaut.supabase.co",
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        );

        await supabase.functions.invoke("save-signup", {
            body: {
            email: email,
            platforms: `{${selectedPlatforms.join(',')}}`,
            app: "blazefeeds"
            },
        }).then(() => {
            setSubmitted(true);
        }).catch((error) => {
            console.error("Error saving signup data:", error);
            alert("There was an error signing up. Please try again.");
        }).finally(() => {
            setLoading(false);
        });
    };

    return (
        <div className="grid place-items-center h-screen">
            <div className="max-w-xl bg-gray-950 mx-auto mt-8 p-6 border border-secondary rounded-3xl shadow">
                <h2 className="text-3xl font-semibold mb-6 text-center">Sign Up for Blaze Feeds Beta</h2>
                <h1 className="text-sm mb-6 text-center">
                    You will be sent a link to join beta on the interested platform.
                    iOS and Android builds are currently under beta testing, while we are working on the macOS build, which should be available soon.
                </h1>
                <h1 className="text mb-6 text-center">You can join the iOS TestFlight directly <a className="text-secondary" href="https://testflight.apple.com/join/przEqEEN">here</a>.</h1>
                {submitted ? (
                <div>
                    <p className="text-green-600 text-center">Thank you for signing up!</p>
                </div>
                ) : (
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                    <label htmlFor="email" className="block text-md font-medium mb-1">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-gray-950 px-3 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-secondary"
                    />

                    <label htmlFor="email" className="block text-xs pb-5 pt-2 font-medium mb-1">
                        Please provide Google account for Android beta testing
                    </label>
                    </div>
                    <div className="mb-4">
                    <label className="block text-md font-medium mb-1">Platform(s):

                    </label>
                    <div>
                        {platforms.map((platform) => (
                        <label key={platform.value} className="flex items-center mt-2">
                            <input
                            type="checkbox"
                            value={platform.value}
                            checked={selectedPlatforms.includes(platform.value)}
                            onChange={() => handlePlatformChange(platform.value)}
                            className="mr-2 accent-secondary"
                            />
                            <span>{platform.label}</span>
                        </label>
                        ))}
                    </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-secondary text-gray-950 rounded-3xl hover:bg-blue-700 transition flex items-center justify-center"
                        disabled={submitted || loading}
                    >
                        {loading ? (
                            <svg className="animate-spin h-5 w-5 mr-2 text-gray-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                            </svg>
                        ) : null}
                        {loading ? "Signing Up..." : "Sign Up"}
                    </button>
                </form>
                )}
            </div>
        </div>
    );
};

export default SignupPage;