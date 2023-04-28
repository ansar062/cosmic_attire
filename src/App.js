import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from "./pages/Home/home";
import Products from "./pages/Products/products";
import Product from "./pages/Product/product";
import Navbar from "./component/Navbar/navbar";
import Footer from "./component/Footer/footer";
import "./app.scss"
import AllRight from "./component/Footer/allrights";
import AboutUs from "./pages/Aboutus/aboutus";
import OrderDetails from "./pages/orderdetails/orderdetails";
import FAQ from "./pages/FAQ/faq";
import ContactUS from "./pages/ContactUs/contactus";

const Layout = () =>{
  return (
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
      <AllRight/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/products/:id",
        element: <Products />
      },
      {
        path:"/product/:id",
        element: <Product/>
      },
      {
        path:"/aboutus",
        element: <AboutUs/>
      },
      {
        path:"/orderdetails",
        element: <OrderDetails/>
      },
      {
        path:"/contactus",
        element: <ContactUS/>
      }
    ]
  },
])

function App() {
  return (
    <div>
      <RouterProvider router = {router}/> 
    </div>
  );
}

export default App;
