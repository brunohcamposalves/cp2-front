// Ex5 — Navbar responsiva

// Crie uma barra de navegação horizontal com 3 links.

// - Em telas grandes, os links devem aparecer em linha.
// - Em telas pequenas, os links devem aparecer empilhados.

export default function Ex5() {
  return (
    <div className="my-8">
      <h1 className="text-2xl font-bold mb-4">Ex5 - Navbar Responsiva</h1>
      <div className="bg-blue-600 w-full p-10">
        <ul className="flex gap-15 flex-col sm:flex-row">
          <li>
            <a> Item 1</a>
          </li>
          <li>
            <a> Item 2</a>
          </li>
          <li>
            <a> Item 3</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
