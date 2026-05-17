import React from "react";

const Cardapio = React.lazy(() =>
  import("microCardapio/Cardapio")
);

const Pedido = React.lazy(() =>
  import("microPedido/Pedido")
);

export default function App() {
  return (
    <div className="container">
      <React.Suspense fallback="Carregando...">
        <div className="micro">
          <Cardapio />
        </div>

        <div className="micro">
          <Pedido />
        </div>
      </React.Suspense>
    </div>
  );
}