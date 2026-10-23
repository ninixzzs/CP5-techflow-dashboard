import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="text-2xl">🌸</span>
              <h3 className="text-xl font-bold tracking-wide text-white">
                Sakura Sushi
              </h3>
              <span className="text-xl">🍣</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Tradição e sofisticação na arte da culinária japonesa. Ingredientes
              frescos e de qualidade selecionados diariamente para você.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-base font-semibold text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="transition-colors duration-200 hover:text-red-400"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/cardapio"
                  className="transition-colors duration-200 hover:text-red-400"
                >
                  Cardápio
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-base font-semibold text-white">
              Horários
            </h4>
            <ul className="space-y-1.5 text-sm text-gray-400">
              <li>
                <strong className="text-gray-300">Segunda:</strong> Fechado
              </li>
              <li>
                <strong className="text-gray-300">Terça a Sexta:</strong> 18h às 23h
              </li>
              <li>
                <strong className="text-gray-300">Sábado e Domingo:</strong> 12h às 23h
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-base font-semibold text-white">
              Contato & Localização
            </h4>
            <address className="space-y-1.5 text-sm text-gray-400 not-italic">
              <p>Av. Paulista, 1106</p>
              <p>Bela Vista — São Paulo, SP</p>
              <p className="pt-1">
                <a
                  href="tel:+5511999999999"
                  className="font-medium text-gray-300 transition-colors duration-200 hover:text-red-400"
                >
                  📞 (11) 99999-9999
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-gray-800 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>© {currentYear} Sakura Sushi. Todos os direitos reservados.</p>
          <p className="text-gray-500">
            CP5 • Restaurante Japonês
          </p>
        </div>
      </div>
    </footer>
  );
}
