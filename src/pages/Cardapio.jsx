import React from 'react';
import { Card } from '../components/Card';

const pratos = [
  {
    id: 1,
    titulo: 'Combo Sakura Premium',
    descricao: '12 peças selecionadas de salmão, atum e peixe branco com raspa de limão siciliano.',
    preco: '89,90',
    imagem: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=600&auto=format&fit=crop',
    tag: 'Mais Pedido'
  },
  {
    id: 2,
    titulo: 'Sashimi de Salmão Trufado',
    descricao: 'Fatias finas de salmão fresco finalizadas com azeite de trufas e flor de sal.',
    preco: '64,00',
    imagem: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=600&auto=format&fit=crop',
    tag: 'Especialidade'
  },
  {
    id: 3,
    titulo: 'Hot Roll Crispy',
    descricao: 'Uramaki empanado crocante recheado com cream cheese e coberto com molho tare.',
    preco: '38,50',
    imagem: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=600&auto=format&fit=crop',
    tag: 'Crocante'
  }
];

export function Cardapio() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-extrabold text-pink-500 mb-8 border-b border-zinc-800 pb-4">
          🌸 Nosso Cardápio
        </h1>

        {/* Grelha de Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pratos.map((prato) => (
            <Card
              key={prato.id}
              titulo={prato.titulo}
              descricao={prato.descricao}
              preco={prato.preco}
              imagem={prato.imagem}
              tag={prato.tag}
            />
          ))}
        </div>
      </div>
    </div>
  );
}