"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FloatingParticles } from "@/components/ui/floating-particles"
import { theme } from "@/lib/theme"

export const HeroSection = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3])

  return (
    <section
      ref={ref}
      id="início"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, white 0%, ${theme.colors.primary.background} 50%, ${theme.colors.primary.outline}20 100%)`,
      }}
    >
      <FloatingParticles />

      <motion.div className="relative z-10 text-center px-6 max-w-6xl mx-auto" style={{ y, opacity }}>
        <motion.div
          className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8"
          style={{
            backgroundColor: theme.colors.primary.accent + "20",
            color: theme.colors.primary.title,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: theme.animation.duration.slow, delay: 0.2 }}
        >
          <Sparkles className="w-4 h-4 mr-2" />
          Transformando ideias em realidade digital
        </motion.div>

        <motion.h1
          className={`text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r ${theme.colors.gradients.dark} bg-clip-text text-transparent leading-tight`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Criamos o
          <br />
          <span className={`bg-gradient-to-r ${theme.colors.gradients.primary} bg-clip-text text-transparent`}>
            futuro digital
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-12 leading-relaxed max-w-4xl mx-auto"
          style={{ color: theme.colors.primary.text }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Somos cinco mentes criativas unidas pela paixão por inovação.
          <br />
          Transformamos conceitos complexos em experiências digitais extraordinárias.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Button
            size="lg"
            className={`bg-gradient-to-r ${theme.colors.gradients.primary} text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
            style={{
              background: `linear-gradient(to right, ${theme.colors.primary.accent}, ${theme.colors.primary.outline})`,
            }}
          >
            Ver Nossos Projetos
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 bg-transparent"
            style={{
              borderColor: theme.colors.primary.outline,
              color: theme.colors.primary.title,
              borderWidth: "2px",
            }}
          >
            <Play className="mr-2 w-5 h-5" />
            Assistir Demo
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div
          className="w-6 h-10 rounded-full flex justify-center"
          style={{
            borderColor: theme.colors.primary.accent,
            borderWidth: "2px",
          }}
        >
          <div className="w-1 h-3 rounded-full mt-2" style={{ backgroundColor: theme.colors.primary.accent }}></div>
        </div>
      </motion.div>
    </section>
  )
}
