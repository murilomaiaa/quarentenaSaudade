import React from 'react';

function App() {
  const nome = 'Murilo'
  function gerarDias() {
    return Math.floor(Math.random() * 300 + 300)
  }
  return (
    <>
    <h1>
      {gerarDias()} dias de quarentena e {nome} não aguenta mais ficar em casa
    </h1>
    <p>
      Se voce eh como {nome} e não aguenta mais ficar em casa compartilhe com
      seus amigos e mostre que está com saudades
    </p>
    </>
  );
}

export default App;
