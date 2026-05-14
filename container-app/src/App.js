import React, { Suspense, lazy } from "react";

const Cardapio = lazy(() =>
  import("microCardapio/Cardapio")
);

const Pedido = lazy(() =>
  import("microPedido/Pedido")
);

export default function App() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
        padding: "20px",
      }}
    >
      <Suspense fallback={<h1>Carregando...</h1>}>
        <Cardapio />
      </Suspense>

      <Suspense fallback={<h1>Carregando...</h1>}>
        <Pedido />
      </Suspense>
    </div>
  );
}