import Superman from './assets/superman.png';
import Batman from './assets/batman.png';
import './style.css';

const Hero = ({name, img}) => {
    return(
        <div>
            <h3>{name}</h3>
            <img src={img} alt="imagem de Heroi"/>
        </div>
    );
}

const Enemy = ({name, img}) => {
    return(
        <div>
            <h3>{name}</h3>
            <img src={img} alt="imagem de inimigo"/>
        </div>
    );
}

export const Arena = () => {
    return(
        <div>
            <Hero name="Superman" img={Superman}/>
            <br/>
            <Enemy name="Batman" img={Batman}/>
            <br/>
        </div>
    );
}

export const World = ({children}) => {
    return(
        <>{children}</>
    );
}