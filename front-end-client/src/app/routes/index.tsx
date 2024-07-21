import { createBrowserRouter } from "react-router-dom";
import { Dashboard, Login,Marcacao,Cadastros } from "../pages";
import { TelaUsuarioLogado,TelaUsuarioNaoLogado } from "../shared/hooks/useRotas";

const router = createBrowserRouter([
    {
      path: "/",
      element: <TelaUsuarioLogado element={<Dashboard></Dashboard>}></TelaUsuarioLogado>,
      children: [
        {
          path: "/",
          element: <TelaUsuarioLogado element={<Marcacao></Marcacao>}></TelaUsuarioLogado>,
        },
        {
          path:"/cadastros",
          element:<TelaUsuarioLogado element={<Cadastros></Cadastros>}></TelaUsuarioLogado>
        }
      ],
    },
    {
      path:"/Login",
      element:<TelaUsuarioNaoLogado element={<Login></Login>}></TelaUsuarioNaoLogado>
    }
]);

export default router;