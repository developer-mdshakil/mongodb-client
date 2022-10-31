import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Profile from "../../Pages/Home/Profile/Profile";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Rgister/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('http://localhost:5000/users')
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: ()=> fetch('http://localhost:5000/users')
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/profile/:id',
                loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`),
                element: <Profile></Profile>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            }
        ]
    }
])