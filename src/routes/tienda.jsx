import Navbar from '../components/navbar';
import Ribbon from '../components/ribbon';
import Shop from '../components/shop'
import Footer from '../components/footer'
import ShoppingCart from '../components/shopingCart'

import { ScrollRestoration } from "react-router-dom";


export default function Tienda(props) {

    return (
      <>
        <ShoppingCart/>
        <Ribbon/>
         <Navbar/>
          <Shop setter = {props.setCarrData} data = {props.carrData}/>
         <Footer/>
      <ScrollRestoration />
      </>
    )
  }
  
