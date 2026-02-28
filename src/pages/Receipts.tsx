import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BuyModal } from "@/components/buy-modal"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import type { Receipt } from "@/components/buy-modal"

export default function Receipts() {
  const [receipts, setReceipts] = useState<Receipt[]>([])
  const [buyOpen, setBuyOpen] = useState(false)

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("longotipdef_receipts") || "[]")
    setReceipts(stored)
  }, [])

  return (
    <div className="dark min-h-screen bg-black">
      <Navbar onBuyClick={() => setBuyOpen(true)} />
      <main className="max-w-2xl mx-auto px-4 pt-28 pb-16">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white font-orbitron mb-2">Мои чеки</h1>
          <p className="text-gray-400 font-space-mono text-sm">История твоих покупок</p>
        </div>

        {receipts.length === 0 ? (
          <div className="text-center py-20 text-gray-500 font-space-mono">
            <Icon name="ReceiptText" size={48} className="mx-auto mb-4 opacity-30" />
            <p>Чеков пока нет</p>
            <Button
              className="mt-6 bg-red-500 hover:bg-red-600 text-white font-orbitron"
              onClick={() => window.location.href = "/"}
            >
              Выбрать тариф
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {receipts.map((r) => (
              <Card key={r.id} className="bg-gray-900 border border-red-500/20">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-white font-bold font-orbitron text-lg">{r.plan}</p>
                      <p className="text-gray-500 text-xs font-space-mono mt-0.5">{r.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-red-400 font-extrabold font-orbitron text-xl">{r.amount}₽</p>
                      <p className="text-gray-500 text-xs font-space-mono">Чек #{r.id}</p>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-3 mb-4 flex justify-between text-sm font-space-mono">
                    <span className="text-gray-400">Карта</span>
                    <span className="text-white">{r.card}</span>
                  </div>

                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-center">
                    <p className="text-gray-300 text-xs font-space-mono mb-1">
                      Чтобы забрать деф — напиши продавцу:
                    </p>
                    <a
                      href="https://t.me/longotipov"
                      target="_blank"
                      rel="noreferrer"
                      className="text-red-400 font-bold font-orbitron hover:text-red-300 transition-colors"
                    >
                      @longotipov
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
      <Footer />
      <BuyModal open={buyOpen} onClose={() => setBuyOpen(false)} />
    </div>
  )
}
