import React from 'react';

export function Card({ imagem, titulo, descricao, preco, tag }) {
  return (
    <div className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ease-out hover:-translate-y-2 hover:border-pink-500/50 hover:shadow-2xl hover:shadow-pink-500/20">
      
      {/* Imagem do Prato com Efeito de Zoom no Hover */}
      <div className="relative h-48 w-full overflow-hidden bg-zinc-800">
        <img
          src={imagem}
          alt={titulo}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        
        {/* Tag opcional (ex: Destaque, Novo, Chef) */}
        {tag && (
          <span className="absolute top-3 left-3 bg-pink-600/90 text-white text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-md border border-pink-400/30">
            {tag}
          </span>
        )}
      </div>

      {/* Conteúdo do Card */}
      <div className="p-5 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-pink-400">
            {titulo}
          </h3>
          <p className="mt-2 text-sm text-zinc-400 line-clamp-2">
            {descricao}
          </p>
        </div>

        {/* Preço e Botão de Ação */}
        <div className="mt-6 flex items-center justify-between">
          <span className="text-lg font-bold text-pink-500">
            R$ {preco}
          </span>

          <button className="relative overflow-hidden rounded-xl bg-pink-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-pink-500 hover:shadow-pink-500/50 active:scale-95">
            Pedir Agora
          </button>
        </div>
      </div>

    </div>
  );
}