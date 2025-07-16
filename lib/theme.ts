// Sistema de cores centralizado para fácil manutenção
export const theme = {
  colors: {
    // Cores principais do site
    primary: {
      background: "#E0F2FE", // Fundo principal: azul claro
      outline: "#60A5FA", // Contornos e detalhes: azul médio
      accent: "#38BDF8", // Ícones circulares: azul celeste
      title: "#1E3A8A", // Título principal: azul escuro
      text: "#374151", // Texto comum: azul acinzentado
    },
    // Cores para gradientes e variações (agora com valores hexadecimais diretos)
    gradients: {
      primary: { from: "#2563eb", to: "#60a5fa" }, // blue-600 to blue-400
      secondary: { from: "#06b6d4", to: "#3b82f6" }, // cyan-500 to blue-500
      accent: { from: "#3b82f6", to: "#22d3ee" }, // blue-500 to cyan-400
      dark: { from: "#1e3a8a", to: "#1d4ed8" }, // blue-900 to blue-700
      tealCyan: { from: "#14b8a6", to: "#06b6d4" }, // teal-500 to cyan-500 (para o caso específico)
    },
    // Cores para a seção de transformação (código → app)
    transformation: {
      background: "#E0F2FE",
      outline: "#60A5FA",
      accent: "#38BDF8",
      title: "#1E3A8A",
      text: "#374151",
      codeBg: "#1F2937",
      codeText: "#E5E7EB",
      codeHighlight: "#60A5FA",
      codeComment: "#9CA3AF",
      codeKeyword: "#F59E0B",
      codeString: "#10B981",
    },
    // Estados e feedback
    states: {
      hover: "#3B82F6",
      active: "#2563EB",
      disabled: "#9CA3AF",
      success: "#10B981",
      warning: "#F59E0B",
      error: "#EF4444",
    },
  },
  // Configurações de animação
  animation: {
    duration: {
      fast: 0.3,
      normal: 0.6,
      slow: 1.0,
    },
    easing: {
      smooth: "easeInOut",
      bounce: "spring",
    },
  },
}
