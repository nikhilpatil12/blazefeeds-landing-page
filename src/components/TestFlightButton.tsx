import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'

import { ctaDetails } from '@/data/cta'
import { FaIcons } from 'react-icons/fa6'

const TestFlightButton = ({ dark }: { dark?: boolean }) => {
    return (
        <a href={ctaDetails.testflightUrl}>
            <button
                type="button"
                className={clsx("flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-fit", { "text-white bg-foreground": dark, "text-foreground bg-gray-950": !dark })}
            >
                <div className="mr-3">
                <Image src="/images/testflight-darkmode-64x64@3x.png" alt="TestFlight" width={30} height={30} />
                </div>
                <div>
                    <div className="text-xs">
                        Test it on
                    </div>
                    <div className="-mt-1 font-sans text-xl font-semibold">
                        TestFlight
                    </div>
                </div>
            </button>
        </a>
    )
}

export default TestFlightButton