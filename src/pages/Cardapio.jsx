import { useState } from "react";
import Card from "./Card.jsx";

const pratos = [
  { id: 1, nome: "Sushi Salmão (8un)", descricao: "Nigiri de salmão fresco.", preco: 32.9, emoji: "🍣", categoria: "Sushis" },
  { id: 2, nome: "Uramaki Filadélfia", descricao: "Salmão, cream cheese e cebolinha.", preco: 28.9, emoji: "🍥", categoria: "Sushis" },
  { id: 3, nome: "Sashimi Atum", descricao: "10 fatias de atum fresco.", preco: 44.9, emoji: "🐟", categoria: "Sashimis" },
  { id: 4, nome: "Sashimi Salmão", descricao: "10 fatias de salmão fresco.", preco: 42.9, emoji: "🍱", categoria: "Sashimis" },
  { id: 5, nome: "Ramen Shoyu", descricao: "Caldo artesanal com ovo marinado.", preco: 39.9, emoji: "🍜", categoria: "Quentes" },
  { id: 6, nome: "Yakisoba", descricao: "Macarrão salteado com legumes e carne.", preco: 36.9, emoji: "🥢", categoria: "Quentes" },
  { id: 7, nome: "Mochi", descricao: "Docinho japonês de arroz (3un).", preco: 18.9, emoji: "🍡", categoria: "Sobremesas" },
  { id: 8, nome: "Dorayaki", descricao: "Panqueca recheada com doce de feijão.", preco: 16.9, emoji: "🥞", categoria: "Sobremesas" },
];

const categorias = ["Todos", "Sushis", "Sashimis", "Quentes", "Sobremesas"];

export default function Cardapio() {
  const [filtro, setFiltro] = useState("Todos");

  const pratosFiltrados =
    filtro === "Todos" ? pratos : pratos.filter((p) => p.categoria === filtro);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold text-gray-900">
        Cardápio
      </h1>

      <p className="mb-6 text-center text-gray-500">
        {pratosFiltrados.length}{" "}
        {pratosFiltrados.length === 1 ? "prato encontrado" : "pratos encontrados"}
      </p>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categorias.map((c) => (
          <button
            key={c}
            onClick={() => setFiltro(c)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              filtro === c
                ? "bg-red-700 text-white"
                : "bg-white text-gray-700 shadow hover:bg-red-50"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {pratosFiltrados.map((p) => (
          <Card
            key={p.id}
            nome={p.nome}
            descricao={p.descricao}
            preco={p.preco}
            emoji={p.emoji}
          />
        ))}
      </div>

      {pratosFiltrados.length === 0 && (
        <p className="mt-8 text-center text-gray-500">
          Nenhum prato nesta categoria.
        </p>
      )}
    </section>
  );
}