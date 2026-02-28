import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="bg-black border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
              longo<span className="text-red-500">tipdef</span>
            </h2>
            <p className="font-space-mono text-gray-300 mb-6 max-w-md">
              Дефа-защита для настоящих игроков. Быстро, надёжно и напрямую в Telegram.
            </p>
            <a
              href="https://t.me/longotipov"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors duration-200"
            >
              <Icon name="Send" size={20} />
              <span className="font-space-mono">@longotipov</span>
            </a>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#plans" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Тарифы
                </a>
              </li>
              <li>
                <a href="#features" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Преимущества
                </a>
              </li>
              <li>
                <a href="#faq" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Вопросы
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/longotipov"
                  target="_blank"
                  rel="noreferrer"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-red-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-gray-400 text-sm">2026 longotipdef. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
