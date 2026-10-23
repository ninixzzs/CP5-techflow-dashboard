import React from 'react';

const destaques = [
  {
    id: 1,
    titulo: 'Combo Sakura Chef',
    descricao: 'Seleção especial com 20 peças dos melhores cortes do dia.',
    preco: '119,90',
    imagem: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=600&auto=format&fit=crop',
    badge: '👑 Destaque do Chef'
  },
  {
    id: 2,
    titulo: 'Sashimi Trufado',
    descricao: 'Lâminas de salmão com azeite de trufas e flor de sal.',
    preco: '68,00',
    imagem: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=600&auto=format&fit=crop',
    badge: '🔥 Mais Vendido'
  },
  {
    id: 3,
    titulo: 'Uramaki Ebi Spicy',
    descricao: 'Camarão empanado com molho de pimenta suave e cebolinho.',
    preco: '45,90',
    imagem: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=600&auto=format&fit=crop',
    badge: '⭐ Recomendado'
  },
  {
    id: 4,
    titulo: 'Nigiri Flambado',
    descricao: 'Salmão levemente maçaricado com tarê e raspa de limão.',
    preco: '32,00',
    imagem: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=600&auto=format&fit=crop',
    badge: '✨ Especial'
  }
];

export function PratosDestaque() {
  // Duplicamos a lista para criar o efeito infinito sem falhas visuais
  const listaDuplicada = [...destaques, ...destaques];

  return (
    <section className="py-12 bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-8 text-center">
        <h2 className="text-3xl font-extrabold text-pink-500 tracking-wide">
          🍣 Pratos em Destaque
        </h2>
        <p className="text-zinc-400 text-sm mt-2">
          Passe o rato por cima para pausar e ver os detalhes
        </p>
      </div>

      {/* Contentor do Carrossel Animado */}
      <div className="relative w-full overflow-hidden py-4">
        <div className="animate-marquee flex gap-6">
          {listaDuplicada.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="group relative w-80 flex-shrink-0 bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-3 hover:border-pink-500 hover:shadow-2xl hover:shadow-pink-500/25 cursor-pointer"
            >
              {/* Imagem com Zoom no Hover */}
              <div className="relative h-48 w-full overflow-hidden bg-zinc-800">
                <img
                  src={item.imagem}
                  alt={item.titulo}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute top-3 left-3 bg-pink-600/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md border border-pink-400/30">
                  {item.badge}
                </span>
              </div>

              {/* Informações do Prato */}
              <div className="p-5 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-pink-400 transition-colors">
                    {item.titulo}
                  </h3>
                  <p className="mt-1 text-xs text-zinc-400 line-clamp-2">
                    {item.descricao}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-lg font-extrabold text-pink-500">
                    R$ {item.preco}
                  </span>
                  <button className="bg-pink-600 hover:bg-pink-500 text-white text-xs font-semibold px-3 py-2 rounded-xl transition-all active:scale-95 shadow-md hover:shadow-pink-500/40">
                    Pedir Agora
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}