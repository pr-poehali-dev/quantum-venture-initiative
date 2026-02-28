import { Button } from "@/components/ui/button"

interface CTASectionProps {
  onBuyClick?: () => void
}

export function CTASection({ onBuyClick }: CTASectionProps) {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="text-5xl font-bold text-foreground mb-6 font-sans text-balance">Готов получить защиту?</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Выбирай нужный тариф и пиши @longotipov — защита придёт за считанные минуты прямо в Telegram.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={onBuyClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90 pulse-button text-lg px-8 py-4"
            >
              Купить защиту
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open("https://t.me/longotipov", "_blank")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 bg-transparent"
            >
              Написать в Telegram
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
