import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI-чат для сайта | 24/7 поддержка клиентов",
  description: "AI-чат, который реально отвечает клиентам на вопросы о ценах, услугах и доставке — 24/7",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        {/* 1) Конфиг — ДО загрузки виджета */}
        <Script id="pb-chat-config" strategy="beforeInteractive">
          {`
            window.PB_CHAT_WIDGET_CONFIG = {
              webhookUrl: "https://n8n-production-73ed.up.railway.app/webhook/f406671e-c954-4691-b39a-66c90aa2f103/chat",
              title: "AI помощник",
              position: "bottom-right",
              primary: "#1677ff",
              greeting: "Привет! Чем помочь?",
              autoOpenAfter: 8000,
              autoOpenOnce: true
            };
          `}
        </Script>

        {/* 2) Сам виджет */}
        <Script
          src="https://grch999.github.io/pb-chat-widget/pb-chat-widget@2.1.0.min.js"
          strategy="afterInteractive"
        />
      </head>

      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
