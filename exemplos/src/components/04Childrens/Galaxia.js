import SistemaSolar from "./SistemaSolar"
import Planeta from "./Planeta"

const Galaxia = ({ nome }) => {
    return (
        <div>
            <h1>Galaxia {nome}</h1>
            <SistemaSolar>
            <Planeta
                nome = "Mercúrio"
                tipo = "Rocha"
                ordem = "1"
            />
            <Planeta
                nome = "Vênus"
                tipo = "Rocha"
                ordem = "2"
            />
            <Planeta
                nome = "Terra"
                tipo = "Rocha"
                ordem = "3"
            />
            <Planeta
                nome = "Marte"
                tipo = "Rocha"
                ordem = "4"
            />
            <Planeta
                nome = "Júpiter"
                tipo = "Gasoso"
                ordem = "5"
            />
            <Planeta
                nome = "Saturno"
                tipo = "Gasoso"
                ordem = "6"
            />
            <Planeta
                nome = "Urano"
                tipo = "Gasoso"
                ordem = "7"
            />
            <Planeta
                nome = "Netuno"
                tipo = "Gasoso"
                ordem = "8"
            />
            </SistemaSolar>
        </div>
    )
}

export default Galaxia