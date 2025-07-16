"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
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
  const [isMobileView, setIsMobileView] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1024)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleCodeChange = () => {
    setAnimationKey((prev) => prev + 1)
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

        {/* Conteúdo principal - Layout condicional para mobile/desktop */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
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

            {/* Linhas de conexão para desktop */}
            <div className="absolute inset-0">
              <ConnectionLines key={animationKey} isActive={isInView} currentApp={currentExample} isMobile={false} />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex flex-col items-center gap-4 lg:hidden">
            {" "}
            {/* Aumentado o gap para 4 para espaçamento */}
            {/* Lado superior - Código (centralizado para mobile) */}
            <motion.div
              className="relative w-full flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: theme.animation.duration.slow }}
            >
              <motion.div
                className="origin-center"
                initial={{ scale: 1 }}
                animate={{ scale: 1 }} // Removido o scale para 0.5, mantendo o tamanho original
                transition={{ duration: 0.5 }}
              >
                <CodeBlock
                  currentExample={currentExample}
                  setCurrentExample={setCurrentExample}
                  onCodeChange={handleCodeChange}
                />
              </motion.div>
            </motion.div>
            {/* Linhas de conexão para Mobile (entre código e app) */}
            <div className="relative w-full h-20 flex items-center justify-center overflow-hidden">
              {" "}
              {/* Aumentado a altura para h-20 */}
              <ConnectionLines key={animationKey} isActive={isInView} currentApp={currentExample} isMobile={true} />
            </div>
            {/* Lado inferior - App */}
            <div className="relative flex justify-center w-full">
              <AppScreen isActive={isInView} currentApp={currentExample} />
            </div>
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
