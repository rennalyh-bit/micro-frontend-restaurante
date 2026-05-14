# 🍽 Micro Frontend Restaurante

Projeto desenvolvido utilizando arquitetura de Micro Frontends com React, Webpack 5 e Module Federation.

O sistema simula um restaurante online com:

- Cardápio de pratos
- Carrinho de pedidos
- Comunicação entre aplicações independentes
- Interface responsiva e moderna

---

# 📁 Estrutura do Projeto

```bash
micro-frontend-restaurante/
│
├── container-app/
├── micro-cardapio/
└── micro-pedido/
```

---

# 🚀 Tecnologias Utilizadas

- React
- Webpack 5
- Module Federation
- Babel
- CSS3
- JavaScript

---

# ▶️ Como Rodar o Projeto

O projeto possui 3 aplicações independentes.

Abra 3 terminais diferentes.

---

# 1️⃣ Rodar o Micro Frontend Cardápio

```bash
cd micro-cardapio
npm install
npm start
```

Rodará em:

```bash
http://localhost:3001
```

---

# 2️⃣ Rodar o Micro Frontend Pedido

```bash
cd micro-pedido
npm install
npm start
```

Rodará em:

```bash
http://localhost:3002
```

---

# 3️⃣ Rodar o Container Principal

```bash
cd container-app
npm install
npm start
```

Rodará em:

```bash
http://localhost:3000
```

---

# 🔗 Como Funciona a Comunicação Entre os Micros

A comunicação é feita utilizando o Module Federation do Webpack 5.

O `container-app` importa componentes remotos dos outros micros:

- `micro-cardapio`
- `micro-pedido`

O compartilhamento acontece através do arquivo:

```js
remoteEntry.js
```

Cada microfrontend expõe seus componentes para o container principal.

Exemplo:

```js
exposes: {
  "./Cardapio": "./src/Cardapio",
}
```

O container consome os micros através da configuração:

```js
remotes: {
  microCardapio:
    "microCardapio@http://localhost:3001/remoteEntry.js",
}
```

---

# 🛒 Comunicação do Carrinho

O carrinho utiliza:

```js
localStorage
```

para compartilhar os pedidos entre os micros.

Quando um item é adicionado no cardápio, ele é salvo no `localStorage`, permitindo que o micro de pedidos atualize automaticamente a lista de compras.

---

# 🎨 Funcionalidades

- Listagem de pratos
- Imagens dos produtos
- Descrição dos pratos
- Adicionar ao carrinho
- Remover do carrinho
- Cálculo do valor total
- Layout responsivo
- Arquitetura distribuída

---

# 📚 Objetivo do Projeto

Aplicar os conceitos de:

- Micro Frontends
- Module Federation
- Compartilhamento de módulos
- Comunicação entre aplicações
- Componentização com React
- Arquitetura escalável

---

# 👨‍💻 Autor

Projeto desenvolvido para atividade prática de Micro Frontends com React e Webpack.