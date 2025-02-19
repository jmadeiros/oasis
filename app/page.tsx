"use client"

import { useState } from "react"
import DynamicFrameLayout from './components/DynamicFrameLayout'
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const [headerSize] = useState(1.2)
  const [textSize] = useState(0.8)

  const frames = [
    {
      id: '1',
      defaultPos: { x: 0, y: 0 },
      src: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4'
    },
    {
      id: '2',
      defaultPos: { x: 4, y: 0 },
      src: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4'
    },
    {
      id: '3',
      defaultPos: { x: 0, y: 4 },
      src: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4'
    },
    {
      id: '4',
      defaultPos: { x: 4, y: 4 },
      src: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4'
    }
  ]

  return (
    <div className="min-h-screen bg-[#141414] flex items-center justify-center p-8">
      <div className="w-full h-full flex flex-col md:flex-row items-start gap-8 md:gap-8">
        {/* Left Content */}
        <div className="w-full md:w-[260px] flex-shrink-0 flex flex-col justify-between h-full">
          <div className="flex flex-col gap-16">
            <h1 className="text-4xl md:text-6xl font-light italic text-white/80 tracking-tighter leading-[130%]">
              Brand
              <br />
              Designer
              <br />
              at Luma?
            </h1>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:flex-grow h-[60vh] md:h-[80vh]">
          <DynamicFrameLayout 
            frames={frames}
            initialHoverSize={4}
            initialGapSize={4}
            cleanInterface={true}
          />
        </div>
      </div>
    </div>
  )
}