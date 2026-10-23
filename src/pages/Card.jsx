export default function Card({ nome, descricao, preco, emoji = "🍣" }) {
  return (
    <article>
      <div>{emoji}</div>
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <span>{preco}</span>
    </article>
  );
}
