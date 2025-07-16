"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { theme } from "@/lib/theme"

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = ["Início", "Quem Somos", "Serviços", "Transformação", "Projetos", "Contato"]

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-xl shadow-lg" : "bg-transparent"
      }`}
      style={{
        borderBottomColor: scrolled ? theme.colors.primary.outline + "30" : "transparent",
        borderBottomWidth: scrolled ? "1px" : "0px",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: theme.animation.duration.slow, ease: theme.animation.easing.smooth }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className={`text-3xl font-bold bg-gradient-to-r ${theme.colors.gradients.primary} bg-clip-text text-transparent`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Inovatum
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="font-medium transition-colors relative"
                style={{ color: theme.colors.primary.text }}
                whileHover={{
                  y: -2,
                  color: theme.colors.primary.accent,
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: theme.animation.duration.normal }}
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5"
                  style={{ backgroundColor: theme.colors.primary.accent }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: theme.animation.duration.fast }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            style={{ color: theme.colors.primary.text }}
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg"
              style={{ borderColor: theme.colors.primary.outline + "30", borderWidth: "1px" }}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: theme.animation.duration.fast }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="block py-3 px-4 transition-colors"
                  style={{
                    color: theme.colors.primary.text,
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{
                    color: theme.colors.primary.accent,
                    backgroundColor: theme.colors.primary.background,
                  }}
                >
                  {item}
                </motion.a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
