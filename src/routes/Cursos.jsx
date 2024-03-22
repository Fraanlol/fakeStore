import Navbar from '../components/navbar';
import Catalog from '../components/catalog'
import Footer from '../components/footer'
import { ScrollRestoration } from "react-router-dom";


export default function Cursos() {
    return (
      <>
         <Navbar/>
        <Catalog/>
         <Footer/>
      <ScrollRestoration />
      </>
    )
  }
  
