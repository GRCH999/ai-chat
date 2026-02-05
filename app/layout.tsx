import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
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
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />

        {/* 1) Конфиг — лучше ДО загрузки виджета */}
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

        {/* 2) Скрипт виджета */}
        <Script
          src="https://grch999.github.io/pb-chat-widget/pb-chat-widget@2.1.0.min.js"
          strategy="afterInteractive"
        />

        {/* 3) Оверрайд стилей */}
        <Script id="pb-chat-style-override" strategy="lazyOnload">
          {`
            (function() {
              var style = document.createElement('style');
              style.textContent = \`
                @keyframes chatPulse {
                  0%, 100% {
                    box-shadow: 0 0 0 0 rgba(22, 119, 255, 0.6), 0 4px 20px rgba(22, 119, 255, 0.4);
                    transform: scale(1);
                  }
                  50% {
                    box-shadow: 0 0 0 18px rgba(22, 119, 255, 0), 0 6px 30px rgba(22, 119, 255, 0.5);
                    transform: scale(1.06);
                  }
                }

                [id*="pb-chat"] button,
                [class*="pb-chat"] button,
                .pb-chat-launcher,
                button[class*="launcher"] {
                  width: 72px !important;
                  height: 72px !important;
                  min-width: 72px !important;
                  min-height: 72px !important;
                  animation: chatPulse 2s ease-in-out infinite !important;
                }

                [id*="pb-chat"] button svg,
                [class*="pb-chat"] button svg,
                .pb-chat-launcher svg,
                button[class*="launcher"] svg {
                  width: 34px !important;
                  height: 34px !important;
                }
              \`;
              document.head.appendChild(style);

              function styleWidget() {
                var buttons = document.querySelectorAll(
                  '[id*="pb-chat"] button, [class*="pb-chat"] button, .pb-chat-launcher, button[class*="launcher"]'
                );
                buttons.forEach(function(btn) {
                  btn.style.width = '72px';
                  btn.style.height = '72px';
                  btn.style.minWidth = '72px';
                  btn.style.minHeight = '72px';
                  btn.style.animation = 'chatPulse 2s ease-in-out infinite';

                  var svg = btn.querySelector('svg');
                  if (svg) {
                    svg.style.width = '34px';
                    svg.style.height = '34px';
                  }
                });
              }

              setTimeout(styleWidget, 1000);
              setTimeout(styleWidget, 2000);
              setTimeout(styleWidget, 3000);
              setTimeout(styleWidget, 5000);

              var observer = new MutationObserver(function() {
                styleWidget();
              });
              observer.observe(document.body, { childList: true, subtree: true });
            })();
          `}
        </Script>
      </body>
    </html>
  )
}
