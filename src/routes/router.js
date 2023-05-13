import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Menu from "../pages/Menu/Menu";
import Register from "../pages/Login/Register";
import ProtectRoute from "./ProtectRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: '/menu',
                element:
                    <ProtectRoute>
                        <Menu />
                    </ProtectRoute>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    }
]);

export default router;

