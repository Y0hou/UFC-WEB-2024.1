import Planeta from "./Planeta"
import React from "react"
const SistemaSolar = ({children, galaxia}) => {
    return (
        <> 
            <h2>Sistema Solar da Galaxia {galaxia}</h2>
            <hr/>
            {React.children.map(
                children,
                (elemento) => {
                    return React.cloneElement(elemento, {galaxia})
                }
            )}
        </>
    )
}

export default SistemaSolar