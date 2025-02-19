"use client"
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Slider } from "@/app/components/ui/slider"

interface FrameComponentProps {
  video: string
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

export default function FrameComponent(props: FrameComponentProps) {
  // 1. All hooks first
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  
  // 2. Effect hook
  useEffect(() => {
    if (!videoRef.current) return
    const isImage = props.video.endsWith('.jpg') || props.video.endsWith('.png')
    if (isImage) return

    if (props.autoplayMode === 'all' || props.isHovered) {
      videoRef.current.play().catch(err => console.error('Video play error:', err))
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }, [props.isHovered, props.autoplayMode, props.video])

  // 3. Derived values after hooks
  const isImage = props.video.endsWith('.jpg') || props.video.endsWith('.png')

  // 4. Render
  return (
    <motion.div
      className={`relative w-full h-full rounded-lg overflow-hidden ${
        props.showFrame ? 'border border-white/20' : ''
      }`}
      style={{ width: props.width, height: props.height }}
    >
      {isImage ? (
        <div className="relative w-full h-full">
          <Image
            src={props.video}
            alt={props.label}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ) : (
        <video
          ref={videoRef}
          src={props.video}
          className={`w-full h-full object-cover ${props.className}`}
          loop
          muted
          playsInline
        />
      )}
      {props.showControls && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50">
          <div className="space-y-2">
            <Slider
              value={[props.mediaSize]}
              onValueChange={(value) => props.onMediaSizeChange(value[0])}
              min={0.5}
              max={1.5}
              step={0.1}
            />
            <Slider
              value={[props.borderThickness]}
              onValueChange={(value) => props.onBorderThicknessChange(value[0])}
              min={0}
              max={10}
              step={1}
            />
            <Slider
              value={[props.borderSize]}
              onValueChange={(value) => props.onBorderSizeChange(value[0])}
              min={40}
              max={120}
              step={1}
            />
          </div>
        </div>
      )}
    </motion.div>
  )
}

