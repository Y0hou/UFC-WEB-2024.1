import Pai from './components/questao01/01Pai';
import * as PC from './components/02MeuPC';
import { Arena, World } from './components/03BatalhaV1';
import { Arena as Arena2, World as World2, Hero, Enemy } from './components/03BatalhaV2';
import Batman from './components/assets/batman.png'
import Superman from './components/assets/superman.png'

function App() {
  return (
    <div className='Atividade 01'>
      <Pai/>
      <br/>
      <PC.PlacaMae nome="Gigabyte" preco="R$499,99"/>
      <PC.Memoria nome="16 gb Ram Kingston" preco="R$299,00"/>
      <PC.PlacaDeVideo nome="RTX 3060" preco="R$2599,00"/>
      <br/>
      <World>
        <Arena/>
      </World>

      <World2>
        <Arena2 arena={1}>
          <Hero name="Superman" img={Superman}/>
          <Enemy name="Batman" img={Batman}/>
        </Arena2>

        <Arena2 arena={2}>
        <Hero name="Superman" img={Superman}/>
          <Enemy name="Batman" img={Batman}/>
        </Arena2>

        <Arena2 arena={3}>
        <Hero name="Superman" img={Superman}/>
          <Enemy name="Batman" img={Batman}/>
        </Arena2>
      </World2>
      </div>
  );
}

export default App;