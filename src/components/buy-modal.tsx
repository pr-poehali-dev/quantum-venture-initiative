import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

interface BuyModalProps {
  open: boolean
  onClose: () => void
}

export function BuyModal({ open, onClose }: BuyModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-gray-900 border border-red-500/30 text-white max-w-sm mx-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white font-orbitron text-center">
            Купить защиту
          </DialogTitle>
          <DialogDescription className="text-gray-300 text-center font-space-mono pt-2">
            Для покупки напишите нам в Telegram — выберем тариф и оформим всё быстро.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center gap-6 py-4">
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 w-full text-center">
            <p className="text-gray-400 text-sm font-space-mono mb-1">Продавец</p>
            <p className="text-red-400 text-xl font-bold font-orbitron">@longotipov</p>
          </div>

          <div className="grid grid-cols-3 gap-3 w-full text-center">
            <div className="bg-gray-800 rounded-lg p-3">
              <p className="text-white font-bold font-orbitron">100₽</p>
              <p className="text-gray-400 text-xs font-space-mono">Обычный</p>
            </div>
            <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3">
              <p className="text-red-400 font-bold font-orbitron">150₽</p>
              <p className="text-gray-400 text-xs font-space-mono">Apex</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-3">
              <p className="text-white font-bold font-orbitron">259₽</p>
              <p className="text-gray-400 text-xs font-space-mono">Full</p>
            </div>
          </div>

          <Button
            className="w-full bg-red-500 hover:bg-red-600 text-white font-orbitron text-base py-5 flex items-center gap-2"
            onClick={() => {
              window.open("https://t.me/longotipov", "_blank")
              onClose()
            }}
          >
            <Icon name="Send" size={18} />
            Написать @longotipov
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
