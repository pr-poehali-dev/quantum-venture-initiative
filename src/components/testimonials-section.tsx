import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Артём К.",
    role: "Постоянный покупатель",
    avatar: "",
    content: "Беру деф уже несколько месяцев — всё чётко, быстро и без вопросов. Рекомендую всем в комьюнити.",
  },
  {
    name: "Дмитрий Л.",
    role: "Участник комьюнити",
    avatar: "",
    content: "Взял Full-защиту — доволен на 100%. Пришло за 5 минут, longotipov всегда на связи.",
  },
  {
    name: "Maxim_play",
    role: "Геймер",
    avatar: "",
    content: "Купил Apex — топ цена за качество. Больше ни к кому не хожу, только сюда.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Что говорят покупатели</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Реальные отзывы из Telegram-комьюнити
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-red-500 text-white font-bold">
                      {testimonial.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
