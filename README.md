# README - Fundamentos e Conceitos Básicos do React

## 1. Fundamentos

### O que é React?

React é uma biblioteca JavaScript para a criação de interfaces de usuário (UI) interativas e dinâmicas. Ele permite a construção de componentes reutilizáveis e melhora a performance da aplicação através do conceito de Virtual DOM.

### Por que usar React?

- Componentização facilita a reutilização de código.
- Performance otimizada com Virtual DOM.
- Grande comunidade e ecossistema.
- Facilita a criação de Single Page Applications (SPA).

### Configurando o ambiente

1. Instale o Node.js (https://nodejs.org/)
2. Instale o gerenciador de pacotes npm ou yarn:
   ```sh
   npm install -g yarn
   ```

### Criando um projeto React

#### Com Create React App (CRA)

```sh
npx create-react-app meu-projeto
cd meu-projeto
npm start
```

#### Com Vite (recomendado)

```sh
npm create vite@latest meu-projeto --template react
cd meu-projeto
npm install
npm run dev
```

### Rodando e parando o servidor

- Iniciar o servidor de desenvolvimento:
  ```sh
  npm start # CRA
  npm run dev # Vite
  ```
- Parar o servidor: Ctrl + C

### Extensões recomendadas para produtividade

- **ES7+ React/Redux/React-Native snippets**
- **Prettier** (Formatador de código)
- **ESLint** (Analisador de código)
- **React Developer Tools**

## 2. Conceitos Básicos

### Criando e usando componentes

```jsx
import React from "react";

function MeuComponente() {
  return <h1> Olá, Mundo! </h1>;
}

export default MeuComponente;
```

Uso do componente:

```jsx
import MeuComponente from "./MeuComponente";

function App() {
  return (
    <div>
      <MeuComponente />
    </div>
  );
}
export default App;
```

### Uso de variáveis no JSX

```jsx
const nome = "React";

function App() {
  return <h1> Olá, {nome}! </h1>;
}
```

### Props (Propriedades)

```jsx
function Saudacao(props) {
  return <h1> Olá, {props.nome}! </h1>;
}

function App() {
  return <Saudacao nome="João" />;
}
```

### Condicionais e operador ternário

```jsx
function Mensagem({ isLogado }) {
  return <h1>{isLogado ? "Bem-vindo de volta!" : "Por favor, faça login."}</h1>;
}
```

### Atributos dinâmicos

```jsx
const cor = "blue";

function App() {
  return <h1 style={{ color: cor }}>Texto colorido</h1>;
}
```

### Eventos

```jsx
function Botao() {
  function handleClick() {
    alert("Botão clicado!");
  }

  return <button onClick={handleClick}>Clique aqui</button>;
}
```

### Listas e keys

```jsx
const itens = ["Item 1", "Item 2", "Item 3"];

function Lista() {
  return (
    <ul>
      {itens.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
```

### Boas práticas em React

- Use **camelCase** para nomear variáveis e componentes.
- Sempre utilize **chaves ({})** para valores dinâmicos dentro do JSX.
- Dê preferência ao uso de **hooks** para gerenciar estado.
- Use **keys únicas** para listas dinâmicas.
- Mantenha os componentes pequenos e reutilizáveis.

---

Este README cobre os principais fundamentos e conceitos básicos do React. Pratique e explore a documentação oficial para se aprofundar mais! 🚀
