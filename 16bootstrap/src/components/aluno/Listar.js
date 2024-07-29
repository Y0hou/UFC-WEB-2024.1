import alunos from "../data/db_aluno";
import "../css/crud.css"

const Listar = () => {
  const renderizarAlunos = () => {
    const vetorResultado = alunos.map(
        (aluno) => {
            return (
                <tr>
                    <th scope="row">{aluno.id}</th>
                    <td>{aluno.nome}</td>
                    <td>{aluno.curso}</td>
                    <td>{aluno.ira}</td>
                    <td>
                        <div>
                            <button type="button" className="btn btn-secondary">Editar</button>
                            <button type="button" className="btn btn-danger">Apagar</button>
                        </div>
                    </td>
                </tr>
            )
        }
    )
    return vetorResultado;
  };

  return (
    <div className="page-content">
      <h1>Listar aluno</h1>
      <div className="table-content">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Curso</th>
              <th scope="col">Ira</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {renderizarAlunos()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Listar;