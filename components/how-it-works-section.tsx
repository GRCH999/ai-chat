import { Card } from "@/components/ui/card"
import { Upload, Brain, MessageCircle } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: Upload,
      title: "Загружаем данные бизнеса",
      description: "Сайт, меню, прайс, FAQ, условия доставки",
    },
    {
      icon: Brain,
      title: "AI обучается на информации компании",
      description: "Понимает вопросы клиентов и отвечает в нужном тоне",
    },
    {
      icon: MessageCircle,
      title: "AI-чат начинает отвечать клиентам",
      description: "24/7, без участия менеджеров",
    },
  ]

  return (
    <section className="py-16 md:py-24 border-b border-border relative overflow-hidden layered-bg">
      {/* Multiple layered gradient backgrounds for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs with animation */}
        <div
          className="absolute top-20 -left-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-35"
          style={{
            background: "radial-gradient(circle, oklch(0.55 0.25 280 / 0.3), transparent 70%)",
            animation: "float 22s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-20 -right-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-30"
          style={{
            background: "radial-gradient(circle, oklch(0.52 0.22 265 / 0.25), transparent 70%)",
            animation: "float 28s ease-in-out infinite reverse",
          }}
        />

        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 mesh-gradient opacity-40" />

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Как это работает</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 relative overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="absolute top-4 right-4 text-6xl font-bold text-muted/10">{index + 1}</div>
              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-balance">{step.title}</h3>
                <p className="text-muted-foreground text-pretty">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
