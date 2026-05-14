import React from "react";
import "./styles.css";

const pratos = [
  {
    id: 1,
    nome: "Pizza Calabresa",
    descricao:
      "Pizza artesanal com molho especial, queijo mussarela e calabresa fatiada.",
    preco: 45,
    imagem:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591",
  },
  {
    id: 2,
    nome: "Hambúrguer Artesanal",
    descricao:
      "Hambúrguer premium com carne 180g, queijo cheddar e pão brioche.",
    preco: 35,
    imagem:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  },
  {
    id: 3,
    nome: "Sushi Especial",
    descricao:
      "Combo especial com sushis frescos preparados na hora pelo chef.",
    preco: 60,
    imagem:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
  },
];

export default function Cardapio() {
  const adicionarCarrinho = (prato) => {
    const carrinho =
      JSON.parse(localStorage.getItem("carrinho")) || [];

    carrinho.push(prato);

    localStorage.setItem(
      "carrinho",
      JSON.stringify(carrinho)
    );

    window.dispatchEvent(new Event("storage"));

    alert(`${prato.nome} adicionado ao carrinho!`);
  };

  return (
    <div className="pagina">
      <h1 className="titulo">🍽 Restaurante Gourmet</h1>

      <div className="grid">
        {pratos.map((prato) => (
          <div className="card" key={prato.id}>
            <img
              src={prato.imagem}
              alt={prato.nome}
              className="imagem"
            />

            <div className="conteudo">
              <h2>{prato.nome}</h2>

              <p className="descricao">
                {prato.descricao}
              </p>

              <p className="preco">
                R$ {prato.preco},00
              </p>

              <button
                className="botao"
                onClick={() =>
                  adicionarCarrinho(prato)
                }
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}