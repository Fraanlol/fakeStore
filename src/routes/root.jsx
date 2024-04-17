import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Ribbon from '../components/ribbon';
import TileFirst from '../components/tileFirst';
import TileOffer from '../components/tileOffer';
import About from '../components/about';
import Footer from '../components/footer';
import ScrollingText from '../components/scrollText';
import { ScrollRestoration } from "react-router-dom";
import ShoppingCart from '../components/shopingCart'



export default function Root(props) {
    return (
      <>
        <ShoppingCart/>
          <Ribbon/>
          <Navbar/>
          <Hero/>
          <ScrollingText/>
          <TileFirst/>
          <TileOffer/>
          <About/>
          <Footer/>
      <ScrollRestoration />
      </>
    )
  }
  
