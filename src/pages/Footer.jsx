// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <h3 className="mb-2 text-lg font-bold text-white">🌸 Sakura Sushi 🍣</h3>
          <p className="text-sm">Tradição japonesa com ingredientes frescos, todos os dias.</p>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-bold text-white">Horários</h3>
          <p className="text-sm">Ter a Sex: 18h às 23h</p>
          <p className="text-sm">Sáb e Dom: 12h às 23h</p>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-bold text-white">Contato</h3>
          <p className="text-sm">Av. Paulista, 1106, São Paulo</p>
          <p className="text-sm">(11) 99999-9999</p>
        </div>
      </div>
    </footer>
  )
}