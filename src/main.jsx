import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Product from './pages/Product.jsx';
import Singleproduct from './pages/Singleproduct.jsx';
import NotFound from './pages/Notfound.jsx';


const router = createBrowserRouter([{
  path : "/",
  element : <App/>,
  children:[
    {
    path :"",
    element:<Home/>
  },
    {
    path :"about",
    element:<About/>
  },
    {
    path :"product",
    element:<Product/>
  },
    {
    path :"singleproduct/:id",
    element:<Singleproduct/>
  },
    {
    path :"*",
    element:<NotFound/>
  },
]

}])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>

  </RouterProvider>
  
)