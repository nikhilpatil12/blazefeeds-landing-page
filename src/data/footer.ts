import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Empowering businesses with cutting-edge financial technology solutions.",
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
            text: "Testimonials",
            url: "#testimonials"
        }
    ],
    email: 'admin@nikpatil.com',
    telephone: '+91 8668289459',
    socials: {
        github: 'https://github.com/nikhilpatil12/blaze-feeds',
        x: 'https://x.com/Nikhil1298',
        // facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com/in/nikhilpatil12/',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com/gemridge_studio',
    }
}