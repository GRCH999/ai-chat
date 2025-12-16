"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, Clock, Database, Sparkles } from "lucide-react"

export function ChatWidget() {
  const messages = [
    { type: "user", text: "Добрый день! Сколько у вас стоит доставка?" },
    {
      type: "ai",
      text: "Добрый день 🙂\nДоставка по городу стоит 490 ₽.\nПри заказе от 3 000 ₽ — доставка бесплатная.",
    },
    { type: "user", text: "А вы работаете в выходные?" },
    { type: "ai", text: "Да, мы работаем ежедневно, без выходных — с 9:00 до 22:00." },
    { type: "user", text: "А если заказать сейчас, примерно через сколько привезёте?" },
    {
      type: "ai",
      text: "В среднем доставка занимает 45–60 минут, в зависимости от района.\nЕсли подскажете адрес — смогу сказать точнее.",
    },
  ]

  return (
    <div className="relative max-w-md w-full">
      <div className="absolute -left-4 top-8 z-10 hidden md:block">
        <Badge variant="secondary" className="gap-2 px-3 py-1.5 shadow-lg bg-card">
          <Clock className="h-3 w-3" />
          24/7
        </Badge>
      </div>

      <div className="absolute -right-4 top-24 z-10 hidden md:block">
        <Badge variant="secondary" className="gap-2 px-3 py-1.5 shadow-lg bg-card">
          <Database className="h-3 w-3" />
          Ответы по базе компании
        </Badge>
      </div>

      <div className="absolute -left-4 bottom-24 z-10 hidden md:block">
        <Badge variant="secondary" className="gap-2 px-3 py-1.5 shadow-lg bg-card">
          <Sparkles className="h-3 w-3" />
          Без скриптов и кнопок
        </Badge>
      </div>

      {/* Chat Widget */}
      <Card className="overflow-hidden shadow-2xl border-2">
        {/* Header */}
        <div className="bg-primary text-primary-foreground p-4 flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
            <Bot className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold">AI Ассистент</h3>
            <p className="text-xs opacity-90">Всегда на связи</p>
          </div>
          <div className="ml-auto">
            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          </div>
        </div>

        {/* Messages */}
        <div className="bg-muted/30 p-4 space-y-3 h-[420px] overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-line ${
                  message.type === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-card-foreground border border-border shadow-sm"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border bg-background">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-input bg-muted/50">
            <input
              type="text"
              placeholder="Напишите ваш вопрос..."
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              disabled
            />
            <Sparkles className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </Card>

      <p className="text-xs text-muted-foreground text-center mt-3">
        AI отвечает на основе данных вашего бизнеса: меню, условий и FAQ
      </p>
    </div>
  )
}
