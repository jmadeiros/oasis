"use client"

import { useState } from "react"
import HAL900DynamicFrameLayout from "../components/HAL900-DynamicFrameLayout"
import { HAL900InterestForm } from "../components/HAL900-InterestForm"
import Image from "next/image"
import Link from "next/link"
import { Inter } from "next/font/google"
import { motion, AnimatePresence } from "framer-motion"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [headerSize] = useState(1.2)
  const [textSize] = useState(0.8)
  const [selectedFrame, setSelectedFrame] = useState<any>(null)
  const [showAbout, setShowAbout] = useState(false)

  return (
    <main className={`${inter.className}`}>
      {/* About Us Tab */}
      <motion.div 
        className="fixed left-0 top-1/2 -translate-y-1/2 z-50"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          onClick={() => setShowAbout(!showAbout)}
          className="flex items-center gap-2 px-6 py-4 bg-white/10 backdrop-blur-md rounded-r-xl text-white/80 hover:text-white hover:bg-white/20 transition-all"
          whileHover={{ scale: 1.05, x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-lg font-medium">About Us</span>
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            animate={{ rotate: showAbout ? 180 : 0 }}
          >
            <path d="m9 18 6-6-6-6"/>
          </motion.svg>
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {showAbout && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-full md:w-[450px] bg-black/95 backdrop-blur-xl z-40 overflow-y-auto"
          >
            <div className="relative p-8 md:p-12 h-full">
              <motion.button
                onClick={() => setShowAbout(false)}
                className="absolute top-6 right-6 text-white/60 hover:text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                </svg>
              </motion.button>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-3xl font-bold text-white mb-4">About Oasis</h2>
                  <p className="text-white/70 leading-relaxed">
                    Welcome to Oasis, where innovation meets tranquility in the heart of modern workspace solutions.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-6"
                >
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">Our Vision</h3>
                    <p className="text-white/70 leading-relaxed">
                      We believe in creating spaces that inspire creativity, foster collaboration, and enhance productivity. Our workspaces are designed to adapt to your needs, whether you're a solo entrepreneur or a growing team.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">What We Offer</h3>
                    <ul className="space-y-3">
                      {[
                        "Flexible workspace solutions",
                        "Modern amenities and technology",
                        "Community-driven environment",
                        "Prime locations worldwide",
                        "24/7 access and security"
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          className="flex items-center gap-3 text-white/70"
                        >
                          <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="pt-6 border-t border-white/10"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">Get Started</h3>
                  <p className="text-white/70 leading-relaxed mb-6">
                    Ready to transform your work experience? Explore our spaces and find the perfect fit for your business.
                  </p>
                  <motion.button
                    onClick={() => {
                      setShowAbout(false)
                      const formElement = document.getElementById('interest-form')
                      if (formElement) {
                        formElement.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="w-full py-3 px-6 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book a Tour
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
              <div className="text-white text-2xl font-bold">
                OASIS
              </div>
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

