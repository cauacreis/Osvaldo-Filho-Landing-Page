import React, { useState, useRef, useCallback } from 'react'
import { Sparkles, MoveHorizontal } from 'lucide-react'

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
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = clientX - rect.left
      const percent = Math.max(0, Math.min(100, (x / rect.width) * 100))
      setSliderPosition(percent)
    },
    []
  )

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      if (!isDragging) return
      handleMove(e.touches[0].clientX)
    },
    [isDragging, handleMove]
  )

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDragging) return
      handleMove(e.clientX)
    },
    [isDragging, handleMove]
  )

  return (
    <div
      ref={containerRef}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
      className={`relative select-none overflow-hidden rounded-2xl bg-black shadow-2xl cursor-ew-resize group ${className}`}
      style={{ touchAction: 'none' }}
    >
      {/* Background (After / Finished Image) */}
      <img
        src={afterImage}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Foreground (Before / Structural Image) with clipPath */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 z-20 pointer-events-none">
        <span className="px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-bold text-teal-300 uppercase tracking-wider shadow-md">
          {beforeLabel}
        </span>
      </div>
      <div className="absolute top-4 right-4 z-20 pointer-events-none">
        <span className="px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-bold text-amber-300 uppercase tracking-wider shadow-md flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-amber-400" />
          {afterLabel}
        </span>
      </div>

      {/* Draggable Divider Line & Knob */}
      <div
        className="absolute top-0 bottom-0 z-30 pointer-events-none -translate-x-1/2 flex items-center justify-center"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Vertical divider line */}
        <div className="w-[2px] h-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]" />

        {/* Circular handle knob */}
        <div className="absolute w-10 h-10 rounded-full bg-slate-900 border-2 border-teal-400 text-white shadow-xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
          <MoveHorizontal className="w-5 h-5 text-teal-300" />
        </div>
      </div>

      {/* Bottom hint */}
      <div className="absolute bottom-3 inset-x-0 flex justify-center z-20 pointer-events-none">
        <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] text-slate-300 font-medium">
          Arraste para comparar a estrutura interna e o resultado final
        </span>
      </div>
    </div>
  )
}
