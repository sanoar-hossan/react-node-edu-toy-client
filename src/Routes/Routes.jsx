import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/Blog";
import Addtoy from "../Pages/Addtoy/Addtoy";
import Errorpage from "../Layout/Errorpage";
import Alltoy from "../Pages/Alltoy/Alltoy";
import Mytoy from "../Pages/My toy/Mytoy";
import ToyDetailsPage from "../Pages/Alltoy/ToyDetailsPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Errorpage></Errorpage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,        
        },
        {
          path: 'login',
          element: <Login></Login>,
        },
        {
          path: 'register',
          element: <Register></Register>,
        },
        {
          path: 'blog',
          element: <Blog></Blog>,
        },
        {
          path: 'addtoy',
          element: <Addtoy></Addtoy>,
        },
        {
          path: 'alltoy',
          element: <Alltoy></Alltoy>,
        },
        {
          path: '/alltoy/:id',
          element: <ToyDetailsPage></ToyDetailsPage>
        },
        
        {
          path: 'mytoy',
          element: <Mytoy></Mytoy>,
        },
      ]
      
    },
  ]);

  export default router;