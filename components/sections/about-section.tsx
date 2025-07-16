"use client"

import { motion } from "framer-motion"
import { Layers } from "lucide-react"
import { theme } from "@/lib/theme"

export const AboutSection = () => {
  return (
    <section id="quem-somos" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
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
            <Layers className="w-4 h-4 mr-2" />
            Quem Somos
          </motion.div>
          <h2
            className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${theme.colors.gradients.dark} bg-clip-text text-transparent`}
          >
            Nossa História
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: theme.colors.primary.text }}>
            Somos uma startup de tecnologia, onde já atuamos na Serasa e Magalu.
          </p>
        </motion.div>

        {/* Nova seção de texto simples */}
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: theme.animation.duration.slow, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p
            className="text-2xl md:text-3xl font-semibold leading-relaxed"
            style={{ color: theme.colors.primary.title }}
          >
            Com uma equipe de 4 especialistas apaixonados por tecnologia, transformamos ideias complexas em soluções
            digitais inovadoras. Nossa experiência em grandes empresas nos permite entregar resultados de alto impacto.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
