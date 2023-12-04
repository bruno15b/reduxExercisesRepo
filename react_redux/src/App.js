import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { reduzir, incrementar } from "./store/contador";
import { abrir, fechar } from "./store/modal";

function App() {
  const { contador, modal } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(contador);
  return (
    <div className="App">
      <h1>modal: {modal.toString()}</h1>
      <h1>Total: {contador.total}</h1>
      <button onClick={() => dispatch(incrementar())}>Incrementar</button>
      <button onClick={() => dispatch(reduzir())}>Reduzir</button>
      <br />
      <button onClick={() => dispatch(abrir())}>Abrir</button>
      <button onClick={() => dispatch(fechar())}>Fechar</button>
    </div>
  );
}

export default App;
