// Ex7 — Dashboard simples com Grid (2 pontos)

// Considerando o layout abaixo, estilize com Tailwind:

// - O cabeçalho ocupa largura total (com título e botão “Logout” alinhados em extremidades).
// - O conteúdo é dividido em 2 colunas no desktop e 1 coluna no mobile.
// - Cada card deve ter borda, sombra e padding

export default function Ex7() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex7 - Dashboard Simples</h1>
      <header className="flex w-full justify-between bg-blue-300 p-5">
        <h1>Meu Dashboard</h1>
        <button>Sair</button>
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-2 p-8 bg-blue-400">
        <div className="bg-white border-1 shadow-xl/20 p-5">Card 1</div>
        <div className="bg-white border-1 shadow-xl/20 p-5">Card 2</div>
        <div className="bg-white border-1 shadow-xl/20 p-5">Card 3</div>
        <div className="bg-white border-1 shadow-xl/20 p-5">Card 4</div>
      </main>
    </div>
  );
}
