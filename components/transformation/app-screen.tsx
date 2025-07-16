"use client"

import type React from "react"

import { motion } from "framer-motion"
import {
  Settings,
  Bell,
  Home,
  Search,
  Heart,
  MessageCircle,
  Play,
  BarChart3,
  TrendingUp,
  ShoppingCart,
  Star,
  Send,
  Users,
  DollarSign,
  Activity,
  Package,
} from "lucide-react"
import { theme } from "@/lib/theme"

interface AppScreenProps {
  isActive: boolean
  currentApp: number
}

interface AppConfig {
  type: string
  header: string
  color: string
  content: React.ReactNode
}

export const AppScreen = ({ isActive, currentApp }: AppScreenProps) => {
  const apps: AppConfig[] = [
    {
      type: "mobile",
      header: "TaskFlow",
      color: theme.colors.transformation.accent,
      content: <MobileApp />,
    },
    {
      type: "dashboard",
      header: "Analytics Pro",
      color: "#3776AB",
      content: <DashboardApp />,
    },
    {
      type: "ecommerce",
      header: "TechStore",
      color: "#3178C6",
      content: <EcommerceApp />,
    },
    {
      type: "chat",
      header: "ChatConnect",
      color: "#F7DF1E",
      content: <ChatApp />,
    },
  ]

  const currentAppConfig = apps[currentApp]

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: 50 }}
      animate={isActive ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: theme.animation.duration.slow, delay: 0.3 }}
    >
      {/* Contorno do smartphone */}
      <div
        className="relative w-64 h-96 rounded-3xl p-3 shadow-2xl"
        style={{
          backgroundColor: "white",
          borderColor: theme.colors.transformation.outline,
          borderWidth: "3px",
        }}
      >
        {/* Notch */}
        <div
          className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 rounded-full"
          style={{ backgroundColor: theme.colors.transformation.outline }}
        />

        {/* Tela do app com transição mais rápida */}
        <motion.div
          key={currentApp}
          className="mt-4 h-full flex flex-col"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }} // Reduzido de 0.5 para 0.3
        >
          {/* Header dinâmico */}
          <motion.div
            className="flex items-center justify-between p-3 rounded-xl mb-2"
            style={{ backgroundColor: theme.colors.transformation.background }}
            initial={{ opacity: 0, y: -10 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            <motion.h3
              className="font-bold text-lg"
              style={{ color: currentAppConfig.color }}
              whileHover={{ scale: 1.03 }} // Adjusted scale
            >
              {currentAppConfig.header}
            </motion.h3>
            <motion.div whileHover={{ scale: 1.08 }} transition={{ type: "spring", stiffness: 400 }}>
              {" "}
              {/* Adjusted scale */}
              <Bell size={20} style={{ color: currentAppConfig.color }} />
            </motion.div>
          </motion.div>

          {/* Conteúdo específico do app - Adicionado px-2 */}
          <div className="flex-1 overflow-hidden px-2">{currentAppConfig.content}</div>
        </motion.div>
      </div>
    </motion.div>
  )
}

// App Mobile (TaskFlow) - Ajustado para caber melhor
const MobileApp = () => {
  const profiles = [
    { name: "Ana Silva", role: "Designer", avatar: "👩‍🎨" },
    { name: "João Costa", role: "Developer", avatar: "👨‍💻" },
    { name: "Maria Santos", role: "Manager", avatar: "👩‍💼" },
  ]

  return (
    <>
      {/* Barra de busca - menor */}
      <motion.div
        className="flex items-center p-2 rounded-xl mb-2"
        style={{ backgroundColor: theme.colors.transformation.background }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.2 }}
      >
        <Search size={16} style={{ color: theme.colors.transformation.accent }} />
        <span className="ml-2 text-xs" style={{ color: theme.colors.transformation.text }}>
          Buscar tarefas...
        </span>
      </motion.div>

      {/* Navegação - menor */}
      <motion.div
        className="flex justify-around p-1 rounded-xl mb-2"
        style={{ backgroundColor: theme.colors.transformation.background }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.4 }}
      >
        {[Home, Search, Heart, MessageCircle].map((Icon, index) => (
          <motion.div
            key={index}
            className="p-1.5 rounded-lg cursor-pointer"
            style={{ backgroundColor: "white" }}
            whileHover={{ scale: 1.08 }} // Adjusted scale
          >
            <Icon size={16} style={{ color: theme.colors.transformation.accent }} />
          </motion.div>
        ))}
      </motion.div>

      {/* Perfis - ajustado para caber */}
      <motion.div
        className="flex-1 p-2 rounded-xl mb-2 overflow-hidden"
        style={{ backgroundColor: theme.colors.transformation.background }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.6 }}
      >
        <div className="space-y-1.5">
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-2 p-1.5 rounded-lg"
              style={{ backgroundColor: "white" }}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 1.8 + index * 0.1 }}
            >
              <div className="text-sm">{profile.avatar}</div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium truncate" style={{ color: theme.colors.transformation.title }}>
                  {profile.name}
                </div>
                <div className="text-xs truncate" style={{ color: theme.colors.transformation.text }}>
                  {profile.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Botões - menores */}
      <motion.div
        className="flex space-x-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 2.2 }}
      >
        <motion.button
          className="flex-1 py-2 px-2 rounded-xl font-medium text-white flex items-center justify-center space-x-1 text-xs"
          style={{ backgroundColor: theme.colors.transformation.accent }}
          whileHover={{ scale: 1.03 }} // Adjusted scale
        >
          <Play size={12} />
          <span>Começar</span>
        </motion.button>
        <motion.button
          className="p-2 rounded-xl"
          style={{ backgroundColor: "white", borderColor: theme.colors.transformation.outline, borderWidth: "2px" }}
          whileHover={{ scale: 1.08 }} // Adjusted scale
        >
          <Settings size={16} style={{ color: theme.colors.transformation.accent }} />
        </motion.button>
      </motion.div>
    </>
  )
}

// Dashboard App (Analytics Pro) - Ajustado
const DashboardApp = () => {
  return (
    <>
      {/* Métricas - grid menor */}
      <motion.div
        className="grid grid-cols-2 gap-1.5 mb-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.2 }}
      >
        {[
          { label: "Vendas", value: "1.2K", icon: TrendingUp, color: "#10B981" },
          { label: "Usuários", value: "8.9K", icon: Users, color: "#3B82F6" },
          { label: "Receita", value: "45K", icon: DollarSign, color: "#F59E0B" },
          { label: "Taxa", value: "94%", icon: Activity, color: "#EF4444" },
        ].map((metric, index) => (
          <motion.div
            key={index}
            className="p-2 rounded-lg"
            style={{ backgroundColor: theme.colors.transformation.background }}
            whileHover={{ scale: 1.03 }} // Adjusted scale
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
          >
            <div className="flex items-center justify-between mb-1">
              <metric.icon size={12} style={{ color: metric.color }} />
              <span className="text-xs font-bold" style={{ color: theme.colors.transformation.title }}>
                {metric.value}
              </span>
            </div>
            <div className="text-xs" style={{ color: theme.colors.transformation.text }}>
              {metric.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Gráfico - menor */}
      <motion.div
        className="p-2 rounded-xl mb-2"
        style={{ backgroundColor: theme.colors.transformation.background }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.8 }}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium" style={{ color: theme.colors.transformation.title }}>
            Vendas Hoje
          </span>
          <BarChart3 size={14} style={{ color: "#3776AB" }} />
        </div>
        <div className="flex items-end space-x-1 h-12">
          {[40, 65, 45, 80, 55, 70, 85].map((height, index) => (
            <motion.div
              key={index}
              className="flex-1 rounded-t"
              style={{ backgroundColor: "#3776AB", height: `${height}%` }}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ duration: 0.4, delay: 2 + index * 0.05 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Filtros - menores */}
      <motion.div
        className="flex space-x-1"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 2.4 }}
      >
        {["Hoje", "Semana", "Mês"].map((filter, index) => (
          <motion.button
            key={filter}
            className="flex-1 py-1.5 px-2 rounded-lg text-xs font-medium"
            style={{
              backgroundColor: index === 0 ? "#3776AB" : "white",
              color: index === 0 ? "white" : theme.colors.transformation.text,
              borderColor: "#3776AB",
              borderWidth: "1px",
            }}
            whileHover={{ scale: 1.03 }} // Adjusted scale
          >
            {filter}
          </motion.button>
        ))}
      </motion.div>
    </>
  )
}

// E-commerce App (TechStore) - Ajustado
const EcommerceApp = () => {
  const products = [
    { name: "iPhone 15", price: "R$ 4.999", image: "📱", rating: 5 },
    { name: "MacBook Pro", price: "R$ 12.999", image: "💻", rating: 5 },
    { name: "AirPods", price: "R$ 1.299", image: "🎧", rating: 4 },
  ]

  return (
    <>
      {/* Barra de busca - menor */}
      <motion.div
        className="flex items-center p-2 rounded-xl mb-2"
        style={{ backgroundColor: theme.colors.transformation.background }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.2 }}
      >
        <Search size={16} style={{ color: "#3178C6" }} />
        <span className="ml-2 text-xs flex-1" style={{ color: theme.colors.transformation.text }}>
          Buscar produtos...
        </span>
        <ShoppingCart size={16} style={{ color: "#3178C6" }} />
      </motion.div>

      {/* Produtos - compactos */}
      <motion.div
        className="flex-1 space-y-1.5 mb-2 overflow-hidden"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.4 }}
      >
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-2 p-1.5 rounded-lg"
            style={{ backgroundColor: theme.colors.transformation.background }}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 1.6 + index * 0.1 }}
          >
            <div className="text-lg">{product.image}</div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-medium truncate" style={{ color: theme.colors.transformation.title }}>
                {product.name}
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-xs font-bold" style={{ color: "#3178C6" }}>
                  {product.price}
                </span>
                <div className="flex">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} size={6} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
              </div>
            </div>
            <motion.button
              className="p-1 rounded"
              style={{ backgroundColor: "#3178C6" }}
              whileHover={{ scale: 1.08 }} // Adjusted scale
              whileTap={{ scale: 0.9 }}
            >
              <ShoppingCart size={10} color="white" />
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      {/* Botão de checkout - menor */}
      <motion.div
        className="flex space-x-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 2.2 }}
      >
        <motion.button
          className="flex-1 py-2 px-2 rounded-xl font-medium text-white flex items-center justify-center space-x-1 text-xs"
          style={{ backgroundColor: "#3178C6" }}
          whileHover={{ scale: 1.03 }} // Adjusted scale
        >
          <Package size={12} />
          <span>Finalizar</span>
        </motion.button>
        <motion.button
          className="p-2 rounded-xl"
          style={{ backgroundColor: "white", borderColor: "#3178C6", borderWidth: "2px" }}
          whileHover={{ scale: 1.08 }} // Adjusted scale
        >
          <Heart size={16} style={{ color: "#3178C6" }} />
        </motion.button>
      </motion.div>
    </>
  )
}

// Chat App (ChatConnect) - Ajustado
const ChatApp = () => {
  const messages = [
    { user: "Alice", msg: "Oi! Como vai?", time: "14:30", avatar: "👩" },
    { user: "Bob", msg: "Tudo bem! E você?", time: "14:32", avatar: "👨" },
    { user: "Carol", msg: "Reunião às 15h", time: "14:35", avatar: "👩‍💼" },
  ]

  return (
    <>
      {/* Status bar - menor */}
      <motion.div
        className="flex items-center justify-between p-2 rounded-xl mb-2"
        style={{ backgroundColor: theme.colors.transformation.background }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.2 }}
      >
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-xs" style={{ color: theme.colors.transformation.text }}>
            156 online
          </span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="text-xs font-bold" style={{ color: "#F7DF1E" }}>
            3
          </span>
          <Bell size={12} style={{ color: "#F7DF1E" }} />
        </div>
      </motion.div>

      {/* Mensagens - compactas */}
      <motion.div
        className="flex-1 space-y-1.5 mb-2 overflow-hidden"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.4 }}
      >
        {messages.map((message, index) => (
          <motion.div
            key={index}
            className="flex items-start space-x-2 p-1.5 rounded-lg"
            style={{ backgroundColor: theme.colors.transformation.background }}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 1.6 + index * 0.1 }}
          >
            <div className="text-sm">{message.avatar}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-medium" style={{ color: theme.colors.transformation.title }}>
                  {message.user}
                </span>
                <span className="text-xs" style={{ color: theme.colors.transformation.text }}>
                  {message.time}
                </span>
              </div>
              <div className="text-xs" style={{ color: theme.colors.transformation.text }}>
                {message.msg}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Input de mensagem - menor */}
      <motion.div
        className="flex space-x-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 2.2 }}
      >
        <motion.div
          className="flex-1 py-1.5 px-2 rounded-xl text-xs"
          style={{ backgroundColor: theme.colors.transformation.background, color: theme.colors.transformation.text }}
        >
          Digite sua mensagem...
        </motion.div>
        <motion.button
          className="p-1.5 rounded-xl"
          style={{ backgroundColor: "#F7DF1E" }}
          whileHover={{ scale: 1.08 }} // Adjusted scale
          whileTap={{ scale: 0.9 }}
        >
          <Send size={12} color="black" />
        </motion.button>
      </motion.div>
    </>
  )
}
