import Navbar from '../components/navbar';
import ContactSheet from '../components/sheet';
import Footer from '../components/footer'
import { ScrollRestoration } from "react-router-dom";


export default function Contact() {
    return (
      <>
         <Navbar/>
         <ContactSheet/>
         <Footer/>
      <ScrollRestoration />
      </>
    )
  }
  
