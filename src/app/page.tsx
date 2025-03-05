"use client"

import { useState } from "react"
import HAL900DynamicFrameLayout from "../components/HAL900-DynamicFrameLayout"
import { HAL900InterestForm } from "../components/HAL900-InterestForm"
import Image from "next/image"
import Link from "next/link"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [headerSize] = useState(1.2)
  const [textSize] = useState(0.8)
  const [selectedFrame, setSelectedFrame] = useState<any>(null)

  return (
    <main className={`${inter.className}`}>
      <div className={`min-h-screen bg-[#141414] flex flex-col justify-center p-8`}>
        <div className="w-full h-full flex flex-col md:flex-row items-start gap-8 md:gap-8">
          {/* Left Content */}
          <div className="w-full md:w-[260px] flex-shrink-0 flex flex-col justify-between h-full">
            <div className="flex flex-col gap-8">
              <h1
                className={`text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[130%]`}
                style={{ fontSize: `${4 * headerSize}rem` }}
              >
                Workspace
                <br />
                that works
                <br />
                for you
              </h1>
              <div
                className={`flex flex-col gap-6 text-white/50 text-sm font-light max-w-[300px]`}
                style={{ fontSize: `${0.875 * textSize}rem` }}
              >
                <p>
                  WeWork offers flexible workspace solutions for businesses of all sizes. From startups to Fortune 500
                  companies, we provide the space, community, and services you need to make a life, not just a living.
                </p>
                <p>
                  Our spaces are designed to promote productivity whether you're a team of one or 100, and month-to-month
                  flexibility means your space is just as agile as you are.
                </p>
                <p>Explore our diverse range of workspace solutions.</p>
              </div>
              <Link
                href="https://www.wework.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 relative opacity-80 hover:opacity-100 transition-opacity"
              >
                <Image src="/wework-logo-white.png" alt="WeWork Logo" fill className="object-contain" />
              </Link>
            </div>
            <a
              href="https://www.wework.com/contact-us"
              className="inline-block px-6 py-3 text-white/70 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-colors text-center w-full max-w-[260px] text-sm mt-8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </a>
          </div>

          {/* Right Content */}
          <div className="w-full md:flex-grow h-[60vh] md:h-[80vh]">
            <HAL900DynamicFrameLayout onFrameSelect={setSelectedFrame} />
          </div>
        </div>
      </div>
      <HAL900InterestForm selectedFrame={selectedFrame} />
    </main>
  )
}

