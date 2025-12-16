"use client"

import type React from "react"
import { useState } from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles } from "lucide-react"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwpgdwvd"

export function LeadFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    try {
      const payload = new FormData()
      payload.append("name", formData.name)
      payload.append("phone", formData.phone)
      payload.append("comment", formData.comment)
      payload.append("source", "LeadFormSection") // чтобы понимать откуда заявка

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: payload,
        headers: {
          Accept: "application/json",
        },
      })

      if (!res.ok) {
        const text = await res.text().catch(() => "")
        throw new Error(text || "Formspree error")
      }

      setIsSubmitted(true)
      setFormData({ name: "", phone: "", comment: "" })

      setTimeout(() => setIsSubmitted(false), 3500)
    } catch (err) {
      setError("Не удалось отправить. Попробуйте ещё раз или напишите нам напрямую.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="lead"
      className="py-16 md:py-24 relative overflow-hidden layered-bg isolate"
    >
      {/* ФОН — строго НИЖЕ контента и НЕ ловит клики */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 left-1/3 w-[600px] h-[600px] rounded-full blur-3xl opacity-35"
          style={{
            background:
              "radial-gradient(circle, oklch(0.52 0.22 265 / 0.3), transparent 70%)",
            animation: "float 25s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-40 right-1/4 w-[550px] h-[550px] rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(circle, oklch(0.58 0.18 290 / 0.25), transparent 70%)",
            animation: "float 29s ease-in-out infinite reverse",
          }}
        />

        <div className="absolute inset-0 mesh-gradient opacity-50" />

        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* КОНТЕНТ — выше фона */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex mb-4">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Получите демо AI-чата для вашего сайта
            </h2>

            <p className="text-lg text-muted-foreground text-pretty">
              Покажем, как AI будет отвечать именно на вопросы ваших клиентов
            </p>
          </div>

          <Card className="relative z-10 p-8 shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Спасибо!</h3>
                <p className="text-muted-foreground">
                  Заявка отправлена. Ответим в течение 1 рабочего дня.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Ваше имя"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comment">Комментарий (необязательно)</Label>
                  <Textarea
                    id="comment"
                    name="comment"
                    placeholder="Расскажите о вашем бизнесе"
                    rows={4}
                    value={formData.comment}
                    onChange={(e) =>
                      setFormData({ ...formData, comment: e.target.value })
                    }
                  />
                </div>

                {error ? (
                  <p className="text-sm text-red-600">{error}</p>
                ) : null}

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full text-base font-semibold border-2 border-black"
                >
                  {isSubmitting ? "Отправляем..." : "Получить демо"}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Стоимость сервиса — 3 500 ₽ / месяц. Детали обсудим при демонстрации.
                </p>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  )
}
