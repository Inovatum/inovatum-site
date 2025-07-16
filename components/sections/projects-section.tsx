"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { theme } from "@/lib/theme"

export const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
    {
      title: "FinTech Revolution",
      description: "Plataforma financeira com IA para análise de investimentos e gestão automatizada de portfólio.",
      image: "/placeholder.svg?height=500&width=800",
      tech: ["React", "Node.js", "AI/ML", "Blockchain"],
      color: theme.colors.gradients.secondary,
    },
    {
      title: "HealthCare Connect",
      description: "Sistema de telemedicina com agendamento inteligente e prontuário eletrônico integrado.",
      image: "/placeholder.svg?height=500&width=800",
      tech: ["Vue.js", "Python", "WebRTC", "Cloud"],
      color: theme.colors.gradients.accent,
    },
    {
      title: "EduTech Platform",
      description: "Plataforma de ensino adaptativo com gamificação e análise de aprendizado personalizada.",
      image: "/placeholder.svg?height=500&width=800",
      tech: ["Next.js", "GraphQL", "AI", "Mobile"],
      color: theme.colors.gradients.primary,
    },
    {
      title: "Smart Logistics",
      description: "Sistema de logística inteligente com otimização de rotas e tracking em tempo real.",
      image: "/placeholder.svg?height=500&width=800",
      tech: ["React Native", "IoT", "Maps API", "Analytics"],
      color: "from-cyan-500 to-blue-500",
    },
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projetos" className="py-24 bg-white relative overflow-hidden">
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
            <ExternalLink className="w-4 h-4 mr-2" />
            Nossos Projetos
          </motion.div>
          <h2
            className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${theme.colors.gradients.dark} bg-clip-text text-transparent`}
          >
            Casos de Sucesso
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: theme.colors.primary.text }}>
            Conheça alguns dos projetos que desenvolvemos com paixão, inovação e resultados extraordinários.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: theme.animation.duration.normal, ease: theme.animation.easing.smooth }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl"
              style={{
                borderColor: theme.colors.primary.outline + "30",
                borderWidth: "1px",
              }}
            >
              <div className="lg:flex">
                <div className="lg:w-3/5">
                  <div className="relative overflow-hidden">
                    <Image
                      src={projects[currentProject].image || "/placeholder.svg"}
                      alt={projects[currentProject].title}
                      width={800}
                      height={500}
                      className="w-full h-80 lg:h-96 object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${projects[currentProject].color} opacity-20`}
                    ></div>
                  </div>
                </div>
                <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-6" style={{ color: theme.colors.primary.title }}>
                    {projects[currentProject].title}
                  </h3>
                  <p className="mb-8 leading-relaxed text-lg" style={{ color: theme.colors.primary.text }}>
                    {projects[currentProject].description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {" "}
                    {/* Reduzido gap para 2 */}
                    {projects[currentProject].tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full font-medium" // Reduzido padding e font-size
                        style={{
                          backgroundColor: theme.colors.primary.accent + "20",
                          color: theme.colors.primary.title,
                          borderColor: theme.colors.primary.outline + "30",
                          borderWidth: "1px",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button
                    className={`bg-gradient-to-r ${projects[currentProject].color} hover:shadow-lg text-white w-fit px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105`}
                  >
                    Ver Projeto Completo
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 shadow-lg"
            style={{
              borderColor: theme.colors.primary.outline + "50",
              color: theme.colors.primary.accent,
            }}
            onClick={prevProject}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 shadow-lg"
            style={{
              borderColor: theme.colors.primary.outline + "50",
              color: theme.colors.primary.accent,
            }}
            onClick={nextProject}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentProject ? "scale-125" : ""
                }`}
                style={{
                  backgroundColor:
                    index === currentProject ? theme.colors.primary.accent : theme.colors.primary.outline + "50",
                }}
                onClick={() => setCurrentProject(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
