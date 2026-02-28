import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const plans = [
  {
    name: "Обычный",
    price: "100₽",
    badge: null,
    description: "Базовая дефа-защита для начала",
    features: ["Стандартная защита", "Быстрая выдача", "Поддержка в Telegram"],
    highlight: false,
  },
  {
    name: "Apex",
    price: "150₽",
    badge: "Популярный",
    description: "Расширенная защита для уверенной игры",
    features: ["Apex-уровень защиты", "Быстрая выдача", "Поддержка в Telegram", "Приоритетная обработка"],
    highlight: true,
  },
  {
    name: "Full",
    price: "259₽",
    badge: "Максимум",
    description: "Полная защита без ограничений",
    features: ["Полная защита", "Мгновенная выдача", "Поддержка 24/7", "Приоритетная обработка", "Все возможности"],
    highlight: false,
  },
]

interface PlansSectionProps {
  onBuyClick?: () => void
}

export function PlansSection({ onBuyClick }: PlansSectionProps) {
  return (
    <section id="plans" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-orbitron">Выбери свой уровень</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-space-mono">
            Три варианта защиты — для любых задач и бюджета
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative transition-all duration-300 slide-up ${
                plan.highlight
                  ? "border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.3)] scale-105"
                  : "border-red-500/20 hover:border-red-500/50"
              } bg-gray-900`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-red-500 text-white px-4 py-1 text-sm font-bold">{plan.badge}</Badge>
                </div>
              )}
              <CardHeader className="text-center pb-4 pt-8">
                <CardTitle className="text-2xl font-bold text-white font-orbitron mb-2">{plan.name}</CardTitle>
                <div className="text-5xl font-extrabold text-red-500 font-orbitron my-4">{plan.price}</div>
                <p className="text-gray-400 font-space-mono text-sm">{plan.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 font-space-mono text-sm">
                      <Icon name="Check" size={16} className="text-red-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={onBuyClick}
                  className={`w-full text-white font-orbitron ${
                    plan.highlight
                      ? "bg-red-500 hover:bg-red-600 pulse-button"
                      : "bg-red-500/20 hover:bg-red-500 border border-red-500/50"
                  }`}
                >
                  Купить
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
