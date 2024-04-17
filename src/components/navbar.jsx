import { useRef, useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { useScrollDirection } from "./hooks/useScrollDirection";
import SvgIcon from '@mui/material/SvgIcon';
import { LANGUAGES } from "../constants";
import { useTranslation } from "react-i18next";
import { useCart } from "../context/cartContext";


export default function Navbar() {
    const cartContext = useCart()
    const playerRef = useRef(null);
    const scrollWatcher = useRef(null);
    const [scrollDirection, setScrollDirection] = useState(null);
    const [isAtTop, setIsAtTop] = useState(true);
    const scrollDir = useScrollDirection();

    function showChart(){
      document.querySelector('#shopList').classList.toggle('showCarr')
    }
    

    const { i18n, t } = useTranslation();
    const onChangeLang = (e) => {
        const lang_code = e.target.value;
        i18n.changeLanguage(lang_code);
      };

    useEffect(() => {
      const watcher = scrollWatcher.current;
      const observer = new IntersectionObserver((entries) => {
        const headerEntry = entries[0];
        if (headerEntry.isIntersecting) {
          setIsAtTop(true);
        } else {
          setIsAtTop(false);
        }
      });
      observer.observe(watcher);
  
      return () => {
        observer.disconnect();
      };
    });

    const styles = {
      header: "",
      searchInput: "w-full bg-white/40 border border-zinc-400 py-2 px-3 rounded pr-12",
    };

    if (isAtTop) {
      styles.header = "border-transparent relative h-20";
      styles.header += " stroke-black";
      styles.searchInput += " placeholder:text-zinc-400";
    } else {
      styles.searchInput += " placeholder:text-zinc-400";
      styles.header =
        "bg-white/80 text-black stroke-black backdrop-blur-xl h-16 border-white/30";
      if (scrollDir === "down") styles.header += " -translate-y-full";
    }

    return (
      <>
       <div ref={scrollWatcher}  className="h-20 w-full absolute"></div>
        <header className={`navWrapper sticky top-0 z-50 w-full flex items-center justify-between py-3 px-3 lg:px-8 transition-all duration-200 border-b ${styles.header}`}>
          <nav className="flex-1 text-md font-light ml-1 ml-12 desktop-nav">
            <div className='absolute top-5'>
              <img src="./logo.png" alt="" width={250} height={250}/>
            </div>
            <ul className="flex flex-row justify-center">
              <li className='mx-6 hover:shadow-buttons border-yellow-600 cursor-pointer'><NavLink to="/#">{t("home")}</NavLink></li>
              <li className='mx-6 hover:shadow-buttons border-yellow-600 cursor-pointer'><NavLink to="/tienda">{t("shop")}</NavLink></li>
              <li className="mx-6 hover:shadow-buttons border-yellow-600 cursor-pointer">
                <div className="content flex items-center w-fit rounded-md flex-row justify-center">
                <div className='pr-2 font-medium' onClick={showChart}>
                  <img src="./shop.svg" alt="" width={35} height={35}/>
                </div>
                  {cartContext.isCartActive && <span>({cartContext.items.length})</span>}
                </div>
              </li>
            </ul>
          </nav>
          <nav className="flex-1 text-xl font-thin hidden mobile-nav flex justify-center items-center z-50">
            <div>
              <img src="./menu.svg" alt="" width={25} height={25}/>
            </div>
            <div className="logoContainer flex-1 text-3xl lg:text-2xl font-medium text-center flex flex-row justify-start justify-center items-center">
              <img src="logo.png" alt=""/>
            </div>
            <div className="content w-fit rounded-md flex flex-row justify-center items-center">
                <a className='pr-2 font-medium' onClick={showChart}>
                  <img src="./shop.svg" alt="" width={35} height={35}/>
                </a>
            </div>
          </nav>
        </header>
        <div className='absolute w-screen h-screen bg-[color:var(--color-nav)] top-0 right-0 z-50 hidden'>
          <div className='w-4/5 h-screen right-0 absolute bg-white'>
            <div className='w-full flex justify-center items-center'>
            <div className='pb-2 border-b-2 w-fit border-gray-400 m-4'>
                <div className='flex justify-start bg-white w-fit p-2 border-gray-400 border'>
                  <input type="text" placeholder='Search for products...' />
                  <img src="/Search.svg" alt="" />
                </div>
              </div>
            </div>
              <ul className='list-none ml-4 text-xl'>
                <li className='py-2 border-b-2'>Home</li>
                <li className='py-2 border-b-2 flex items-center justify-between'>Shop <img className="pr-10" src="arrowDown.svg" alt="" /></li>
                <ul className='hidden'>
                  <li className='py-2 pl-8 border-b-2'>Accessories</li>
                  <li className='py-2 pl-8 border-b-2'>Hoodies</li>
                  <li className='py-2 pl-8 border-b-2'>Jackets</li>
                  <li className='py-2 pl-8 border-b-2'>Shirts</li>
                </ul>
              </ul>
          </div>
        </div>
      </>
    )
  }
  