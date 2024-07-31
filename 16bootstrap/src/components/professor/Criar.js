import "../css/crud.css"

import { useState } from "react"

const Criar = () => {
    
    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [titulacao, setTitulacao] = useState("")
    const [ai, setAi] = useState({"es":false, "si":false, "lc":false, "mc":false})
    const handleInputNome = (event) => {
        setNome(event.target.value)
    }

    const handleCheckboxAi = (event) => {
        setAi(
            {
                es:event.target.checked
            }
        )
    }

    const handleInputCurso = (event) => {
        setCurso(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        alert("Nome: " + nome + "\n Curso: " + curso)
    }
    
    return (
        <div>
            <h1>Criar Professor</h1>
            <h4>JSON</h4>
            <form className="form-content" onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label className="form-label" htmlFor="inputNome">Nome</label>
                    <input
                        className="form-control"
                        type="text"
                        name="nome" 
                        id="inputNome"
                        onChange={handleInputNome}
                    />
                </div>
                
                <div className="mb-3">
                    <label className="form-label" htmlFor="inputCurso">Curso</label>
                    <input
                        className="form-control"
                        type="text"
                        name="curso"
                        id="inputCurso"
                        onChange={handleInputCurso} 
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="selectTitulacao">Titulação</label> 
                    <select
                        className="form-select"
                        value={titulacao}
                        id="selectTitulacao"
                    >
                        <option value="GRADUACAO">GRADUAÇÃO</option>
                        <option value="MESTRADO">MESTRADO</option>
                        <option value="DOUTORADO">DOUTORADO</option>
                    </select>
                </div>
                
                <div>
                    <div className = "form-check">
                        <input
                            id = "idEs"
                            type = "checkbox"
                            className = "form-check-input"
                            checked = {ai.es}
                            onChange={handleCheckbox}
                            
                        />
                        <label
                            htmlFor = "idEs"
                            className = "form-check-label"
                        > Engenharia de Software</label>
                    </div>
                </div>

                <div className="div-button-submit">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{marginLeft:0}}
                    >
                        Submeter
                    </button>
                </div>

            </form>
        </div>
        
    )
}

export default Criar