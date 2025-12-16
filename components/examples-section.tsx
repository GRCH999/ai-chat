import { Card } from "@/components/ui/card"
import { Package, Calendar, Briefcase, ShoppingCart, Headphones } from "lucide-react"

export function ExamplesSection() {
  const questions = [
    { text: "Сколько стоит доставка и есть ли бесплатная?", icon: Package, category: "Доставка" },
    { text: "Можно ли записаться на завтра после 18:00?", icon: Calendar, category: "Запись" },
    { text: "Какие услуги входят в этот тариф?", icon: Briefcase, category: "Услуги" },
    { text: "Вы работаете в выходные и праздники?", icon: ShoppingCart, category: "Продажи" },
    { text: "Есть ли у вас безналичная оплата для юрлиц?", icon: Briefcase, category: "B2B" },
    { text: "Как быстро вы отвечаете после оформления заявки?", icon: Headphones, category: "Поддержка" },
  ]

  return (
    <section className="py-16 md:py-24 border-b border-border relative overflow-hidden layered-bg">
      {/* Multiple layered gradient backgrounds for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs with animation */}
        <div
          className="absolute top-1/2 -left-40 w-[650px] h-[650px] rounded-full blur-3xl opacity-30"
          style={{
            background: "radial-gradient(circle, oklch(0.55 0.25 280 / 0.3), transparent 70%)",
            animation: "float 23s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-0 -right-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-35"
          style={{
            background: "radial-gradient(circle, oklch(0.58 0.18 290 / 0.28), transparent 70%)",
            animation: "float 27s ease-in-out infinite reverse",
          }}
        />

        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 mesh-gradient opacity-45" />

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Примеры вопросов</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            AI-чат отвечает так же, как ваш лучший менеджер — в любой сфере бизнеса
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {questions.map((item, index) => {
            const Icon = item.icon
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg hover:scale-[1.02] transition-all group cursor-pointer bg-card/80 backdrop-blur-sm border-border/50"
              >
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-medium text-primary/70 mb-1">{item.category}</div>
                    <p className="text-foreground font-medium text-balance leading-snug">{item.text}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
