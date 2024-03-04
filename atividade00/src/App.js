//import MeusDados from "./components/01MeusDados";

/*export default function App() {
  return (
    <div className="App">
      <h1>Desenvolvimento Web</h1>
      <MeusDados />
    </div>
  );
}*/

/*import MeusDados2 from "./components/02MeusDados";

export default function App() {
  return(
    <div className="App">
        <MeusDados2
          nome="Nícolas Martins de Sousa"
          curso="Sistemas de informação"
          universidade="Universidade Federal do Ceará"
        />
    </div>
  )
}*/

import MeusDados from "./components/01MeusDados";
import MeusDados2 from "./components/02MeusDados";
import Temperatura from "./components/03Temperatura";

export default function App() {
  return (
    <div className="App">
      <h1>Desenvolvimento Web</h1>
      <MeusDados />
      <hr />
      <MeusDados2
          nome="Nícolas Martins de Sousa"
          curso="Sistemas de informação"
          universidade="Universidade Federal do Ceará"
        />
      <hr />
      <Temperatura />
    </div>
  );
}