import { Card } from "@/components/ui/card"
import { X, Check } from "lucide-react"

export function ComparisonSection() {
  const traditionalBot = [
    "Работает по кнопкам",
    "Часто не понимает вопрос",
    "Просит оставить номер",
    "Не решает задачу клиента",
    "Раздражает пользователей",
  ]

  const aiChat = [
    "Понимает свободный текст",
    "Отвечает по сути вопроса",
    "Работает 24/7",
    "Повышает доверие и конверсию",
    "Снижает нагрузку на команду",
  ]

  return (
    <section className="py-16 md:py-24 border-b border-border relative overflow-hidden layered-bg">
      {/* Multiple layered gradient backgrounds for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs with animation */}
        <div
          className="absolute -top-40 right-1/4 w-[550px] h-[550px] rounded-full blur-3xl opacity-30"
          style={{
            background: "radial-gradient(circle, oklch(0.58 0.18 290 / 0.25), transparent 70%)",
            animation: "float 26s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-35"
          style={{
            background: "radial-gradient(circle, oklch(0.52 0.22 265 / 0.3), transparent 70%)",
            animation: "float 24s ease-in-out infinite reverse",
          }}
        />

        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 mesh-gradient opacity-50" />

        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Почему AI-чат лучше обычных чат-ботов</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Traditional Bot */}
          <Card className="p-8 bg-card">
            <h3 className="text-2xl font-semibold mb-6 text-center">Обычный чат-бот</h3>
            <ul className="space-y-4">
              {traditionalBot.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="h-3 w-3 text-destructive" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* AI Chat */}
          <Card className="p-8 bg-primary/5 border-primary/20 border-2">
            <h3 className="text-2xl font-semibold mb-6 text-center">AI-чат</h3>
            <ul className="space-y-4">
              {aiChat.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}
