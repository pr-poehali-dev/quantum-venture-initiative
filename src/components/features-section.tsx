import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const features = [
  {
    icon: "Shield",
    badge: "Надёжно",
    title: "Реальная защита",
    description: "Деф-защита от проверенного продавца. Каждый заказ выполняется вручную и лично.",
  },
  {
    icon: "Zap",
    badge: "Быстро",
    title: "Мгновенная выдача",
    description: "После оплаты защита приходит в течение нескольких минут прямо в Telegram.",
  },
  {
    icon: "MessageCircle",
    badge: "Поддержка",
    title: "Личный контакт",
    description: "Покупка напрямую у @longotipov — никаких ботов, живое общение и помощь.",
  },
  {
    icon: "Star",
    badge: "Качество",
    title: "Три уровня защиты",
    description: "Выбирай нужный уровень: базовый, Apex или Full — под любые задачи.",
  },
  {
    icon: "Users",
    badge: "Комьюнити",
    title: "Своё сообщество",
    description: "Часть активного Telegram-комьюнити геймеров, которые ценят надёжность.",
  },
  {
    icon: "Lock",
    badge: "Доверие",
    title: "Проверенный продавец",
    description: "Сотни довольных покупателей. Репутация в комьюнити говорит сама за себя.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Почему выбирают longotipdef</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Защита, которой можно доверять — быстро, надёжно и по честной цене
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Icon name={feature.icon} size={32} className="text-red-500" />
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}