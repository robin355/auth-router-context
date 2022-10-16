import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Main';
import PrivateRoute from '../../Route/PrivateRoute';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Order from '../Order/Order';
import Register from '../Register/Register';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>

            },
            {
                path: '/order',
                element: <PrivateRoute><Order></Order></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])