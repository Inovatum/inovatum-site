"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { theme } from "@/lib/theme"
import { useState, useEffect } from "react"

export const ScrollToContactButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      const contactSection = document.getElementById("contato")
      if (!contactSection) return // Ensure contact section exists

      const contactSectionTop = contactSection.offsetTop
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight

      // Button is visible as long as the bottom of the viewport is above the contact section
      if (scrollY + viewportHeight < contactSectionTop) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    // Check on mount to ensure visibility from the start
    toggleVisibility()

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById("contato")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            size="icon"
            className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            style={{
              background: `linear-gradient(to right, ${theme.colors.primary.accent}, ${theme.colors.primary.outline})`,
              color: "white",
            }}
            onClick={scrollToContact}
            aria-label="Scroll to Contact Section"
          >
            <ArrowDown className="w-6 h-6" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
