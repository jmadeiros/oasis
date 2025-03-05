"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { HAL900FrameComponent } from "./HAL900-FrameComponent"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

const GRID_SIZE = 12
const CELL_SIZE = 60 // pixels per grid cell

interface Frame {
  id: number
  video: string
  fallbackImage: string
  textContent: string
  defaultPos: { x: number; y: number; w: number; h: number }
  corner: string
  edgeHorizontal: string
  edgeVertical: string
  mediaSize: number
  borderThickness: number
  borderSize: number
  autoplayMode: "all" | "hover"
  isHovered: boolean
  label: string
  enableTextSwitch: boolean
}

const perks = [
  "Flexible workspace",
  "Networking opportunities",
  "Cost-effective solutions",
  "Professional environment",
  "High-speed internet",
  "Meeting rooms access",
  "24/7 availability",
  "Community events",
  "Fully equipped kitchens",
]

const initialFrames: Frame[] = [
  {
    id: 1,
    video:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-1423846155-640_adpp_is-xKGdsGDzCD701ThCIWM6KzPm9OFXpf.mp4",
    fallbackImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-16%20200034-RkSkXb6PWOma24jAqPu0a0ieVF2Gn0.png",
    textContent: perks[0],
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_vert_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_hori_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
    label: "Open Space",
    enableTextSwitch: true,
  },
  {
    id: 2,
    video:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-1390034707-640_adpp_is-DermfS7Pw7ORPvvzI6Kd0HoCgP1eWz.mp4",
    fallbackImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-16%20200149-PFZZ4sInrCMXeHHQXUcojkGpmzv8dw.png",
    textContent: perks[1],
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_vert_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_hori_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
    label: "Meeting Room",
    enableTextSwitch: true,
  },
  {
    id: 3,
    video:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-683228734-640_adpp_is-JbZs6TMSqwy1SuY5N2OgfsooA7bMEM.mp4",
    fallbackImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-16%20200107-gVqZVuyGJqddxwjqbjYWa403iLIRCG.png",
    textContent: perks[2],
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_Corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_hori_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_Vert_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
    label: "Desk Area",
    enableTextSwitch: true,
  },
  {
    id: 4,
    video: "https://wework.com/assets/videos/common-area.mp4",
    fallbackImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-16%20200124-bTJWclo8LHKqQR2bJ0MK1avX4E5dXG.png",
    textContent: perks[3],
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_hori_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_vert_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
    label: "Lounge",
    enableTextSwitch: true,
  },
  {
    id: 5,
    video: "https://wework.com/assets/videos/event-space.mp4",
    fallbackImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-16%20195616-BsGG4cjLf6MxOnsBjoTrSopJND4XPO.png",
    textContent: perks[4],
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/9e67e05f37e52522/5_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/9e67e05f37e52522/5_hori_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/9e67e05f37e52522/5_verti_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
    label: "Event Hall",
    enableTextSwitch: true,
  },
  {
    id: 6,
    video: "https://wework.com/assets/videos/outdoor-space.mp4",
    fallbackImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-16%20200050-zJfQ11tOGZUcYi9ilwbzrZCUyY5yRY.png",
    textContent: perks[5],
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/1199340587e8da1d/6_corner.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/1199340587e8da1d/6_corner-1.png",
    edgeVertical: "https://static.cdn-luma.com/files/1199340587e8da1d/6_vert.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
    label: "Terrace",
    enableTextSwitch: true,
  },
  {
    id: 7,
    video:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-1184724977-640_adpp_is-BxHe3QhG17P9lAE3AjjzJDDkAMz15x.mp4",
    fallbackImage: "/placeholder.svg?height=400&width=600",
    textContent: perks[6],
    defaultPos: { x: 0, y: 8, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/b80b5aa00ccc33bd/7_corner.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/b80b5aa00ccc33bd/7_hori.png",
    edgeVertical: "https://static.cdn-luma.com/files/b80b5aa00ccc33bd/7_vert.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
    label: "Office",
    enableTextSwitch: true,
  },
  {
    id: 8,
    video: "https://wework.com/assets/videos/wellness-room.mp4",
    fallbackImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-16%20200149-KAyn2mRzw182pyhRqep3CCOwcSJXpn.png",
    textContent: perks[7],
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/981e483f71aa764b/8_corner.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/981e483f71aa764b/8_hori.png",
    edgeVertical: "https://static.cdn-luma.com/files/981e483f71aa764b/8_verticle.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
    label: "Wellness",
    enableTextSwitch: true,
  },
  {
    id: 9,
    video: "https://wework.com/assets/videos/reception.mp4",
    fallbackImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mortimer-House-Office-scaled.jpg-6cPdudMdaQkO2fRIg6wEFQxcJB7xiA.jpeg",
    textContent: perks[8],
    defaultPos: { x: 8, y: 8, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/981e483f71aa764b/9_corner.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/981e483f71aa764b/9_hori.png",
    edgeVertical: "https://static.cdn-luma.com/files/981e483f71aa764b/9_vert.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
    label: "Reception",
    enableTextSwitch: true,
  },
]

interface DynamicFrameLayoutProps {
  onFrameSelect: (frame: Frame | null) => void
}

function HAL900DynamicFrameLayout({ onFrameSelect }: DynamicFrameLayoutProps) {
  const [frames, setFrames] = useState<Frame[]>(initialFrames)
  const [hovered, setHovered] = useState<{ row: number; col: number } | null>(null)
  const [selectedFrame, setSelectedFrame] = useState<Frame | null>(null)
  const [hoverSize, setHoverSize] = useState(6)
  const [gapSize, setGapSize] = useState(4)
  const [showControls, setShowControls] = useState(false)
  const [cleanInterface, setCleanInterface] = useState(true)
  const [showFrames, setShowFrames] = useState(false)
  const [autoplayMode, setAutoplayMode] = useState<"all" | "hover">("all")
  const [activeTextFrames, setActiveTextFrames] = useState<number[]>([])

  const getRowSizes = () => {
    if (hovered === null) {
      return "4fr 4fr 4fr"
    }
    const { row } = hovered
    const nonHoveredSize = (12 - hoverSize) / 2
    return [0, 1, 2].map((r) => (r === row ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ")
  }

  const getColSizes = () => {
    if (hovered === null) {
      return "4fr 4fr 4fr"
    }
    const { col } = hovered
    const nonHoveredSize = (12 - hoverSize) / 2
    return [0, 1, 2].map((c) => (c === col ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ")
  }

  const getTransformOrigin = (x: number, y: number) => {
    const vertical = y === 0 ? "top" : y === 4 ? "center" : "bottom"
    const horizontal = x === 0 ? "left" : x === 4 ? "center" : "right"
    return `${vertical} ${horizontal}`
  }

  const updateFrameProperty = (id: number, property: keyof Frame, value: any) => {
    setFrames(frames.map((frame) => (frame.id === id ? { ...frame, [property]: value } : frame)))
  }

  const handleTextSwitch = (frameId: number, isShowingText: boolean) => {
    if (isShowingText) {
      setActiveTextFrames((prev) => {
        if (prev.length < 2) {
          return [...prev, frameId]
        } else {
          const [_, ...rest] = prev
          return [...rest, frameId]
        }
      })
    } else {
      setActiveTextFrames((prev) => prev.filter((id) => id !== frameId))
    }
  }

  const toggleControls = () => {
    setShowControls(!showControls)
  }

  const toggleCleanInterface = () => {
    setCleanInterface(!cleanInterface)
    if (!cleanInterface) {
      setShowControls(false)
    }
  }

  const updateCodebase = () => {
    console.log("Updating codebase with current values:")
    console.log("Hover Size:", hoverSize)
    console.log("Gap Size:", gapSize)
    console.log("Frames:", frames)
  }

  const handleFrameClick = (frame: Frame) => {
    setSelectedFrame(frame)
    onFrameSelect(frame)
    const formElement = document.getElementById('interest-form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="space-y-4 w-full h-full">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Switch id="frame-toggle" checked={showFrames} onCheckedChange={setShowFrames} />
            <label htmlFor="frame-toggle" className="text-sm text-white/70">
              {showFrames ? "Hide Frames" : "Show Frames"}
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="autoplay-toggle"
              checked={autoplayMode === "all"}
              onCheckedChange={(checked) => setAutoplayMode(checked ? "all" : "hover")}
            />
            <label htmlFor="autoplay-toggle" className="text-sm text-white/70">
              {autoplayMode === "all" ? "Autoplay All" : "Hover Autoplay"}
            </label>
          </div>
        </div>
      </div>
      {!cleanInterface && (
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Dynamic Frame Layout</h2>
          <div className="space-x-2">
            <Button onClick={toggleControls}>{showControls ? "Hide Controls" : "Show Controls"}</Button>
            <Button onClick={updateCodebase}>Update Codebase</Button>
            <Button onClick={toggleCleanInterface}>{cleanInterface ? "Show UI" : "Hide UI"}</Button>
          </div>
        </div>
      )}
      {!cleanInterface && showControls && (
        <>
          <div className="space-y-2">
            <label htmlFor="hover-size" className="block text-sm font-medium text-gray-200">
              Hover Size: {hoverSize}
            </label>
            <Slider
              id="hover-size"
              min={4}
              max={8}
              step={0.1}
              value={[hoverSize]}
              onValueChange={(value) => setHoverSize(value[0])}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="gap-size" className="block text-sm font-medium text-gray-200">
              Gap Size: {gapSize}px
            </label>
            <Slider
              id="gap-size"
              min={0}
              max={20}
              step={1}
              value={[gapSize]}
              onValueChange={(value) => setGapSize(value[0])}
            />
          </div>
        </>
      )}
      <div
        className="relative w-full h-full"
        style={{
          display: "grid",
          gridTemplateRows: getRowSizes(),
          gridTemplateColumns: getColSizes(),
          gap: `${gapSize}px`,
          transition: "grid-template-rows 0.4s ease, grid-template-columns 0.4s ease",
        }}
      >
        {frames.map((frame) => {
          const row = Math.floor(frame.defaultPos.y / 4)
          const col = Math.floor(frame.defaultPos.x / 4)
          const transformOrigin = getTransformOrigin(frame.defaultPos.x, frame.defaultPos.y)

          return (
            <motion.div
              key={frame.id}
              className="relative"
              style={{
                transformOrigin,
                transition: "transform 0.4s ease",
              }}
              onMouseEnter={() => setHovered({ row, col })}
              onMouseLeave={() => setHovered(null)}
            >
              <HAL900FrameComponent
                video={frame.video}
                fallbackImage={frame.fallbackImage}
                textContent={frame.textContent}
                width="100%"
                height="100%"
                className="absolute inset-0"
                corner={frame.corner}
                edgeHorizontal={frame.edgeHorizontal}
                edgeVertical={frame.edgeVertical}
                mediaSize={frame.mediaSize}
                borderThickness={frame.borderThickness}
                borderSize={frame.borderSize}
                onMediaSizeChange={(value) => updateFrameProperty(frame.id, "mediaSize", value)}
                onBorderThicknessChange={(value) => updateFrameProperty(frame.id, "borderThickness", value)}
                onBorderSizeChange={(value) => updateFrameProperty(frame.id, "borderSize", value)}
                showControls={showControls && !cleanInterface}
                label={frame.label}
                showFrame={showFrames}
                autoplayMode={autoplayMode}
                isHovered={
                  hovered?.row === Math.floor(frame.defaultPos.y / 4) &&
                  hovered?.col === Math.floor(frame.defaultPos.x / 4)
                }
                enableTextSwitch={
                  frame.enableTextSwitch && (activeTextFrames.includes(frame.id) || activeTextFrames.length < 2)
                }
                onTextSwitch={(isShowingText) => handleTextSwitch(frame.id, isShowingText)}
                onFrameClick={() => handleFrameClick(frame)}
              />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default HAL900DynamicFrameLayout

