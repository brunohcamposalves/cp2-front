// Ex6 — Layout com Grid

// Crie um layout com cabeçalho, conteúdo principal e rodapé usando `grid`:

// - O Layout deve ter 20rem de altura total.
// - Cabeçalho ocupa 100% largura, 80px altura.
// - Conteúdo central ocupa o restante da tela.
// - Rodapé fixo embaixo (80px).

export default function Ex6() {
  return (
    <div className="my-8">
      <h1 className="text-2xl font-bold mb-4">Ex6 - Layout com Grid</h1>
      <div className="h-80 bg-amber-300 m-auto w-250 grid">
        <header className="w-full h-20 bg-amber-700 text-center">
          Cabeçalho
        </header>
        <main className="h-40 text-center"> Contúdo principal </main>
        <footer className="h-20 bg-amber-200 text-cente"> Rodape </footer>
      </div>
    </div>
  );
}
