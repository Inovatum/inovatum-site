"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles } from "lucide-react"
import { theme } from "@/lib/theme"
import { useState, useEffect } from "react"

interface MascotProps {
  message: string | null
  onMessageDisplayed: () => void // Callback to clear message
}

export const Mascot = ({ message, onMessageDisplayed }: MascotProps) => {
  const [displayMessage, setDisplayMessage] = useState<string | null>(null)

  useEffect(() => {
    if (message) {
      setDisplayMessage(message)
      const timer = setTimeout(() => {
        setDisplayMessage(null)
        onMessageDisplayed()
      }, 3000) // Message disappears after 3 seconds
      return () => clearTimeout(timer)
    }
  }, [message, onMessageDisplayed])

  return (
    <motion.div
      className="absolute z-30"
      // Position it above the browser, slightly to the right
      style={{ top: "-80px", right: "20%", transform: "translateX(50%)" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }} // Mascot exits quickly
      transition={{ type: "spring", stiffness: 400, damping: 30, delay: 0.05 }} // Faster mascot animation
    >
      {/* Speech Bubble */}
      <AnimatePresence>
        {displayMessage && (
          <motion.div
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 rounded-lg shadow-lg whitespace-nowrap"
            style={{
              backgroundColor: theme.colors.primary.title, // Dark blue bubble
              color: "white",
              fontSize: "0.9rem",
            }}
            initial={{ opacity: 0, scale: 0.8, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {displayMessage}
            <div
              className="absolute left-1/2 top-full -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent"
              style={{ borderTop: `8px solid ${theme.colors.primary.title}` }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mascot Body */}
      <motion.div
        className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl"
        style={{
          background: `linear-gradient(45deg, ${theme.colors.primary.accent}, ${theme.colors.primary.outline})`,
        }}
        animate={{
          y: [0, -5, 0], // Floating animation
          rotate: [0, 5, -5, 0], // Subtle tilt
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Sparkles className="w-8 h-8 text-white" />
      </motion.div>
    </motion.div>
  )
}
