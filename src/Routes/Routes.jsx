import { createBrowserRouter } from "react-router-dom";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/Common/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AllProducts from "../Pages/Products/AllProducts";
import Login from "../Pages/User/Login/Login";
import SignUp from "../Pages/User/SignUp/SignUp";
import Main from "../Roots/Main/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/Products',
                element: <AllProducts></AllProducts>,
                loader: () => fetch('http://localhost:5000/category')
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            }
        ]
    }
]);

export default router;