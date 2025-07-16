"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { FloatingParticles } from "@/components/ui/floating-particles"
import { theme } from "@/lib/theme"

export const ContactSection = () => {
  return (
    <section
      id="contato"
      className="py-24 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${theme.colors.primary.background} 0%, white 50%, ${theme.colors.primary.background} 100%)`,
      }}
    >
      <FloatingParticles />

      <div className="container mx-auto px-6 relative z-10">
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
            <Mail className="w-4 h-4 mr-2" />
            Entre em Contato
          </motion.div>
          <h2
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(to right, ${theme.colors.gradients.dark.from}, ${theme.colors.gradients.dark.to})`,
            }}
          >
            Vamos Conversar
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: theme.colors.primary.text }}>
            Pronto para transformar sua ideia em realidade digital? Vamos criar algo extraordinário juntos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: theme.animation.duration.slow }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: theme.colors.primary.title }}>
                        Nome Completo
                      </label>
                      <Input
                        className="bg-white rounded-xl"
                        style={{
                          borderColor: theme.colors.primary.outline + "50",
                          focusBorderColor: theme.colors.primary.accent,
                        }}
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: theme.colors.primary.title }}>
                        Email
                      </label>
                      <Input
                        type="email"
                        className="bg-white rounded-xl"
                        style={{
                          borderColor: theme.colors.primary.outline + "50",
                          focusBorderColor: theme.colors.primary.accent,
                        }}
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: theme.colors.primary.title }}>
                      Empresa
                    </label>
                    <Input
                      className="bg-white rounded-xl"
                      style={{
                        borderColor: theme.colors.primary.outline + "50",
                        focusBorderColor: theme.colors.primary.accent,
                      }}
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: theme.colors.primary.title }}>
                      Assunto
                    </label>
                    <Input
                      className="bg-white rounded-xl"
                      style={{
                        borderColor: theme.colors.primary.outline + "50",
                        focusBorderColor: theme.colors.primary.accent,
                      }}
                      placeholder="Como podemos ajudar?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: theme.colors.primary.title }}>
                      Mensagem
                    </label>
                    <Textarea
                      className="bg-white rounded-xl min-h-32"
                      style={{
                        borderColor: theme.colors.primary.outline + "50",
                        focusBorderColor: theme.colors.primary.accent,
                      }}
                      placeholder="Conte-nos sobre seu projeto e objetivos..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full text-white py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    style={{
                      background: `linear-gradient(to right, ${theme.colors.gradients.primary.from}, ${theme.colors.gradients.primary.to})`,
                    }}
                  >
                    Enviar Mensagem
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: theme.animation.duration.slow }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-8" style={{ color: theme.colors.primary.title }}>
                Informações de Contato
              </h3>

              <div className="space-y-6">
                <motion.div
                  className="flex items-center space-x-4 p-4 bg-white/60 rounded-xl backdrop-blur-sm"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg"
                    style={{
                      background: `linear-gradient(to right, ${theme.colors.gradients.primary.from}, ${theme.colors.gradients.primary.to})`,
                    }}
                  >
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-medium" style={{ color: theme.colors.primary.text }}>
                      Email
                    </p>
                    <p className="font-semibold text-lg" style={{ color: theme.colors.primary.title }}>
                      contato@inovatum.com
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4 p-4 bg-white/60 rounded-xl backdrop-blur-sm"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg"
                    style={{
                      background: `linear-gradient(to right, ${theme.colors.gradients.accent.from}, ${theme.colors.gradients.accent.to})`,
                    }}
                  >
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-medium" style={{ color: theme.colors.primary.text }}>
                      Telefone
                    </p>
                    <p className="font-semibold text-lg" style={{ color: theme.colors.primary.title }}>
                      +55 (74) 99918-6360
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4 p-4 bg-white/60 rounded-xl backdrop-blur-sm"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg"
                    style={{
                      background: `linear-gradient(to right, ${theme.colors.gradients.secondary.from}, ${theme.colors.gradients.secondary.to})`,
                    }}
                  >
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-medium" style={{ color: theme.colors.primary.text }}>
                      Localização
                    </p>
                    <p className="font-semibold text-lg" style={{ color: theme.colors.primary.title }}>
                      Irecê, BA - Brasil
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold mb-6" style={{ color: theme.colors.primary.title }}>
                Redes Sociais
              </h4>
              <div className="flex space-x-4">
                {[
                  {
                    icon: Github,
                    gradient: { from: "#4B5563", to: "#374151" }, // gray-600 to gray-700
                    hoverGradient: { from: "#374151", to: "#1F2937" }, // gray-700 to gray-800
                  },
                  {
                    icon: Linkedin,
                    gradient: theme.colors.gradients.secondary,
                    hoverGradient: { from: "#1D4ED8", to: "#1E40AF" }, // blue-700 to blue-800
                  },
                  {
                    icon: Twitter,
                    gradient: theme.colors.gradients.accent,
                    hoverGradient: { from: "#0284C7", to: "#0369A1" }, // sky-600 to sky-700
                  },
                ].map((social, index) => (
                  <motion.button
                    key={index}
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg transition-all duration-300"
                    style={{
                      background: `linear-gradient(to right, ${social.gradient.from}, ${social.gradient.to})`,
                    }}
                    whileHover={{
                      scale: 1.1,
                      y: -2,
                      background: `linear-gradient(to right, ${social.hoverGradient.from}, ${social.hoverGradient.to})`,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
