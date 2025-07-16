"use client"

import { motion } from "framer-motion"
import { GalleryHorizontal } from "lucide-react"
import { theme } from "@/lib/theme"

interface ProjectsBlockPreviewProps {
  gradient: { from: string; to: string } // Updated type
  displayIconColor: string
}

export const ProjectsBlockPreview = ({ gradient, displayIconColor }: ProjectsBlockPreviewProps) => {
  return (
    <motion.div
      className="relative w-full p-4 rounded-xl flex flex-col items-center justify-center text-center shadow-md"
      style={{ backgroundColor: "white" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <GalleryHorizontal className="w-6 h-6 mb-2" style={{ color: displayIconColor }} />
      <h4 className="text-lg font-bold mb-1" style={{ color: theme.colors.primary.title }}>
        Projetos
      </h4>
      <p className="text-xs" style={{ color: theme.colors.primary.text }}>
        Nossos trabalhos.
      </p>
    </motion.div>
  )
}
