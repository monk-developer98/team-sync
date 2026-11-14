import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../../features/auth/ui/pages/Login";
import Register from "../../features/auth/ui/pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../../features/dashboard/ui/pages/Home";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { currentLoggedEmployee } from "../../features/auth/state/auth/authAction";
import PublicRoutes from "../protectedRoutes/PublicRoutes";
import ProtectedRoutes from "../protectedRoutes/ProtectedRoutes";

const Approutes = () => {
    
    let dispatch = useDispatch();

    useEffect(()=>{
        (()=>{
            dispatch(currentLoggedEmployee())
        })();
    },[]);
    let router = createBrowserRouter([
        {
            path:'/',
            element:<PublicRoutes/>,
            children:[
                {
                    element:<AuthLayout/>,
                    children:[
                        {
                            path:"",
                            element: < Login />
                        },
                        {
                            path:'register',
                            element: <Register/>
                        }
                    ]
                }
            ]
        },
        {
            path:'/home',
            element: <ProtectedRoutes />,
            children:[
                {
                    element:<DashboardLayout />,
                    children:[
                        {
                            path: "",
                            element: <Home/>
                        }
                    ]
                }
            ]
        }
    ])
    return <RouterProvider router={router}/>
}

export default Approutes