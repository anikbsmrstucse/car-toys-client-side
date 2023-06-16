import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import AllToys from "../Pages/AllToys/AllToys";
import SingleToy from "../Pages/AllToys/SingleToy/SingleToy";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
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
            loader:({params})=>fetch(`http://localhost:5000/cars/toy/${params.id}`),
        }
      ]
    },
  ]);

  export default router;