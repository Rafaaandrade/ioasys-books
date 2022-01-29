import Home from "../../Pages/Home";
import Listagem from "../../Pages/Listagem";


const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/books',
        exact: true,
        component: Listagem
    }

];

export default routes;