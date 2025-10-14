// Ex1 — Botão estilizado com Tailwind

// Crie um botão centralizado com a cor azul, texto branco, padding, bordas arredondadas e efeito `hover` para escurecer a cor.

export default function Ex1() {
  return (
    <div className="my-8">
      <h1 className="text-2xl font-bold m-auto">Ex1 - Botão Estilizado</h1>
      <div className="my-8 bg-blue-700 w-45 m-auto rounded-3xl p-3 text-center text-white hover:bg-blue-800 cursor-pointer font-bold">
        Clique aqui
      </div>
    </div>
  );
}
