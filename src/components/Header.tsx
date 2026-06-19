'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  // ✅ Removido o tipo explícito <boolean> - desnecessário
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    // ✅ Já estava correto com z-50
    <header className="relative w-full bg-white border-b border-slate-200 z-50">
      {/* ✅ Container com padding responsivo - já estava correto */}
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-36 flex items-center justify-between">
        
        <div className="flex items-center gap-3">
          <Image
            src="/logo/pyoi_logo.png"
            alt="Logo da empresa"
            width={50}
            height={50}
            className="h-8 w-auto object-contain"
          />
          <h1 className="text-lg font-bold text-purple-600">
            Farmacia Pyoi
          </h1>
        </div>

        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors">
            Home
          </Link>
          <Link href="/produtos" className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors">
            Produtos
          </Link>
          <Link href="/contato" className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors">
            Contato
          </Link>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-purple-400 hover:text-purple-600 transition-colors focus:outline-none"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
        </button>
      </div>
      
      {/* ✅ Menu mobile - posicionamento corrigido */}
      {isOpen && (
        <nav className="md:hidden p-2 absolute top-16 left-0 w-full bg-white border-b border-slate-200 shadow-lg px-6 py-4 flex flex-col space-y-4 z-40">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/produtos"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors"
          >
            Produtos
          </Link>
          <Link
            href="/contato"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors"
          >
            Contato
          </Link>
        </nav>
      )}
    </header>
  );
}