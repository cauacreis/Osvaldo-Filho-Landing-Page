'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const PageSkeleton: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      className="fixed inset-0 z-50 bg-[#05070B] overflow-hidden flex flex-col justify-between p-4 sm:p-8 select-none pointer-events-none"
      aria-hidden="true"
    >
      {/* Top Navbar Skeleton */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between py-3 px-6 rounded-full bg-slate-900/60 border border-amber-500/20 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-900 border border-amber-500/30 flex items-center justify-center p-1 shrink-0 shadow-[0_0_10px_rgba(212,175,55,0.15)] animate-pulse">
            <img
              src="/assets/logo-gold.png"
              alt="Laboratório Lourenço"
              className="w-full h-full object-contain opacity-70"
              width="36"
              height="36"
            />
          </div>
          <div className="space-y-1.5">
            <div className="w-32 h-3.5 rounded-full bg-slate-800 gold-shimmer-bg" />
            <div className="w-20 h-2.5 rounded-full bg-amber-400/20" />
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <div className="w-16 h-3 rounded-full bg-slate-800 gold-shimmer-bg" />
          <div className="w-20 h-3 rounded-full bg-slate-800 gold-shimmer-bg" />
          <div className="w-16 h-3 rounded-full bg-slate-800 gold-shimmer-bg" />
          <div className="w-20 h-3 rounded-full bg-slate-800 gold-shimmer-bg" />
          <div className="w-16 h-3 rounded-full bg-slate-800 gold-shimmer-bg" />
        </div>

        <div className="w-28 h-9 rounded-full bg-gradient-to-r from-amber-500/30 to-amber-400/20 border border-amber-400/30 animate-pulse" />
      </div>

      {/* Center Hero Skeleton */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-10 my-auto">
        {/* Left Column Text Shimmer */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <div className="w-4/5 h-10 sm:h-14 rounded-2xl bg-slate-800/80 gold-shimmer-bg" />
            <div className="w-3/5 h-10 sm:h-14 rounded-2xl bg-gradient-to-r from-amber-500/30 via-amber-400/40 to-amber-500/20 border border-amber-500/20 animate-pulse" />
          </div>

          <div className="space-y-2.5 max-w-xl pt-2">
            <div className="w-full h-4 rounded-full bg-slate-800/70 gold-shimmer-bg" />
            <div className="w-11/12 h-4 rounded-full bg-slate-800/70 gold-shimmer-bg" />
            <div className="w-4/6 h-4 rounded-full bg-slate-800/70 gold-shimmer-bg" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <div className="w-56 h-14 rounded-2xl bg-gradient-to-r from-amber-400/40 via-amber-300/50 to-amber-500/40 border border-amber-400/40 shadow-gold-glow animate-pulse" />
            <div className="w-48 h-14 rounded-2xl bg-slate-900 border border-slate-800 gold-shimmer-bg" />
          </div>

          <div className="pt-6 flex items-center gap-6 border-t border-slate-800/80">
            <div className="w-36 h-3.5 rounded-full bg-slate-800 gold-shimmer-bg" />
            <div className="w-40 h-3.5 rounded-full bg-slate-800 gold-shimmer-bg" />
          </div>
        </div>

        {/* Right Column Portrait Frame Shimmer */}
        <div className="hidden lg:block lg:col-span-5 flex justify-center">
          <div className="w-full max-w-md aspect-[4/5] rounded-3xl bg-slate-900/60 border border-amber-500/20 p-4 shadow-2xl relative overflow-hidden flex flex-col justify-end">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-slate-900/40 to-transparent gold-shimmer-bg" />
            <div className="space-y-2 relative z-10 p-4 bg-slate-950/80 rounded-2xl border border-white/5">
              <div className="w-32 h-3 rounded-full bg-amber-400/30" />
              <div className="w-48 h-5 rounded-full bg-slate-800 gold-shimmer-bg" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Features Cards Skeleton */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-3 gap-4 pb-2">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="p-5 rounded-3xl bg-slate-900/40 border border-slate-800/80 space-y-3"
          >
            <div className="w-10 h-10 rounded-2xl bg-amber-500/15 border border-amber-400/20 animate-pulse" />
            <div className="w-3/4 h-4 rounded-full bg-slate-800 gold-shimmer-bg" />
            <div className="w-full h-3 rounded-full bg-slate-800/60 gold-shimmer-bg" />
          </div>
        ))}
      </div>
    </motion.div>
  )
}
