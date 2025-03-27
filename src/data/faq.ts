import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Is ${siteDetails.siteName} secure?`,
        answer: 'Yes! We encrypt all your backups to ensure your data remains private and protected. Your feeds and preferences stay secure with us.',
    },
    {
        question: `Can I use ${siteDetails.siteName} on multiple devices?`,
        answer: 'Yes! Blaze Feeds syncs seamlessly across macOS, iOS, iPadOS, and Android, so you can read your news anywhere.',
    },
    {
        question: 'Does Blaze Feeds support third-party RSS services?',
        answer: `Currently, ${siteDetails.siteName} supports FreshRSS, with more integrations coming soon.`,
    },
    {
        question: 'Can I customize my reading experience?',
        answer: 'Absolutely! Blaze Feeds offers light & dark mode, customizable fonts, and layout adjustments to match your preferences.',
    },
    {
        question: 'What if I need help using the app?',
        answer: 'Our support team is happy to assist! You can reach us via email, and we also provide in-app guides and a knowledge base to help you get started.',
    },
    {
        question: 'Is Blaze Feeds free to use?',
        answer: 'Yes! Blaze Feeds offers a free tier with essential features. For advanced options like unlimited feeds, custom themes, and AI-powered summaries, we offer a Pro plan.',
    }
    
];