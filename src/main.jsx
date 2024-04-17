import * as React from "react";
import "./i18n";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Tienda from './routes/tienda'
import Root from './routes/root'
import {CartProvider} from './context/cartContext'

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Root/>,
  },
  {
    path: "/tienda",
    element: <Tienda/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
    <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);