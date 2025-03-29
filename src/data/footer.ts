import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Fast, Minimal, and Synced RSS Reading.",
    quickLinks: [
        {
            text: "Features",
            url: "#features"
        },
        {
            text: "Pricing",
            url: "#pricing"
        },
        {
            text: "FAQ",
            url: "#faq"
        }
    ],
    email: 'info@nikpatil.com',
    telephone: '+91 8668289459',
    socials: {
        github: 'https://github.com/nikhilpatil12',
        x: 'https://x.com/GemridgeStudio',
        // facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com/in/nikhilpatil12/',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com/gemridge_studio',
    }
}