"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect } from "react"
import { theme } from "@/lib/theme"

interface CodeExample {
  language: string
  filename: string
  code: string
  description: string
}

const codeExamples: CodeExample[] = [
  {
    language: "JavaScript",
    filename: "app-mobile.js",
    description: "App Mobile com React Native",
    code: `// Criando aplicativo mobile
function criarAppMobile() {
  const app = {
    header: "TaskFlow",
    navigation: ["Home", "Tasks", "Profile"],
    users: [
      { name: "Ana Silva", role: "Designer", avatar: "👩‍🎨" },
      { name: "João Costa", role: "Developer", avatar: "👨‍💻" },
      { name: "Maria Santos", role: "Manager", avatar: "👩‍💼" }
    ],
    actions: ["Criar", "Editar", "Compartilhar"]
  };
  
  return app;
}

// Executar aplicativo
criarAppMobile();`,
  },
  {
    language: "Python",
    filename: "dashboard.py",
    description: "Dashboard de Analytics",
    code: `# Dashboard de Analytics
def criar_dashboard():
    dashboard = {
        "title": "Analytics Pro",
        "widgets": ["Vendas", "Usuários", "Receita"],
        "metrics": {
            "vendas_hoje": 1247,
            "usuarios_ativos": 8932,
            "receita_mensal": 45678
        },
        "charts": ["line", "bar", "donut"]
    }
    
    return dashboard

# Inicializar dashboard
criar_dashboard()`,
  },
  {
    language: "TypeScript",
    filename: "ecommerce.ts",
    description: "E-commerce com Next.js",
    code: `// E-commerce Platform
interface Product {
  id: string;
  name: string;
  price: number;
}

function criarLoja(): Store {
  const loja = {
    nome: "TechStore",
    produtos: [
      { id: "1", name: "iPhone 15", price: 4999 },
      { id: "2", name: "MacBook Pro", price: 12999 },
      { id: "3", name: "AirPods", price: 1299 }
    ],
    carrinho: []
  };
  
  return loja;
}

// Inicializar loja
criarLoja();`,
  },
  {
    language: "JavaScript",
    filename: "chat-app.js",
    description: "Chat em Tempo Real",
    code: `// Chat App com Socket.io
function criarChatApp() {
  const chat = {
    titulo: "ChatConnect",
    usuarios_online: 156,
    conversas: [
      { user: "Alice", msg: "Oi! Como vai?" },
      { user: "Bob", msg: "Tudo bem! E você?" },
      { user: "Carol", msg: "Reunião às 15h" }
    ],
    status: "online"
  };
  
  return chat;
}

// Conectar ao chat
criarChatApp();`,
  },
]

interface CodeBlockProps {
  currentExample: number
  setCurrentExample: (index: number) => void
  onCodeChange: () => void
}

export const CodeBlock = ({ currentExample, setCurrentExample, onCodeChange }: CodeBlockProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Rotacionar exemplos automaticamente
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setCurrentExample((prev) => (prev + 1) % codeExamples.length)
        onCodeChange()
      }, 8000) // Aumentei para 8 segundos para dar mais tempo

      return () => clearInterval(interval)
    }
  }, [isInView, setCurrentExample, onCodeChange])

  const currentCode = codeExamples[currentExample]

  const getLanguageColor = (language: string) => {
    switch (language) {
      case "JavaScript":
        return "#F7DF1E"
      case "Python":
        return "#3776AB"
      case "TypeScript":
        return "#3178C6"
      default:
        return theme.colors.transformation.codeKeyword
    }
  }

  const handleDotClick = (index: number) => {
    setCurrentExample(index)
    onCodeChange()
  }

  return (
    <motion.div
      ref={ref}
      className="relative w-full max-w-xs mx-auto lg:max-w-none" // Definido max-w-xs (320px) para mobile
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: theme.animation.duration.slow }}
    >
      <div
        className="rounded-2xl p-4 sm:p-6 shadow-2xl border-2" // Adjusted padding for smaller screens
        style={{
          backgroundColor: theme.colors.transformation.codeBg,
          borderColor: theme.colors.transformation.outline,
        }}
      >
        {/* Header do editor */}
        <div className="flex items-center justify-between mb-4 sm:mb-6 pb-2 sm:pb-4 border-b border-gray-600">
          {" "}
          {/* Adjusted padding */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {" "}
            {/* Adjusted spacing */}
            <div className="flex space-x-1 sm:space-x-2">
              {" "}
              {/* Adjusted spacing */}
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div> {/* Adjusted size */}
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div> {/* Adjusted size */}
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div> {/* Adjusted size */}
            </div>
            <span className="text-xs sm:text-sm font-medium" style={{ color: theme.colors.transformation.codeText }}>
              {currentCode.filename}
            </span>
          </div>
          {/* Language indicator */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            {" "}
            {/* Adjusted spacing */}
            <div
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full"
              style={{ backgroundColor: getLanguageColor(currentCode.language) }}
            />{" "}
            {/* Adjusted size */}
            <span
              className="text-[0.65rem] sm:text-xs font-medium"
              style={{ color: theme.colors.transformation.codeComment }}
            >
              {currentCode.language}
            </span>
          </div>
        </div>

        {/* Código com animação de transição mais rápida */}
        <motion.div
          key={currentExample}
          className="font-mono text-xs sm:text-sm leading-relaxed" // Adjusted font size
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }} // Reduzido de 0.5 para 0.3
        >
          <pre style={{ color: theme.colors.transformation.codeText }}>
            <code
              dangerouslySetInnerHTML={{
                __html: currentCode.code
                  .replace(/\/\/.*/g, `<span style="color: ${theme.colors.transformation.codeComment}">$&</span>`)
                  .replace(/#.*/g, `<span style="color: ${theme.colors.transformation.codeComment}">$&</span>`)
                  .replace(
                    /\b(function|const|return|def|interface|class)\b/g,
                    `<span style="color: ${theme.colors.transformation.codeKeyword}">$1</span>`,
                  )
                  .replace(/"[^"]*"/g, `<span style="color: ${theme.colors.transformation.codeString}">$&</span>`)
                  .replace(/'[^']*'/g, `<span style="color: ${theme.colors.transformation.codeString}">$&</span>`)
                  .replace(/`[^`]*`/g, `<span style="color: ${theme.colors.transformation.codeString}">$&</span>`)
                  .replace(
                    /\b(header|navigation|users|actions|title|widgets|metrics|produtos|conversas|nome|msg|time|status|id|name|price|image)\b:/g,
                    `<span style="color: ${theme.colors.transformation.codeHighlight}">$1</span>:`,
                  )
                  .replace(/\b(\d+)\b/g, `<span style="color: #FF6B6B">$1</span>`),
              }}
            />
          </pre>
        </motion.div>

        {/* Progress indicator - agora clicável e sincronizado */}
        <div className="flex justify-center mt-4 sm:mt-6 space-x-1.5 sm:space-x-2">
          {" "}
          {/* Adjusted spacing */}
          {codeExamples.map((_, index) => (
            <motion.div
              key={index}
              className="w-1.5 h-1.5 sm:w-2 h-2 rounded-full cursor-pointer" // Adjusted size
              style={{
                backgroundColor:
                  index === currentExample
                    ? theme.colors.transformation.accent
                    : theme.colors.transformation.codeComment + "50",
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>

      {/* Description badge */}
      <motion.div
        key={currentExample}
        className="absolute -top-2 sm:-top-3 right-2 sm:right-4 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium" // Adjusted padding and font size
        style={{
          backgroundColor: theme.colors.transformation.accent,
          color: "white",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }} // Mais rápido
      >
        {currentCode.description}
      </motion.div>
    </motion.div>
  )
}
