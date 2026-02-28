import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const CARD_NUMBER = "2202208106067508"
const CARD_DISPLAY = "2202 2081 0606 7508"

export interface Receipt {
  id: string
  plan: string
  amount: number
  date: string
  card: string
}

function saveReceipt(plan: string, amount: number) {
  const receipts: Receipt[] = JSON.parse(localStorage.getItem("longotipdef_receipts") || "[]")
  const newReceipt: Receipt = {
    id: Math.random().toString(36).slice(2, 10).toUpperCase(),
    plan,
    amount,
    date: new Date().toLocaleString("ru-RU"),
    card: CARD_DISPLAY,
  }
  receipts.unshift(newReceipt)
  localStorage.setItem("longotipdef_receipts", JSON.stringify(receipts))
  return newReceipt
}

interface BuyModalProps {
  open: boolean
  onClose: () => void
  planName?: string
  planAmount?: number
}

type Step = "payment" | "confirm" | "done"

export function BuyModal({ open, onClose, planName = "Обычный", planAmount = 100 }: BuyModalProps) {
  const [step, setStep] = useState<Step>("payment")
  const [copied, setCopied] = useState(false)
  const [receipt, setReceipt] = useState<Receipt | null>(null)

  const handleClose = () => {
    setStep("payment")
    setCopied(false)
    setReceipt(null)
    onClose()
  }

  const copyCard = () => {
    navigator.clipboard.writeText(CARD_NUMBER)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handlePaid = () => {
    const r = saveReceipt(planName, planAmount)
    setReceipt(r)
    setStep("done")
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="bg-gray-900 border border-red-500/30 text-white max-w-sm mx-auto">

        {step === "payment" && (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-white font-orbitron text-center">
                Оплата — {planName}
              </DialogTitle>
              <DialogDescription className="text-gray-300 text-center font-space-mono pt-1">
                Переведи <span className="text-red-400 font-bold">{planAmount}₽</span> на карту и нажми «Оплатил»
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-4 py-2">
              <div className="bg-gray-800 rounded-xl p-4">
                <p className="text-gray-400 text-xs font-space-mono mb-2">Номер карты</p>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-white text-lg font-bold font-orbitron tracking-widest">{CARD_DISPLAY}</p>
                  <button
                    onClick={copyCard}
                    className="text-red-400 hover:text-red-300 transition-colors flex-shrink-0"
                  >
                    <Icon name={copied ? "Check" : "Copy"} size={18} />
                  </button>
                </div>
                {copied && <p className="text-green-400 text-xs font-space-mono mt-1">Скопировано!</p>}
              </div>

              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 flex items-start gap-2">
                <Icon name="Info" size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-xs font-space-mono">
                  После перевода нажми «Оплатил» — чек сохранится, затем напиши @longotipov для получения дефа.
                </p>
              </div>

              <Button
                className="w-full bg-red-500 hover:bg-red-600 text-white font-orbitron py-5"
                onClick={handlePaid}
              >
                Оплатил ✓
              </Button>
            </div>
          </>
        )}

        {step === "done" && receipt && (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-green-400 font-orbitron text-center">
                Оплата принята!
              </DialogTitle>
              <DialogDescription className="text-gray-300 text-center font-space-mono pt-1">
                Чек сохранён в разделе «Чеки»
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-4 py-2">
              <div className="bg-gray-800 rounded-xl p-4 space-y-2">
                <div className="flex justify-between text-sm font-space-mono">
                  <span className="text-gray-400">Чек №</span>
                  <span className="text-white font-bold">{receipt.id}</span>
                </div>
                <div className="flex justify-between text-sm font-space-mono">
                  <span className="text-gray-400">Тариф</span>
                  <span className="text-white">{receipt.plan}</span>
                </div>
                <div className="flex justify-between text-sm font-space-mono">
                  <span className="text-gray-400">Сумма</span>
                  <span className="text-red-400 font-bold">{receipt.amount}₽</span>
                </div>
                <div className="flex justify-between text-sm font-space-mono">
                  <span className="text-gray-400">Дата</span>
                  <span className="text-white">{receipt.date}</span>
                </div>
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-center">
                <p className="text-gray-300 text-sm font-space-mono mb-1">Для получения дефа напиши:</p>
                <a
                  href="https://t.me/longotipov"
                  target="_blank"
                  rel="noreferrer"
                  className="text-red-400 text-lg font-bold font-orbitron hover:text-red-300"
                >
                  @longotipov
                </a>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 border-gray-600 text-gray-300 hover:text-white bg-transparent"
                  onClick={() => { handleClose(); window.location.href = "/receipts" }}
                >
                  <Icon name="Receipt" size={16} className="mr-2" />
                  Мои чеки
                </Button>
                <Button
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white font-orbitron"
                  onClick={() => { window.open("https://t.me/longotipov", "_blank"); handleClose() }}
                >
                  <Icon name="Send" size={16} className="mr-2" />
                  Написать
                </Button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
