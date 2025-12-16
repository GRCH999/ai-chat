"use client"

import { Button } from "@/components/ui/button"
import { ChatWidget } from "@/components/chat-widget"

export function HeroSection() {
  const scrollToLead = () => {
    const el = document.getElementById("lead")
    if (!el) return

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <section className="relative overflow-hidden border-b border-border isolate">
      {/* ===== BACKGROUND (ВЕРНУЛИ ФОН, НО БЕЗ ВЛИЯНИЯ НА КЛИКИ) ===== */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Gradient blobs */}
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-40"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.35), transparent 70%)",
          }}
        />
        <div
          className="absolute top-20 -right-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.30), transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-40 left-1/3 w-[400px] h-[400px] rounded-full blur-3xl opacity-25"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.25), transparent 70%)",
          }}
        />

        {/* Mesh overlay */}
        <div className="absolute inset-0 mesh-gradient opacity-60" />

        {/* Noise */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="container relative mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* LEFT */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Умный AI-чат для вашего сайта
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto lg:mx-0">
              Помощник, обученный вашему бизнесу.
              <br />
              Быстрые ответы → выше конверсия → больше продаж.
            </p>

            <div className="bg-card border-2 border-primary/20 rounded-xl p-6 max-w-sm mx-auto lg:mx-0 shadow-lg">
              <div className="text-4xl font-bold text-primary mb-1">
                3 500 ₽ / месяц
              </div>
              <p className="text-sm text-muted-foreground">
                Доступное решение для малого и среднего бизнеса
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button
                size="lg"
                className="text-base font-semibold border-2 border-black"
                onClick={scrollToLead}
              >
                Попробовать
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-base font-semibold border-2 border-black"
                onClick={scrollToLead}
              >
                Получить демо
              </Button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center lg:justify-end">
            <ChatWidget />
          </div>
        </div>
      </div>
    </section>
  )
}
