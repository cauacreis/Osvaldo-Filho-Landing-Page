import React, { useState, useRef, useCallback } from 'react'
import { MoveHorizontal } from 'lucide-react'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
  className?: string
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Fase Estrutural (Barra)',
  afterLabel = 'Prótese Finalizada',
  className = '',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const isDraggingRef = useRef(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percent)
  }, [])

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true
    try {
      e.currentTarget.setPointerCapture(e.pointerId)
    } catch {
      // Ignore if pointer capture fails
    }
    updatePosition(e.clientX)
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return
    updatePosition(e.clientX)
  }

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = false
    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId)
      }
    } catch {
      // Ignore
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      setSliderPosition((prev) => Math.max(0, prev - 5))
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      setSliderPosition((prev) => Math.min(100, prev + 5))
    } else if (e.key === 'Home') {
      e.preventDefault()
      setSliderPosition(0)
    } else if (e.key === 'End') {
      e.preventDefault()
      setSliderPosition(100)
    }
  }

  return (
    <div
      ref={containerRef}
      role="slider"
      aria-label="Comparativo antes e depois da prótese"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(sliderPosition)}
      tabIndex={0}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onKeyDown={handleKeyDown}
      className={`relative select-none overflow-hidden rounded-2xl bg-black shadow-2xl cursor-ew-resize group focus:outline-none focus:ring-2 focus:ring-teal-400 ${className}`}
      style={{ touchAction: 'none' }}
    >
      {/* Background (After / Finished Image) */}
      <img
        src={afterImage}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        loading="lazy"
      />

      {/* Foreground (Before / Structural Image) with clipPath */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none will-change-[clip-path]"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Draggable Divider Line & Knob */}
      <div
        className="absolute top-0 bottom-0 z-30 pointer-events-none -translate-x-1/2 flex items-center justify-center will-change-[left]"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Vertical divider line */}
        <div className="w-[2px] h-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.9)]" />

        {/* Circular handle knob */}
        <div className="absolute w-10 h-10 rounded-full bg-slate-950 border-2 border-teal-400 text-white shadow-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-active:scale-95 transition-transform">
          <MoveHorizontal className="w-5 h-5 text-teal-300" />
        </div>
      </div>
    </div>
  )
}

