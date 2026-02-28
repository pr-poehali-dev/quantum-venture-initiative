import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Как купить защиту?",
      answer:
        "Нажми кнопку «Купить» на сайте — откроется окно со ссылкой на Telegram. Напиши @longotipov, выбери нужный тариф и оплати. Защита придёт в течение нескольких минут.",
    },
    {
      question: "Какие есть варианты защиты?",
      answer:
        "Три тарифа: Обычный — 100₽, Apex — 150₽, Full — 259₽. Чем выше тариф, тем больше возможностей защиты.",
    },
    {
      question: "Как происходит оплата?",
      answer:
        "Оплата обсуждается напрямую с @longotipov в Telegram. Принимаем удобные для тебя способы.",
    },
    {
      question: "Как быстро приходит защита?",
      answer:
        "Обычно в течение 5-15 минут после подтверждения оплаты. Продавец всегда на связи.",
    },
    {
      question: "Что делать, если возникла проблема?",
      answer:
        "Пиши напрямую @longotipov в Telegram — всё решим быстро и без лишних вопросов.",
    },
    {
      question: "Безопасно ли покупать?",
      answer:
        "Да. Это проверенный продавец с историей в комьюнити. Сотни довольных покупателей подтверждают надёжность.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё что нужно знать перед покупкой
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
