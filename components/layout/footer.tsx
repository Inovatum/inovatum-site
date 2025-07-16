"use client"
import { theme } from "@/lib/theme"

export const Footer = () => {
  return (
    <footer className="text-white py-12" style={{ backgroundColor: theme.colors.primary.title }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div
            className={`text-3xl font-bold bg-gradient-to-r ${theme.colors.gradients.accent} bg-clip-text text-transparent mb-6 md:mb-0`}
          >
            Inovatum
          </div>
          <div className="text-center md:text-right">
            <p className="mb-2" style={{ color: theme.colors.primary.outline }}>
              © 2024 Inovatum. Todos os direitos reservados.
            </p>
            <p className="text-sm" style={{ color: theme.colors.primary.text }}>
              Transformando o futuro digital, uma inovação por vez.
            </p>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center" style={{ borderColor: theme.colors.primary.outline + "30" }}>
          <p className="text-sm" style={{ color: theme.colors.primary.text }}>
            Feito com 💜 pela equipe Inovatum
          </p>
        </div>
      </div>
    </footer>
  )
}
