"use client"

import {
  Sparkles,
  Users,
  Briefcase,
  GalleryHorizontal,
  Mail,
  Menu,
  Copyright,
  ImageIcon,
  MousePointerClick,
} from "lucide-react"
import { SiteBlockItem } from "./site-block-item"
import { theme } from "@/lib/theme"
import { motion } from "framer-motion"

interface SiteBlockPaletteProps {
  onClickBlock: (blockType: string) => void
}

export const SiteBlockPalette = ({ onClickBlock }: SiteBlockPaletteProps) => {
  const blocks = [
    { type: "hero", icon: Sparkles, label: "Hero", gradient: theme.colors.gradients.primary },
    { type: "about", icon: Users, label: "Sobre", gradient: theme.colors.gradients.secondary },
    { type: "services", icon: Briefcase, label: "Serviços", gradient: theme.colors.gradients.accent },
    { type: "projects", icon: GalleryHorizontal, label: "Projetos", gradient: theme.colors.gradients.secondary }, // Updated to use theme object
    { type: "contact", icon: Mail, label: "Contato", gradient: theme.colors.gradients.dark },
    { type: "menu", icon: Menu, label: "Menu", gradient: theme.colors.gradients.primary },
    { type: "footer", icon: Copyright, label: "Rodapé", gradient: theme.colors.gradients.dark },
    { type: "gallery", icon: ImageIcon, label: "Galeria", gradient: theme.colors.gradients.secondary },
    { type: "cta", icon: MousePointerClick, label: "CTA", gradient: theme.colors.gradients.accent },
  ]

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-4 rounded-2xl shadow-xl"
      style={{
        backgroundColor: theme.colors.primary.background,
        borderColor: theme.colors.primary.outline + "30",
        borderWidth: "1px",
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: theme.animation.duration.slow, delay: 0.5 }}
    >
      {blocks.map((block) => (
        <SiteBlockItem
          key={block.type}
          icon={block.icon}
          label={block.label}
          gradient={block.gradient}
          blockType={block.type}
          onClick={onClickBlock}
        />
      ))}
    </motion.div>
  )
}
