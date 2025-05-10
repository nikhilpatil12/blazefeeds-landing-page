import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Basic',
        price: 'Free',
        type: 'free',
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
        price: '$1.99',
        type: 'subscription',
        features: [
            'Multiple FreshRSS accounts',
            'Unlimited RSS feeds',
            'AI Summarization',
            'Custom Themes',
            'Custom App Icons on iOS',
        ],
    },
    // {
    //     name: 'Pro Subscription',
    //     price: '$19.99',
    //     type: 'subscription-yearly',
    //     features: [
    //         'Multiple FreshRSS accounts',
    //         'Unlimited RSS feeds',
    //         'AI Summarization',
    //         'Custom Themes',
    //         'Custom App Icons',
    //     ],
    // },
    {
        name: 'One time Purchase',
        price: '$30',
        type: 'onetime',
        features: [
            'Multiple FreshRSS accounts',
            'Unlimited RSS feeds',
            'AI Summarization',
            'Custom Themes',
            'Custom App Icons on iOS',
        ],
    },
]