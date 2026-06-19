"use client"

import Carrossel from "@/components/Carrossel"
import CardProduto from "@/components/CardProduto"
import produtos from "../../produtos.json"

// 1. Definição da tipagem das propriedades dos produtos
interface ProdutoProps {
  id: string | number;
  title: string;
  description: string;
  price: number;
  imageSrc: string;
  destaque: boolean;
  categoria?: string;
}

export default function Home() {
  // Filtrar apenas os produtos com destaque = true
  const produtosEmDestaque = (produtos as ProdutoProps[]).filter(
    (produto) => produto.destaque === true
  )

  return (
    <div className="w-full min-h-screen bg-slate-50 pb-12">
      {/* Carrossel de Banner no Topo */}
      <Carrossel />

      {/* Título da Seção */}
      <div className="text-center my-10">
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
          Produtos em destaque
        </h1>
        <p className="text-slate-500 mt-2">
          Os produtos mais procurados e organizados para sua rotina
        </p>
      </div>

      {/* Grid Responsivo para os Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {produtosEmDestaque.map((produto) => (
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

      {/* Mensagem quando não houver produtos em destaque */}
      {produtosEmDestaque.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-500 text-lg">
            Nenhum produto em destaque no momento.
          </p>
        </div>
      )}
    </div>
  )
}