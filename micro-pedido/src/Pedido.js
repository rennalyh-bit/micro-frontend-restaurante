import React, { useEffect, useState } from "react";
import "./styles.css";

export default function Pedido() {
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    carregarCarrinho();

    window.addEventListener("storage", carregarCarrinho);

    return () => {
      window.removeEventListener(
        "storage",
        carregarCarrinho
      );
    };
  }, []);

  const carregarCarrinho = () => {
    const itens =
      JSON.parse(localStorage.getItem("carrinho")) || [];

    setCarrinho(itens);
  };

  const removerItem = (index) => {
    const novoCarrinho = [...carrinho];

    novoCarrinho.splice(index, 1);

    localStorage.setItem(
      "carrinho",
      JSON.stringify(novoCarrinho)
    );

    setCarrinho(novoCarrinho);
  };

  const total = carrinho.reduce(
    (acc, item) => acc + item.preco,
    0
  );

  return (
    <div className="pedido">
      <h1>🛒 Meu Pedido</h1>

      {carrinho.length === 0 ? (
        <p>Carrinho vazio.</p>
      ) : (
        <>
          {carrinho.map((item, index) => (
            <div className="item" key={index}>
              <img
                src={item.imagem}
                alt={item.nome}
                className="mini-img"
              />

              <div>
                <h3>{item.nome}</h3>
                <p>R$ {item.preco},00</p>
              </div>

              <button
                className="remover"
                onClick={() =>
                  removerItem(index)
                }
              >
                Remover
              </button>
            </div>
          ))}

          <h2 className="total">
            Total: R$ {total},00
          </h2>
        </>
      )}
    </div>
  );
}