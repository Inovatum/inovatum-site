"use client"

import { motion } from "framer-motion"
import { theme } from "@/lib/theme"

interface ConnectionLinesProps {
  isActive: boolean
  currentApp: number
  isMobile: boolean // Prop para determinar a orientação
}

export const ConnectionLines = ({ isActive, currentApp, isMobile }: ConnectionLinesProps) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {isMobile ? (
        // Mobile: Linha vertical simples
        <motion.div
          className="absolute top-1/2 left-1/2 w-0.5 h-full origin-center"
          style={{
            backgroundColor: theme.colors.transformation.accent,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={isActive ? { scaleY: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Efeito de dados fluindo verticalmente */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: `linear-gradient(180deg, transparent 0%, ${theme.colors.transformation.accent} 50%, transparent 100%)`,
              width: "100%",
              height: "20px",
            }}
            animate={
              isActive
                ? {
                    y: ["-20px", "calc(100% + 20px)"],
                  }
                : {}
            }
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </motion.div>
      ) : (
        // Desktop: Linha principal horizontal com ramificações
        <>
          {/* Linha principal com efeito de dados fluindo */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-32 h-0.5 origin-left"
            style={{
              backgroundColor: theme.colors.transformation.accent,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isActive ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Efeito de dados fluindo */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: `linear-gradient(90deg, transparent 0%, ${theme.colors.transformation.accent} 50%, transparent 100%)`,
                width: "20px",
              }}
              animate={
                isActive
                  ? {
                      x: ["-20px", "128px"],
                    }
                  : {}
              }
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </motion.div>

          {/* Linhas ramificadas com efeito de construção */}
          {[
            { top: "20%", delay: 1, length: "w-12" },
            { top: "35%", delay: 1.2, length: "w-16" },
            { top: "50%", delay: 1.4, length: "w-14" },
            { top: "65%", delay: 1.6, length: "w-18" },
            { top: "80%", delay: 1.8, length: "w-10" },
          ].map((line, index) => (
            <motion.div
              key={`desktop-line-${index}-${currentApp}`} // Key único para recriar a animação
              className={`absolute left-1/2 ${line.length} h-0.5 origin-left`}
              style={{
                top: line.top,
                backgroundColor: theme.colors.transformation.accent,
                transform: "translateX(8rem)",
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={isActive ? { scaleX: 1, opacity: 0.8 } : {}}
              transition={{ duration: 0.4, delay: line.delay }}
            >
              {/* Partículas de dados */}
              <motion.div
                className="absolute right-0 w-1.5 h-1.5 rounded-full -translate-y-1/2"
                style={{ backgroundColor: theme.colors.transformation.accent }}
                animate={
                  isActive
                    ? {
                        scale: [0.5, 1.2, 0.5],
                        opacity: [0.3, 1, 0.3],
                      }
                    : {}
                }
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: line.delay + 0.3,
                }}
              />

              {/* Efeito de pulso na linha */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: theme.colors.transformation.accent }}
                animate={
                  isActive
                    ? {
                        opacity: [0.2, 0.6, 0.2],
                        scaleY: [1, 1.5, 1],
                      }
                    : {}
                }
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: line.delay + 0.5,
                }}
              />
            </motion.div>
          ))}

          {/* Efeito de "construção" - partículas voando */}
          {isActive &&
            [...Array(8)].map((_, i) => (
              <motion.div
                key={`desktop-particle-${i}-${currentApp}`}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  backgroundColor: theme.colors.transformation.accent,
                  left: "50%",
                  top: "50%",
                }}
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{
                  x: [0, 100 + Math.random() * 50],
                  y: [0, (Math.random() - 0.5) * 100],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: 1 + i * 0.1,
                  ease: "easeOut",
                }}
              />
            ))}

          {/* Efeito de "energia" conectando */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full"
            style={{
              backgroundColor: theme.colors.transformation.accent,
              transform: "translate(-50%, -50%)",
            }}
            animate={
              isActive
                ? {
                    scale: [1, 2, 1],
                    opacity: [0.5, 1, 0.5],
                  }
                : {}
            }
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: 0.8,
            }}
          />
        </>
      )}
    </div>
  )
}
