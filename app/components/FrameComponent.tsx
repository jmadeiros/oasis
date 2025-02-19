"use client"
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Slider } from "@/app/components/ui/slider"

interface Frame {
  id: string
  defaultPos: { x: number; y: number }
  src: string
}

interface FrameComponentProps {
  frame: Frame
  isHovered: boolean
  showFrame: boolean
  autoplayMode: 'hover' | 'all'
  width: number | string
  height: number | string
  className?: string
  corner: string
  edgeHorizontal: string
  edgeVertical: string
  mediaSize: number
  borderThickness: number
  borderSize: number
  onMediaSizeChange: (value: number) => void
  onBorderThicknessChange: (value: number) => void
  onBorderSizeChange: (value: number) => void
  showControls: boolean
  label: string
}

export default function FrameComponent({
  frame,
  isHovered,
  showFrame,
  autoplayMode,
  width,
  height,
  className = "",
  corner,
  edgeHorizontal,
  edgeVertical,
  mediaSize,
  borderThickness,
  borderSize,
  onMediaSizeChange,
  onBorderThicknessChange,
  onBorderSizeChange,
  showControls,
  label,
}: FrameComponentProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  console.log('Frame props:', { frame, isHovered, showFrame, autoplayMode })

  if (!frame) {
    console.error('Frame is undefined')
    return <div className="w-full h-full bg-red-500">Missing frame data</div>
  }

  useEffect(() => {
    if (!videoRef.current) return

    if (autoplayMode === 'all' || isHovered) {
      videoRef.current.play().catch(err => console.error('Video play error:', err))
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }, [isHovered, autoplayMode])

  return (
    <motion.div
      className={`relative w-full h-full rounded-lg overflow-hidden ${
        showFrame ? 'border border-white/20' : ''
      }`}
    >
      <video
        ref={videoRef}
        src={frame.src}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
      />
    </motion.div>
  )
}

