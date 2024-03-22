import Navbar from '../components/navbar';
import Hero from '../components/hero'
import About from '../components/about'
import Services from '../components/services'
import Reviews from '../components/reviews'
import { ScrollRestoration } from "react-router-dom"
import Info from '../components/info'
import Footer from '../components/footer'

export default function Root() {
    return (
      <>
         <Navbar/>
         <Hero />
         <Services/>
         <About/>
         <Reviews/>
         <Footer/>
      <ScrollRestoration />
      </>
    )
  }
  
