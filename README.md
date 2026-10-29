# 🎯 Game Guess

Jogo de adivinhação de palavras feito com **React** e **TypeScript**. A cada partida, uma palavra é sorteada e o jogador recebe uma dica. O objetivo é descobrir a palavra digitando uma letra por vez, antes de acabarem as tentativas.

> 📚 Este projeto foi criado com objetivo de **estudo e prática** dos fundamentos de React com TypeScript, com foco em **componentização**, **props**, **tipagem** e **gerenciamento de estados**.

---

## 🕹️ Como jogar

1. Ao abrir a aplicação, uma palavra aleatória é sorteada e a **dica** aparece na tela.
2. Digite **uma letra** no campo de palpite e clique em **Confirmar**.
3. Se a letra existir na palavra, ela é revelada em todas as posições em que aparece.
4. Todas as letras tentadas ficam listadas em **Letras Utilizadas**, destacando acertos e erros.
5. O número de tentativas é o **tamanho da palavra + 5**.
6. O jogo termina quando:
   - ✅ todas as letras da palavra são descobertas (vitória); ou
   - ❌ o limite de tentativas é atingido (derrota).
7. Ao final, uma nova partida começa automaticamente. Também é possível reiniciar a qualquer momento pelo botão de reiniciar no cabeçalho.

Letras repetidas não contam como nova tentativa: o jogo avisa que a letra já foi usada.

---

## 🛠️ Tecnologias utilizadas

- [React 19](https://react.dev/): biblioteca para construção de interfaces
- [TypeScript](https://www.typescriptlang.org/): tipagem estática para JavaScript
- [Vite](https://vite.dev/): ferramenta de build e servidor de desenvolvimento
- [CSS Modules](https://github.com/css-modules/css-modules): estilos com escopo local por componente

---

## 📁 Estrutura do projeto

```
game-guess/
├── public/
│   └── icon.svg                 # Ícone da aplicação
├── src/
│   ├── assets/                  # Imagens (logo e ícones)
│   ├── components/
│   │   ├── Button/              # Botão reutilizável (aceita as props nativas de <button>)
│   │   ├── Header/              # Logo, contador de tentativas e botão de reiniciar
│   │   ├── Input/               # Campo de texto reutilizável (aceita as props nativas de <input>)
│   │   ├── Letters/             # Caixa de uma letra, com variações de tamanho e cor
│   │   ├── LettersUsed/         # Lista das letras já tentadas (acertos e erros)
│   │   └── Tip/                 # Exibe a dica da palavra atual
│   ├── utils/
│   │   └── words.ts             # Lista de palavras/dicas e o tipo Challenge
│   ├── App.tsx                  # Componente principal: estados e regras do jogo
│   ├── app.module.css           # Estilos do App
│   ├── global.css               # Estilos globais
│   └── main.tsx                 # Ponto de entrada da aplicação
├── index.html
├── package.json
├── tsconfig*.json               # Configurações do TypeScript
└── vite.config.ts               # Configuração do Vite
```

Cada componente fica em sua própria pasta, com um `index.tsx` e um `styles.module.css`.

---

## 🚀 Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- npm (instalado junto com o Node.js)

### Passo a passo

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Acesse a pasta do projeto
cd game-guess

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Depois, abra no navegador o endereço exibido no terminal (por padrão, `http://localhost:5173`).

### Scripts disponíveis

| Comando           | Descrição                                              |
| ----------------- | ------------------------------------------------------ |
| `npm run dev`     | Inicia o servidor de desenvolvimento                   |
| `npm run build`   | Verifica os tipos com TypeScript e gera o build final  |
| `npm run preview` | Executa localmente o build de produção                 |

---

## 💡 Conceitos praticados

- **Componentização**: a interface é dividida em componentes pequenos e reutilizáveis (`Button`, `Input`, `Letters`, etc.).
- **Props tipadas**: cada componente define o tipo das suas props com TypeScript, incluindo a extensão de props nativas com `React.ComponentProps<"button">` e `React.ComponentProps<"input">`.
- **Composição de componentes**: `LettersUsed` reutiliza o componente `Letters` com outras variações de tamanho e cor.
- **Estados com `useState`**: controle da palavra sorteada, da letra digitada, das letras utilizadas e da pontuação.
- **Efeitos com `useEffect`**: iniciar o jogo ao carregar a página e verificar vitória/derrota sempre que o estado muda.
- **Renderização de listas**: uso de `map` para exibir as letras da palavra e as letras utilizadas.
- **Renderização condicional**: estilos e conteúdos que mudam conforme o estado (letra correta, errada ou ainda não descoberta).
- **Eventos**: tratamento de `onClick` e `onChange` para interação do usuário.

---

## ➕ Adicionando novas palavras

As palavras ficam em [`src/utils/words.ts`](src/utils/words.ts). Para adicionar uma nova, basta incluir um objeto na lista `WORDS`:

```ts
{ id: 6, word: "VITE", tip: "Ferramenta de build para projetos front-end" }
```

---

## 📝 Licença

Projeto desenvolvido para fins de estudo, de uso livre para aprendizado.
