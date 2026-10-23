export default function Card({ nome, descricao, preco, emoji = "🍣" }) {
  const precoFormatado = preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <article className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-40 items-center justify-center bg-red-50 text-6xl">
        {emoji}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900">{nome}</h3>
        <p className="mt-1 text-sm text-gray-600">{descricao}</p>
        <span className="mt-4 block text-lg font-bold text-red-700">
          {precoFormatado}
        </span>
      </div>
    </article>
  );
}
