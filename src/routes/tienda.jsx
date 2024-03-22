import Navbar from '../components/navbar';
import Shop from '../components/shop'
import Footer from '../components/footer'
import { ScrollRestoration } from "react-router-dom";


export default function Tienda() {
    return (
      <>
         <Navbar/>
          <Shop/>
         <Footer/>
      <ScrollRestoration />
      </>
    )
  }
  
