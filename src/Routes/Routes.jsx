import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/SignUp";
import BookService from "../pages/BookService/BookService";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main> ,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
            path: 'login', 
            element: <Login></Login>
        }, 
        {
            path: 'signup', 
            element: <SignUp></SignUp>
        },
        // {
        //   path: 'checkout/:id', 
        //   element:<CheckOut></CheckOut>,
        //   loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        // },
        {
          path: 'book/:id', 
          element: <BookService></BookService>, 
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        // {
        //   path: 'bookings', 
        //   element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
        // }
      ]
    },
  ]);

export default router;