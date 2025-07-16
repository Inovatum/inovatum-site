"use client"

import { motion, AnimatePresence, Reorder } from "framer-motion"
import { theme } from "@/lib/theme"
import {
  Sparkles,
  Users,
  Briefcase,
  GalleryHorizontal,
  Mail,
  X,
  Minus,
  Maximize,
  Menu,
  Copyright,
  ImageIcon,
  MousePointerClick,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type React from "react"

// Importar os novos componentes de preview
import { HeroBlockPreview } from "./preview-blocks/hero-block-preview"
import { AboutBlockPreview } from "./preview-blocks/about-block-preview"
import { ServicesBlockPreview } from "./preview-blocks/services-block-preview"
import { ProjectsBlockPreview } from "./preview-blocks/projects-block-preview"
import { ContactBlockPreview } from "./preview-blocks/contact-block-preview"
import { MenuBlockPreview } from "./preview-blocks/menu-block-preview"
import { FooterBlockPreview } from "./preview-blocks/footer-block-preview"
import { GalleryBlockPreview } from "./preview-blocks/gallery-block-preview"
import { CTABlockPreview } from "./preview-blocks/cta-block-preview"

interface SitePreviewCanvasProps {
  blocks: string[]
  onReorder: (newOrder: string[]) => void
  canvasRef: React.RefObject<HTMLDivElement>
  onCanvasClose: () => void
  onCanvasMinimize: () => void
  onCanvasMaximize: () => void
  isMinimized: boolean
  isMaximized: boolean
  onRemoveBlock: (blockIdToRemove: string) => void
}

// Map block types to their components and properties
const blockComponents: {
  [key: string]: {
    icon: LucideIcon
    label: string
    gradient: { from: string; to: string } // Updated type
    preview: React.FC<any>
    displayIconColor: string
  }
} = {
  hero: {
    icon: Sparkles,
    label: "Seção Hero",
    gradient: theme.colors.gradients.primary,
    preview: HeroBlockPreview,
    displayIconColor: theme.colors.primary.accent,
  },
  about: {
    icon: Users,
    label: "Sobre Nós",
    gradient: theme.colors.gradients.secondary,
    preview: AboutBlockPreview,
    displayIconColor: theme.colors.primary.outline,
  },
  services: {
    icon: Briefcase,
    label: "Serviços",
    gradient: theme.colors.gradients.accent,
    preview: ServicesBlockPreview,
    displayIconColor: theme.colors.primary.accent,
  },
  projects: {
    icon: GalleryHorizontal,
    label: "Projetos",
    gradient: theme.colors.gradients.secondary, // Updated to use theme object
    preview: ProjectsBlockPreview,
    displayIconColor: theme.colors.primary.outline,
  },
  contact: {
    icon: Mail,
    label: "Contato",
    gradient: theme.colors.gradients.dark,
    preview: ContactBlockPreview,
    displayIconColor: theme.colors.primary.title,
  },
  menu: {
    icon: Menu,
    label: "Menu",
    gradient: theme.colors.gradients.primary,
    preview: MenuBlockPreview,
    displayIconColor: theme.colors.primary.accent,
  },
  footer: {
    icon: Copyright,
    label: "Rodapé",
    gradient: theme.colors.gradients.dark,
    preview: FooterBlockPreview,
    displayIconColor: theme.colors.primary.title,
  },
  gallery: {
    icon: ImageIcon,
    label: "Galeria",
    gradient: theme.colors.gradients.secondary,
    preview: GalleryBlockPreview,
    displayIconColor: theme.colors.primary.outline,
  },
  cta: {
    icon: MousePointerClick,
    label: "CTA",
    gradient: theme.colors.gradients.accent,
    preview: CTABlockPreview,
    displayIconColor: theme.colors.primary.accent,
  },
}

export const SitePreviewCanvas = ({
  blocks,
  onReorder,
  canvasRef,
  onCanvasClose,
  onCanvasMinimize,
  onCanvasMaximize,
  isMinimized,
  isMaximized,
  onRemoveBlock,
}: SitePreviewCanvasProps) => {
  const canvasVariants = {
    minimized: { height: "48px", width: "300px", opacity: 0.8, y: 200, x: 0 },
    maximized: { height: "600px", width: "100%", opacity: 1, y: 0, x: 0 },
    normal: { height: "500px", width: "100%", opacity: 1, y: 0, x: 0 },
  }

  const currentVariant = isMaximized ? "maximized" : isMinimized ? "minimized" : "normal"

  return (
    <motion.div
      ref={canvasRef}
      className="relative w-full rounded-3xl shadow-2xl overflow-hidden border-4 flex flex-col"
      style={{ borderColor: theme.colors.primary.outline + "50" }}
      variants={canvasVariants}
      animate={currentVariant}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      {/* Browser Chrome */}
      <div
        className="flex items-center justify-between p-3 rounded-t-3xl flex-shrink-0"
        style={{
          backgroundColor: theme.colors.primary.outline + "20",
          borderBottom: `1px solid ${theme.colors.primary.outline}30`,
        }}
      >
        <div className="flex space-x-2">
          {/* Red, Yellow, Green dots restored, but only green is functional */}
          <motion.div
            className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onClick={onCanvasMaximize} // Keep functionality
          />
        </div>
        <div
          className="flex-1 mx-4 px-3 py-1 rounded-full text-sm"
          style={{ backgroundColor: theme.colors.primary.background, color: theme.colors.primary.text }}
        >
          <span className="font-mono">seu-site.com.br</span>
        </div>
        <div className="flex space-x-2">
          {/* Minus and X icons restored, but no functionality */}
          <Minus size={16} className="text-gray-500 cursor-pointer" /* onClick={onCanvasMinimize} */ />
          <Maximize size={16} className="text-gray-500 cursor-pointer" onClick={onCanvasMaximize} />
          <X size={16} className="text-gray-500 cursor-pointer" /* onClick={onCanvasClose} */ />
        </div>
      </div>

      {/* Content Area (Drop Zone & Reorderable Blocks) */}
      <div className="flex-1 overflow-hidden">
        <Reorder.Group
          axis="y"
          values={blocks}
          onReorder={onReorder}
          className="relative h-full p-4 overflow-y-auto"
          style={{ backgroundColor: theme.colors.primary.background }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full opacity-10"
                style={{ backgroundColor: theme.colors.primary.accent }}
                initial={{
                  x: Math.random() * 100 + "%",
                  y: Math.random() * 100 + "%",
                }}
                animate={{
                  x: Math.random() * 100 + "%",
                  y: Math.random() * 100 + "%",
                }}
                transition={{
                  duration: Math.random() * 20 + 15,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          <AnimatePresence initial={false}>
            {blocks.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center text-center text-xl font-medium"
                style={{ color: theme.colors.primary.text + "80" }}
              >
                Brique com sua criatividade. Clique nos blocos da paleta para adicioná-los aqui!
              </motion.div>
            )}
            {blocks.map((blockId) => {
              // blockId is now a unique ID
              const blockType = blockId.split("-")[0] // Extract type from ID
              const block = blockComponents[blockType]
              if (!block) return null
              const PreviewComponent = block.preview

              return (
                <Reorder.Item
                  key={blockId} // Use unique ID as key for reordering
                  value={blockId}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }} // Initial scale for spring animation
                  animate={{ opacity: 1, y: 0, scale: 1 }} // Animate to scale 1, spring will handle overshoot
                  exit={{ opacity: 0, x: -100, transition: { duration: 0.3 } }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  className="w-full mb-4 relative cursor-grab"
                >
                  <PreviewComponent
                    gradient={block.gradient}
                    displayIconColor={block.displayIconColor} // Pass the new prop
                  />
                  {/* Remove Button */}
                  <motion.button
                    className="absolute top-2 right-2 p-1 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors z-10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => onRemoveBlock(blockId)} // Pass the unique ID to remove
                  >
                    <X size={12} />
                  </motion.button>
                </Reorder.Item>
              )
            })}
          </AnimatePresence>
        </Reorder.Group>
      </div>
    </motion.div>
  )
}
