import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";

import Criar from "./professor/Criar";
import Listar from "./professor/Listar";
import Editar from "./professor/Editar";
import CriarAluno from "./aluno/Criar";
import ListarAluno from "./aluno/Listar";
import EditarAluno from "./aluno/Editar";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element: <Home />,
            children: [
                {
                    path:"professor/listar",
                    element:<Listar />
                },
                {
                    path:"professor/criar",
                    element:<Criar />
                },
                {
                    path:"professor/editar",
                    element:<Editar />
                },
                {
                    path:"aluno/listar",
                    element:<ListarAluno />
                },
                {
                    path:"aluno/criar",
                    element:<CriarAluno />
                },
                {
                    path:"aluno/editar",
                    element:<EditarAluno />
                }
            ]
        }
    ]

)

const Main = () => {
    return (
        <RouterProvider router={router}/>
    )
}
export default Main