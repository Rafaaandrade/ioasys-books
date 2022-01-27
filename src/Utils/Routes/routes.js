import BookList from "../../Components/BookList";
import Home from "../../Components/Home";

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/books',
        exact: true,
        component: BookList
    }

];

export default routes;