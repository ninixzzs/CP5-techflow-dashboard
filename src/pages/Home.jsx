import { Link } from 'react-router-dom'
import Card from '../components/Card.jsx'

const diferenciais = [
  {
    icon: '🐟',
    titulo: 'Ingredientes Frescos',
    descricao: 'Peixes selecionados todas as manhãs dos melhores fornecedores.',
  },
  {
    icon: '🍣',
    titulo: 'Tradição Nipônica',
    descricao: 'Técnicas artesanais e receitas executadas com máxima precisão.',
  },
  {
    icon: '🏮',
    titulo: 'Ambiente Imersivo',
    descricao: 'Espaço aconchegante na Av. Paulista para momentos inesquecíveis.',
  },
  {
    icon: '⚡',
    titulo: 'Qualidade & Agilidade',
    descricao: 'Preparo minucioso com atendimento atencioso e pontual.',
  },
]

const pratosDestaque = [
  { id: 1, nome: 'Sushi Salmão (8un)', descricao: 'Nigiri com salmão fresco e arroz no ponto.', preco: 32.9, foto: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&q=80', categoria: 'Sushis' },
  { id: 2, nome: 'Uramaki Filadélfia', descricao: 'Salmão fresco, cream cheese e cebolinha.', preco: 28.9, foto: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=500&q=80', categoria: 'Sushis' },
  { id: 3, nome: 'Sashimi Atum', descricao: '10 fatias selecionadas de atum nobre.', preco: 44.9, foto: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&q=80', categoria: 'Sashimis' },
  { id: 5, nome: 'Ramen Shoyu', descricao: 'Caldo artesanal rico com ovo marinado.', preco: 39.9, foto: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&q=80', categoria: 'Quentes' },
];

const avaliacoes = [
  { id: 1, nome: 'Mariana Silva', comentario: 'Salmão incrivelmente fresco que derrete na boca!', estrelas: '⭐⭐⭐⭐⭐' },
  { id: 2, nome: 'Lucas Andrade', comentario: 'O Ramen Shoyu é autêntico, caldo perfeito e reconfortante.', estrelas: '⭐⭐⭐⭐⭐' },
  { id: 3, nome: 'Beatriz Souza', comentario: 'Ambiente acolhedor e atendimento nota 10. Recomendo!', estrelas: '⭐⭐⭐⭐⭐' },
]

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-950 px-4 py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-block rounded-full bg-red-700/30 px-4 py-1.5 text-xs font-semibold tracking-wider text-red-300 uppercase">
              🌸 Tradição & Arte Culinária
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Autêntica Gastronomia <span className="text-red-500">Japonesa</span>
            </h1>
            <p className="text-base text-gray-300 sm:text-lg">
              No Sakura Sushi, combinamos respeito às tradições orientais com peixes frescos selecionados diariamente para criar momentos únicos à mesa.
            </p>
            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link
                to="/cardapio"
                className="rounded-lg bg-red-700 px-7 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-red-800"
              >
                Ver Cardápio
              </Link>
              <a
                href="#destaques"
                className="rounded-lg border border-gray-700 bg-gray-900 px-7 py-3 text-base font-medium text-gray-200 transition hover:bg-gray-800"
              >
                Pratos Populares
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative overflow-hidden rounded-2xl border-4 border-gray-800 shadow-2xl transition hover:scale-[1.02]">
              <img
                src="https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&q=80"
                alt="Prato tradicional Sakura Sushi"
                className="h-auto max-h-96 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="border-b border-gray-800 bg-gray-900 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {diferenciais.map((item) => (
              <div key={item.titulo} className="rounded-xl bg-gray-950 p-6 text-center border border-gray-800 transition hover:border-red-700/50">
                <div className="mb-3 text-4xl">{item.icon}</div>
                <h3 className="mb-1 text-base font-bold text-white">{item.titulo}</h3>
                <p className="text-sm text-gray-400">{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destaques do Cardápio */}
      <section id="destaques" className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Pratos em Destaque</h2>
          <p className="mt-2 text-gray-400">Os queridinhos dos nossos clientes, preparados artesanalmente.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pratosDestaque.map((p) => (
            <Card key={p.id} nome={p.nome} descricao={p.descricao} preco={p.preco} foto={p.foto} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/cardapio"
            className="inline-flex items-center gap-2 rounded-lg bg-red-700 px-6 py-3 font-semibold text-white transition hover:bg-red-800"
          >
            Ver Todo o Cardápio
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* Avaliações */}
      <section className="bg-gray-900 py-16 border-t border-gray-800">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-white">O que Nossos Clientes Dizem</h2>
            <p className="mt-2 text-gray-400">A satisfação de quem valoriza o verdadeiro sabor japonês.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {avaliacoes.map((av) => (
              <div key={av.id} className="rounded-xl bg-gray-950 p-6 border border-gray-800 shadow-sm">
                <div className="mb-2 text-sm">{av.estrelas}</div>
                <p className="text-sm text-gray-300 italic">“{av.comentario}”</p>
                <p className="mt-4 text-xs font-bold text-red-400">— {av.nome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}