"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface SiteBlockItemProps {
  icon: LucideIcon
  label: string
  gradient: { from: string; to: string } // Updated type
  blockType: string
  onClick: (type: string) => void
  className?: string
}

export const SiteBlockItem = ({ icon: Icon, label, gradient, blockType, onClick, className }: SiteBlockItemProps) => {
  return (
    <motion.div
      className={cn(
        "relative flex flex-col items-center justify-center p-1 rounded-[40%_60%_70%_30%_/_60%_30%_70%_40%] shadow-lg cursor-pointer transition-all duration-300 z-20 text-white", // Reduced padding to p-1
        className,
      )}
      style={{ background: `linear-gradient(to bottom right, ${gradient.from}, ${gradient.to})` }} // Applied inline style
      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(blockType)}
      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <Icon className="w-4 h-4 mb-0.5" /> {/* Reduced icon size to w-4 h-4 and mb-0.5 */}
      <span className="text-[0.65rem] font-semibold text-center">{label}</span>{" "}
      {/* Reduced font size to text-[0.65rem] */}
    </motion.div>
  )
}
