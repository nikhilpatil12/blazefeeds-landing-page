import clsx from "clsx";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { IPricing } from "@/types";

interface Props {
    tier: IPricing;
    highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
    const { name, type, price, features } = tier;

    return (
        <div className={clsx("w-full max-w-sm mx-auto bg-gray-950 rounded-xl border border-gray-200 lg:max-w-full", { "shadow-lg": highlight })}>
            <div className="p-6 border-b border-gray-200 rounded-t-xl">
                <h3 className="text-2xl font-semibold mb-4">{name}</h3>
                <p className="text-3xl md:text-5xl font-bold mb-6">
                    <span className={clsx({ "text-secondary": highlight })}>
                        {type === 'onetime' ? (
                            <>
                                <span className="line-through text-gray-500 mr-2">$40</span>
                                {price}
                            </>
                        ) : (
                            type !== 'subscription' ? `${price}` : price
                        )}
                    </span>
                    {type === 'subscription' && <span className="text-lg font-normal text-gray-600">/month</span>}
                </p>
                <p>
                {type === 'subscription' && <span className="text-lg font-normal text-gray-600">or <span className="text-xl md:text-2xl font-bold text-secondary">$19.99 </span> /year</span>}
                {type === 'onetime' && <span className="text-lg font-normal text-gray-600">For limited time only</span>}
                </p>
                {/* <button className={clsx("w-full py-3 px-4 rounded-full transition-colors", { "bg-primary hover:bg-primary-accent": highlight, "bg-hero-background hover:bg-gray-950-200": !highlight })}>
                    Get Started
                </button> */}
            </div>
            <div className="p-6 mt-1">
                <p className="font-bold mb-0">FEATURES</p>
                <p className="text-foreground-accent mb-5">{ type !== "free" ? "Everything in basic, plus..." : ""}</p>
                <ul className="space-y-4 mb-8">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <BsFillCheckCircleFill className="h-5 w-5 text-secondary mr-2" />
                            <span className="text-foreground-accent">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PricingColumn