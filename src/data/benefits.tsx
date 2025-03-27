import { FiDownload, FiFolder, FiLock, FiMonitor, FiRss, FiShield, FiSliders, FiUser, FiZap } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Seamless Reading, Anywhere",
        description: "Stay updated across macOS, iOS, iPadOS, and Android with real-time feed synchronization.",
        bullets: [
            {
                title: "FreshRSS Integration",
                description: "Sync effortlessly with FreshRSS, with support for more services coming soon.",
                icon: <FiRss size={26} />
            },
            {
                title: "Beautiful & Minimalist UI",
                description: "A sleek, distraction-free reading experience tailored for modern users.",
                icon: <FiMonitor size={26} />
            },
            {
                title: "Customizable Reading Experience",
                description: "Switch between light and dark mode, customize fonts, and personalize your reading style.",
                icon: <FiSliders size={26} />
            },
        ],
        imageSrc: "/images/animated.gif"
    },
    {
        title: "Stay in Control of Your Feeds",
        description: "Organize, filter, and tailor your news to focus on what matters most.",
        bullets: [
            {
                title: "Smart Feed Management",
                description: "Organize feeds with folders, filters, and tags to keep your news structured.",
                icon: <FiFolder size={26} />
            },
            {
                title: "Offline Reading",
                description: "Save articles for offline access and read them anytime, anywhere.",
                icon: <FiDownload size={26} />
            },
            {
                title: "AI-Powered Summaries",
                description: "Get instant article summaries powered by AI, so you can consume news faster.",
                icon: <FiZap size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.png"
    },
    {
        title: "Your Data, Your Privacy",
        description: "Blaze Feeds ensures your data stays secure and private, with no ads or tracking.",
        bullets: [
            {
                title: "Encrypted Backups",
                description: "Your data is securely encrypted when backed up, ensuring safe restores.",
                icon: <FiLock size={26} />
            },
            {
                title: "Private & Secure Syncing",
                description: "Your feeds sync securely across devices without exposing your reading history.",
                icon: <FiUser size={26} />
            },
            {
                title: "No Ads, No Tracking",
                description: "Blaze Feeds respects your privacy—no ads, no tracking, just pure content.",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "/images/mockup-3.png"
    },
]