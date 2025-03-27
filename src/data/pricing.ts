import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Starter',
        price: 'Free',
        features: [
            '1 FreshRSS Account',
            'Upto 5 RSS feeds',
            'Backup and Restore',
            'Use on any device',
            'Email support',
        ],
    },
    {
        name: 'Pro Subscription',
        price: 2,
        features: [
            'Multiple FreshRSS accounts',
            'Unlimited RSS feeds',
            'AI Summarization',
            'Custom Themes',
            'Custom App Icons',
        ],
    },
    {
        name: 'One time Purchase',
        price: '$40',
        features: [
            'Multiple FreshRSS accounts',
            'Unlimited RSS feeds',
            'AI Summarization',
            'Custom Themes',
            'Custom App Icons',
        ],
    },
]