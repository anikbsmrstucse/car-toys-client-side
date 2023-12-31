import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Addatoy from "../Pages/Addatoy/Addatoy";
import AllToys from "../Pages/AllToys/AllToys";
import SingleToy from "../Pages/AllToys/SingleToy/SingleToy";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyToy from "../Pages/MyToy/MyToy";
import Register from "../Register/Register";
import PrivateRoute from "./PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'register',
            element:<Register></Register>
        },
        {
            path:'alltoys',
            element:<AllToys></AllToys>
        },
        {
            path:'toy/:id',
            element:<PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
            loader:({params})=>fetch(`https://toy-cars-assignment-11-server.vercel.app/cars/toy/${params.id}`),
        },
        {
            path:'addatoy',
            element:<PrivateRoute><Addatoy></Addatoy></PrivateRoute>
        },
        {
            path:"mytoy",
            element:<PrivateRoute><MyToy></MyToy></PrivateRoute>
        },
        {
            path:'blog',
            element:<Blog></Blog>
        }
      ]
    },
  ]);

  export default router;