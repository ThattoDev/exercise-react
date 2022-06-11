import "./App.css"
//import { useState } from 'react'
// import Listas from "./components/Listas";
// import Frutas from "./components/Frutas";
import Tarefas from "./components/Tarefas";
//import Cadastro from "./components/Cadastro";
//import img from "./assets/img.jpg"



const App = () => {
  // const [condicao, setCondicao] = useState(true);

  // const render1 = () => {
  //   return <h1>Função de Render</h1>
  // }

  return (
    <div className="App">
      {/* <Cadastro /> */}
      {/* <img src="imgPublic.jpg" alt="Descrição da Imagem" width={300}/>
      <br />
      <img src={img} alt="Descrição da Imagem" width={300}/> */}
      {/* {condicao && <h1>APARECI POIS A CONDIÇÃO ERA VERDADEIRA</h1> } */}

      {/* {condicao ? <h1>Condicação Verdadeira</h1> : <h1>Condição Falsa</h1>} */}

      {/* {render1()} */}
      <listTarefa/>
      {/* <Listas/> */}
      {/* <Frutas/> */}
    </div>
  );
}

export default App;
