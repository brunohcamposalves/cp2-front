// Ex2 — Flexbox básico

// Crie um container com `flex` que alinhe três quadrados coloridos (50x50px) lado a lado e centralizados horizontalmente.

export default function Ex2() {
  return (
    <div className="my-8 flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Ex2 - Flexbox Básico</h1>
      <div className="flex gap-5 m-auto">
        <div className="my-8 bg-blue-700 w-50 h-50 text-center text-white font-bold"></div>
        <div className="my-8 bg-red-700 w-50 h-50 text-center text-white font-bold"></div>
        <div className="my-8 bg-orange-700 w-50 h-50 text-center text-white font-bold"></div>
      </div>
    </div>
  );
}
