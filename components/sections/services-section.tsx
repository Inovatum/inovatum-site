"use client"

import { motion } from "framer-motion"
import { Code, Palette, Brain, Zap, Smartphone, Globe, Cpu } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { theme } from "@/lib/theme"

export const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Desenvolvimento Web",
      description: "Aplicações web modernas, responsivas e otimizadas para performance máxima.",
      color: theme.colors.gradients.secondary,
      features: ["React & Next.js", "Node.js", "Cloud Deploy"],
    },
    {
      icon: Smartphone,
      title: "Apps Mobile",
      description: "Aplicativos nativos e híbridos para iOS e Android com UX excepcional.",
      color: theme.colors.gradients.primary,
      features: ["React Native", "Flutter", "App Store"],
    },
    {
      icon: Brain,
      title: "Inteligência Artificial",
      description: "Soluções de IA e machine learning para automatizar e otimizar processos.",
      color: theme.colors.gradients.accent,
      features: ["Machine Learning", "NLP", "Computer Vision"],
    },
    {
      icon: Palette,
      title: "UX/UI Design",
      description: "Interfaces intuitivas e experiências de usuário que encantam e convertem.",
      color: theme.colors.gradients.secondary, // Usando o gradiente secundário do tema
      features: ["Design System", "Prototyping", "User Research"],
    },
    {
      icon: Zap,
      title: "Automações",
      description: "Sistemas automatizados para otimizar fluxos de trabalho e produtividade.",
      color: theme.colors.gradients.dark,
      features: ["APIs", "Webhooks", "Integrations"],
    },
    {
      icon: Cpu,
      title: "Consultoria Tech",
      description: "Estratégias tecnológicas personalizadas para acelerar seu crescimento.",
      color: theme.colors.gradients.tealCyan, // Usando o novo gradiente tealCyan do tema
      features: ["Architecture", "Scalability", "Performance"],
    },
  ]

  return (
    <section
      id="serviços"
      className="py-24 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${theme.colors.primary.background} 0%, white 50%, ${theme.colors.primary.background} 100%)`,
      }}
    >
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
            <Code className="w-4 h-4 mr-2" />
            Nossos Serviços
          </motion.div>
          <h2
            className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${theme.colors.gradients.dark.from} ${theme.colors.gradients.dark.to} bg-clip-text text-transparent`}
          >
            O que Fazemos
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: theme.colors.primary.text }}>
            Oferecemos soluções completas em tecnologia, desde o conceito até a implementação e crescimento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: theme.animation.duration.normal, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                <CardContent className="p-8">
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-lg`}
                    style={{
                      background: `linear-gradient(to right, ${service.color.from}, ${service.color.to})`,
                    }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: theme.animation.duration.normal }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: theme.colors.primary.title }}>
                    {service.title}
                  </h3>
                  <p className="leading-relaxed mb-6 text-center" style={{ color: theme.colors.primary.text }}>
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-sm rounded-full font-medium"
                        style={{
                          backgroundColor: theme.colors.primary.accent + "20",
                          color: theme.colors.primary.title,
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
