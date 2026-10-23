export default function Card({ nome, descricao, preco, foto }) {
  return (
    <div className="rounded-2xl bg-gray-900 p-4 border border-gray-800 shadow-xl flex flex-col justify-between overflow-hidden">
      <div>
        <img src={foto} alt={nome} className="mb-4 h-40 w-full object-cover rounded-xl" />
        <h3 className="text-xl font-bold text-white mb-2">{nome}</h3>
        <p className="text-gray-400 text-sm mb-4">{descricao}</p>
      </div>
      <div className="text-red-500 font-bold text-lg">
        R$ {preco.toFixed(2)}
      </div>
    </div>
  );
}