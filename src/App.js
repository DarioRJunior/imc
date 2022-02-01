import { useState } from 'react';
import './app.css';

export default function App(){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const [mensagem, setMensagem] = useState('');

  function calcularIMC(){
   const alt = altura / 100;
   const imc = peso / (alt * alt);
   
   if (imc < 18.6){
     setMensagem("Você está abaixo do peso! seu IMC: " + imc.toFixed(2))
   }else if (imc >= 18.6 && imc < 24.9) {
    setMensagem("Você está no peso ideal! seu IMC: " + imc.toFixed(2))
   }else if(imc >= 25 && imc < 29.5){
    setMensagem("Você está levemente acima do peso! seu IMC: " + imc.toFixed(2))
   }else if (imc >= 29.6 && imc < 34.9){
    setMensagem("Cuidado Obesidade Grau 1!: " + imc.toFixed(2))
   }else if (imc >= 35 && imc < 39.9){
    setMensagem("Cuidado Obesidade Grau 2!: " + imc.toFixed(2))
  }else if (imc >= 40){
    setMensagem("Cuidado Obesidade Grau 3!: " + imc.toFixed(2))
  }
}

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc</span>

      <div className="area-input">
        <input type="text" placeholder="Peso em (Kg) Ex: 90" value={peso} onChange={(e) => setPeso(e.target.value)}></input>
        <input type="text" placeholder="Altura em (cm) Ex: 180" value={altura} onChange={(e) => setAltura(e.target.value)}></input>

        <button onClick={calcularIMC}>
          Calcular
        </button>
      </div>
      <h2>{mensagem}</h2>
    </div>
  )
}