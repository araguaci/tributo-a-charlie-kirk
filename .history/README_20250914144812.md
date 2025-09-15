# Homenagem a Charlie Kirk

Este é um site de tributo não oficial dedicado a Charlie Kirk, uma figura proeminente no conservadorismo jovem. A aplicação foi desenvolvida para explorar o legado, as ideias e o impacto de Kirk através de diversas seções interativas.

## Funcionalidades Principais:

*   **Página Inicial (Home)**: Apresenta uma visão geral com citações destacadas, artigos recentes e uma seção de homenagens de líderes mundiais.
*   **Sobre Kirk**: Uma seção detalhada que aborda a biografia, a trajetória e os principais marcos da carreira de Charlie Kirk, incluindo uma linha do tempo interativa.
*   **Artigos e Análises**: Uma coleção de artigos aprofundados sobre a vida e as ideias de Kirk, com a possibilidade de compartilhar cada artigo no X (Twitter).
*   **Citações Inspiradoras**: Uma galeria das frases mais impactantes e memoráveis de Charlie Kirk, com a opção de compartilhar cada citação no X (Twitter).
*   **Contato**: Uma página que permite aos usuários enviar mensagens através de um formulário de contato incorporado em um modal (Google Form).
*   **Navegação Responsiva**: O site é totalmente responsivo, garantindo uma experiência de usuário consistente em dispositivos móveis e desktops.

## Tecnologias Utilizadas:

*   **React**: Biblioteca JavaScript para construção de interfaces de usuário.
*   **TypeScript**: Superset de JavaScript que adiciona tipagem estática.
*   **React Router**: Para gerenciamento de rotas na aplicação.
*   **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva.
*   **shadcn/ui**: Coleção de componentes de UI reutilizáveis e acessíveis, construídos com Radix UI e Tailwind CSS.
*   **Lucide React**: Biblioteca de ícones.
*   **Google Forms**: Utilizado para o formulário de contato.

## Como Rodar a Aplicação (Desenvolvimento):

1.  **Instalar Dependências**:
    ```bash
    npm install
    # ou pnpm install
    # ou yarn install
    ```
2.  **Iniciar o Servidor de Desenvolvimento**:
    ```bash
    npm run dev
    # ou pnpm dev
    # ou yarn dev
    ```
    A aplicação estará disponível em `http://localhost:5173` (ou outra porta, se 5173 estiver em uso).

## Estrutura do Projeto:

*   `src/pages`: Contém os componentes das páginas principais da aplicação (Home, Sobre, Artigos, Citações, Contato).
*   `src/components`: Contém componentes reutilizáveis, como `Header`, `Footer`, `Layout`, `HomenagemCard`, `FeaturedQuotes` e `ContactModalForm`.
*   `src/data`: Armazena os dados estáticos da aplicação, como artigos, citações e homenagens.
*   `src/components/ui`: Componentes de UI do shadcn/ui.

---