import CardProduto from "@/components/CardProduto"
import produtos from "../../../produtos.json"

export default function Produto() {
  return (
    <main className="min-h-screen bg-slate-50 pb-16">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-purple-500">
            Farmácia Pyoi
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Todos os produtos
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Catálogo completo com produtos de higiene, cuidados pessoais,
            suplementos e medicamentos disponíveis na farmácia.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 justify-items-center md:grid-cols-2 xl:grid-cols-3">
          {produtos.map((produto) => (
            <CardProduto
              key={produto.id}
              id={produto.id}
              title={produto.title}
              description={produto.description}
              price={produto.price}
              imageSrc={produto.imageSrc}
              destaque={produto.destaque}
            />
          ))}
        </div>
      </section>
    </main>
  )
}