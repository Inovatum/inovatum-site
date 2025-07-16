"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Sparkles, RotateCcw } from "lucide-react"
import { theme } from "@/lib/theme"
import { SiteBlockPalette } from "@/components/build-your-site/site-block-palette"
import { SitePreviewCanvas } from "@/components/build-your-site/site-preview-canvas"
import { Button } from "@/components/ui/button"
import { Mascot } from "@/components/build-your-site/mascot" // Import the Mascot component

export const BuildYourSiteSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [canvasBlocks, setCanvasBlocks] = useState<string[]>([])
  const canvasRef = useRef<HTMLDivElement>(null)

  const [isCanvasMinimized, setIsCanvasMinimized] = useState(false)
  const [isCanvasMaximized, setIsCanvasMaximized] = useState(false)
  const [isCanvasClosed, setIsCanvasClosed] = useState(false)

  const [mascotMessage, setMascotMessage] = useState<string | null>(null)
  const [mascotKey, setMascotKey] = useState(0) // To force re-render of mascot for new animation

  const addPhrases = ["Você tem bom gosto!", "Excelente escolha!", "Criatividade em ação!", "Perfeito para o seu site!"]
  const removePhrases = ["Que pena!", "Adeus, bloco!", "Menos é mais, talvez?", "Ok, vamos simplificar!"]

  const getRandomPhrase = (phrases: string[]) => {
    return phrases[Math.floor(Math.random() * phrases.length)]
  }

  const handleClickBlock = (blockType: string) => {
    const uniqueId = `${blockType}-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
    setCanvasBlocks((prevBlocks) => [...prevBlocks, uniqueId])
    setMascotMessage(getRandomPhrase(addPhrases))
    setMascotKey((prev) => prev + 1)
  }

  const handleReorderCanvasBlocks = (newOrder: string[]) => {
    setCanvasBlocks(newOrder)
  }

  const handleResetCanvas = () => {
    setCanvasBlocks([])
    setIsCanvasClosed(false)
    setIsCanvasMinimized(false)
    setIsCanvasMaximized(false)
    setMascotMessage(null) // Clear mascot message on reset
  }

  const handleCanvasClose = () => {
    setIsCanvasClosed(true)
    setCanvasBlocks([])
    setMascotMessage(null) // Clear mascot message on close
  }

  const handleCanvasMinimize = () => {
    setIsCanvasMinimized((prev) => !prev)
    setIsCanvasMaximized(false)
  }

  const handleCanvasMaximize = () => {
    setIsCanvasMaximized((prev) => !prev)
    setIsCanvasMinimized(false)
  }

  const handleRemoveBlock = (blockIdToRemove: string) => {
    setCanvasBlocks((prevBlocks) => prevBlocks.filter((id) => id !== blockIdToRemove))
    setMascotMessage(getRandomPhrase(removePhrases))
    setMascotKey((prev) => prev + 1)
  }

  const handleMascotMessageDisplayed = () => {
    setMascotMessage(null) // Clear message after it's displayed for a duration
  }

  if (isCanvasClosed) {
    return (
      <section
        ref={sectionRef}
        id="monte-seu-site"
        className="py-24 relative overflow-hidden flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, white 0%, ${theme.colors.primary.background} 50%, ${theme.colors.primary.outline}20 100%)`,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-2xl font-bold mb-4" style={{ color: theme.colors.primary.title }}>
            Navegador Fechado!
          </p>
          <Button
            onClick={() => setIsCanvasClosed(false)}
            className={`bg-gradient-to-r ${theme.colors.gradients.primary} text-white px-6 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
          >
            Reabrir Navegador
          </Button>
        </motion.div>
      </section>
    )
  }

  return (
    <section
      ref={sectionRef}
      id="monte-seu-site"
      className="py-24 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, white 0%, ${theme.colors.primary.background} 50%, ${theme.colors.primary.outline}20 100%)`,
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Título da seção */}
        <motion.div
          className="text-center mb-16"
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
            Sua Visão, Seu Site
          </motion.div>
          <h2
            className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${theme.colors.gradients.dark} bg-clip-text text-transparent`}
          >
            Monte Seu Site do Zero
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: theme.colors.primary.text }}>
            Clique nos blocos para criar o layout perfeito.
          </p>
        </motion.div>

        {/* Frase Impactante */}
        <motion.p
          className="text-3xl md:text-4xl font-extrabold text-center mb-16 leading-tight"
          style={{ color: theme.colors.primary.title }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: theme.animation.duration.slow, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <span className={`bg-gradient-to-r ${theme.colors.gradients.primary} bg-clip-text text-transparent`}>
            Você é o dono do seu site,
          </span>
          <br />
          você faz como bem entender!
        </motion.p>

        {/* Área de construção */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Paleta de Blocos */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: theme.animation.duration.slow, delay: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: theme.colors.primary.title }}>
              Blocos Disponíveis
            </h3>
            <SiteBlockPalette onClickBlock={handleClickBlock} />
          </motion.div>

          {/* Canvas de Visualização */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: theme.animation.duration.slow, delay: 0.9 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col items-center relative"
          >
            <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: theme.colors.primary.title }}>
              Seu Layout
            </h3>
            {/* Mascot positioned relative to this container */}
            <Mascot key={mascotKey} message={mascotMessage} onMessageDisplayed={handleMascotMessageDisplayed} />
            <SitePreviewCanvas
              blocks={canvasBlocks}
              onReorder={handleReorderCanvasBlocks}
              canvasRef={canvasRef}
              onCanvasClose={handleCanvasClose}
              onCanvasMinimize={handleCanvasMinimize}
              onCanvasMaximize={handleCanvasMaximize}
              isMinimized={isCanvasMinimized}
              isMaximized={isCanvasMaximized}
              onRemoveBlock={handleRemoveBlock}
            />
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: theme.animation.duration.normal, delay: 1.2 }}
            >
              <Button
                onClick={handleResetCanvas}
                className={`bg-gradient-to-r ${theme.colors.gradients.dark} text-white px-6 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Reiniciar Layout
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
