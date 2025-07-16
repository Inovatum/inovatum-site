"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Sparkles } from "lucide-react"
import { theme } from "@/lib/theme"
import { CodeBlock } from "@/components/transformation/code-block"
import { ConnectionLines } from "@/components/transformation/connection-lines"
import { AppScreen } from "@/components/transformation/app-screen"

export const TransformationSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-200px" })
  const [currentExample, setCurrentExample] = useState(0)
  const [animationKey, setAnimationKey] = useState(0)

  const handleCodeChange = () => {
    setAnimationKey((prev) => prev + 1) // Força recriação das animações
  }

  return (
    <section
      ref={ref}
      id="transformação"
      className="py-32 relative overflow-hidden"
      style={{ backgroundColor: theme.colors.primary.background }}
    >
      <div className="container mx-auto px-6">
        {/* Título da seção */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: theme.animation.duration.slow }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{
              backgroundColor: theme.colors.primary.accent + "20",
              color: theme.colors.primary.title,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: theme.animation.duration.normal }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Transformação Digital
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: theme.colors.primary.title }}>
            Do Código ao Aplicativo
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: theme.colors.primary.text }}>
            Veja como transformamos linhas de código em aplicativos funcionais e intuitivos, criados especialmente para
            facilitar sua vida digital.
          </p>
        </motion.div>

        {/* Conteúdo principal */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Lado esquerdo - Código */}
            <div className="relative">
              <CodeBlock
                currentExample={currentExample}
                setCurrentExample={setCurrentExample}
                onCodeChange={handleCodeChange}
              />
            </div>

            {/* Lado direito - App */}
            <div className="relative flex justify-center">
              <AppScreen isActive={isInView} currentApp={currentExample} />
            </div>
          </div>

          {/* Linhas de conexão melhoradas */}
          <div className="hidden lg:block">
            <ConnectionLines key={animationKey} isActive={isInView} currentApp={currentExample} />
          </div>
        </div>

        {/* Texto explicativo */}
        <motion.div
          className="text-center mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: theme.animation.duration.slow, delay: 3 }}
        >
          <p className="text-lg leading-relaxed" style={{ color: theme.colors.primary.text }}>
            Cada linha de código é cuidadosamente pensada para criar interfaces simples, claras e acessíveis. Nosso foco
            é desenvolver tecnologia que se adapta a você, não o contrário.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
