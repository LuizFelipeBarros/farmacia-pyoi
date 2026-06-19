# 💊 Farmácia Pyoi — Sua Saúde em Primeiro Lugar

Uma plataforma web moderna e responsiva desenvolvida para a Farmácia Pyoi, proporcionando uma experiência digital acolhedora e eficiente para clientes que buscam produtos farmacêuticos de qualidade. O projeto foi construído utilizando Next.js no front-end, combinando alta performance, design clean e componentes interativos de última geração.

## 🧭 Sobre o Projeto

A Farmácia Pyoi nasceu com o propósito de oferecer produtos farmacêuticos com confiança, qualidade e atendimento humanizado. A interface foi cuidadosamente projetada para transmitir segurança, profissionalismo e uma experiência de navegação fluida para o usuário.

### 🌟 Diferenciais da Farmácia:
- **Produtos de Qualidade**: Seleção criteriosa de medicamentos e produtos para sua saúde e bem-estar.
- **Atendimento Humanizado**: Equipe preparada para oferecer suporte e orientação.
- **Ambiente Seguro**: Navegação protegida e informações confiáveis.
- **Facilidade de Compra**: Interface intuitiva que simplifica a busca e escolha de produtos.

## 🎨 Identidade Visual e UI/UX

O design reflete um ambiente confiável, profissional e acolhedor através de escolhas estéticas bem planejadas:

- **Paleta de Cores**: Tons suaves de roxo (#purple-600) combinados com cinza e branco, transmitindo elegância, confiança e modernidade.
- **Tipografia**: Utilização da fonte Roboto para uma leitura limpa e acessível em todos os dispositivos.
- **Componentes Premium**: Cards com sombras suaves, bordas arredondadas e estados de hover interativos que enriquecem a experiência do usuário.
- **Design Responsivo**: Adaptação perfeita para dispositivos móveis, tablets e desktops.

## 🛠️ Tecnologias Utilizadas

O ecossistema de ferramentas escolhido garante escalabilidade, performance e otimização:

- **Next.js (App Router)**: Framework React para renderização híbrida rápida e roteamento otimizado.
- **React.js**: Biblioteca base para construção da interface modularizada.
- **Tailwind CSS**: Framework utilitário para estilização rápida, responsiva e altamente customizável.
- **Shadcn/ui**: Componentes de interface primitivos, acessíveis e customizados — com destaque para o Carrossel e Cards de produtos.
- **Lucide React**: Ícones minimalistas e elegantes para navegação e interação.
- **React Leaflet**: Biblioteca para integração de mapas interativos (página de contato).

## 🗂️ Funcionalidades Implementadas

### **Cabeçalho (Header)**
- Logo e nome da farmácia
- Menu de navegação com links para Home, Produtos e Contato
- Menu responsivo para dispositivos móveis com animação

### **Carrossel de Destaques**
- Banner rotativo com imagens institucionais
- Transição automática a cada 3 segundos
- Controles manuais para navegação
- Pausa automática ao interagir com o carrossel

### **Vitrine de Produtos**
- Cards de produtos com design consistente
- Exibição de título, descrição, preço formatado em BRL
- Selo de "Destaque" para produtos selecionados
- Imagens otimizadas com Next.js Image
- Grid responsivo (1 coluna em mobile, 2 em tablet, 3 em desktop)

### **Mapa de Localização**
- Integração com Leaflet para exibição de mapa interativo
- Marcador com popup informativo
- Coordenadas da localização física da farmácia

### **Rodapé (Footer)**
- Informações de direitos autorais
- Mensagem institucional personalizada
- Design minimalista e elegante

## 📱 Responsividade

- **Mobile First**: Layout otimizado para dispositivos móveis
- **Breakpoints**:
  - `sm`: Telas pequenas (celulares)
  - `md`: Telas médias (tablets)
  - `lg`: Telas grandes (desktops)
- **Menu Hamburguer**: Navegação adaptada para mobile
- **Grid Flexível**: Cards se reorganizam conforme o tamanho da tela

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos:
- Node.js instalado (versão 18.x ou superior)
- Gerenciador de pacotes npm, yarn ou pnpm

### Passo a Passo:

1. **Clonar o Repositório:**
```bash
git clone https://github.com/LuizFelipeBarros/farmacia-pyoi.git

2. **Entrar no Diretório:**
```bash
cd farmacia-pyoi
```
3. **Instalar Dependências:**
```bash
npm install
# ou
yarn install

4. **Instalar os Componentes do Shadcn/ui ("Se necessário"):**
```bash
npx shadcn@latest add card button carousel badge
```
5. **Estrutura de Dados:**
[
  {
    "id": 1,
    "title": "Nome do Produto",
    "description": "Descrição detalhada",
    "price": 99.90,
    "imageSrc": "/produtos/imagem.jpg",
    "destaque": true
  }
]

6. **Executar em Ambiente de Desenvolvimento:**
```bash
npm run dev
# ou
yarn dev
```
7. **Acessar a Aplicação:**
- Abra o navegador e acesse http://localhost:3000

**Estrutura de pastas**
```
farmacia-pyoi/
├── components/
│   ├── CardProduto.tsx
│   ├── Carrossel.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── MapaContato.tsx
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/
│   ├── carrossel/
│   ├── produtos/
│   └── logo/
├── produtos.json
└── package.json

# 🔧 Configurações Importantes
- Imagens Otimizadas: Utilização do componente Image do Next.js para carregamento eficiente

- Formatação de Moeda: Intl.NumberFormat para exibição de preços em BRL

- Z-Index Gerenciado: Controle de sobreposição para header e elementos interativos

- SEO Amigável: Meta tags configuradas no layout principal

# 🤝 Contribuição

- Contribuições são sempre bem-vindas! Sinta-se à vontade para reportar bugs, sugerir melhorias ou enviar pull requests.

# ✒️ Autor

- Este projeto foi desenvolvido com dedicação por:

- Luiz Felipe de Lima Barros

- 🌐 GitHub: github.com/LuizFelipeBarros

**💊 Farmácia Pyoi — Sua saúde em primeiro lugar. Sempre. 💜**