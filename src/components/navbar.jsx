import { Player } from '@lottiefiles/react-lottie-player';
import AionData from '../assets/icons8-menu.json'
import { useRef, useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useScrollDirection } from "./hooks/useScrollDirection";
import SvgIcon from '@mui/material/SvgIcon';
export default function Navbar() {
    const playerRef = useRef(null);
    const scrollWatcher = useRef(null);
    const [scrollDirection, setScrollDirection] = useState(null);
    const [isAtTop, setIsAtTop] = useState(true);
    const scrollDir = useScrollDirection();

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
        "bg-white/30 text-black stroke-black backdrop-blur-xl h-16 border-white/30";
      if (scrollDir === "down") styles.header += " -translate-y-full";
    }


    function addEvent(){
      document.getElementById('lottie').addEventListener('click', e => {
        if(playerRef.current.state.instance.isPaused == true){
          playerRef.current.play();
          document.querySelector('.navWrapper').classList.toggle('show');
          document.querySelector('.logoContainer').classList.toggle('no-title');
        }
      })
    }
    function enableScroll(){
      document.body.classList.toggle('no-scroll');
    }

    return (
      <>
       <div ref={scrollWatcher}  className="h-20 w-full absolute"></div>
        <header className={`navWrapper sticky top-0 z-50 w-full flex items-center justify-between py-3 px-3 lg:px-8 transition-all duration-200 border-b ${styles.header}`}>
          <div className="logoContainer flex-1 text-3xl lg:text-2xl font-medium text-center flex flex-row justify-start justify-center items-center">
            <p className='cursor-pointer'>Store</p>
          </div>
          <nav className="flex-1 text-md font-light ml-1 ml-12 desktop-nav">
            <ul className="flex flex-row justify-center">
              <li className='mx-6 hover:shadow-buttons border-yellow-600 cursor-pointer'><NavLink to="/#">Home</NavLink></li>
              <li className='mx-6 hover:shadow-buttons border-yellow-600 cursor-pointer'><NavLink to="/tienda">Shop</NavLink></li>
              <li className="mx-6 hover:shadow-buttons border-yellow-600 cursor-pointer">
                <div className="content flex items-center w-fit rounded-md flex flex-row justify-center items-center">
                  <a className='pr-2 font-medium'>
                    <SvgIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                   </SvgIcon>
                  </a>
                  (0)
                </div>
              </li>
            </ul>
          </nav>
          <nav className="flex-1 text-xl font-thin hidden mobile-nav flex justify-end items-center z-50">
            <div className="content flex items-center w-fit rounded-md flex flex-row justify-center items-center">
                    <a className='pr-2 font-medium'>
                      <ShoppingBagOutlinedIcon fontSize="large" viewBox='0 0 24 24' strokeWidth='.1'/>
                    </a>
            </div>
            <Player speed={3} onEvent={event => {
            if (event === 'load'){
              addEvent(); 
            }
            if (event == 'frame' && playerRef.current.state.instance.isPaused !== true){
              if(playerRef.current.state.seeker >= 65 && playerRef.current.state.seeker <= 70){
                playerRef.current.pause();
                playerRef.current.setSeeker(71);
              }
            }
          }} src={AionData} ref={playerRef}  style={{ height: '30px', width: '30px' }} className='z-50 relative'>
          </Player>
            <ul id='bgmenu' className="flex text-3xl font-medium flex-col absolute top-0 right-0 bg-navbur bg-opacity-100 pt-32 pl-10 md:pl-20 w-full h-100 justify-start items-start">
              <li className='py-6 cursor-pointer'><NavLink onClick={enableScroll} to="/#">Home</NavLink></li>
              <li className='py-6 cursor-pointer'><NavLink onClick={enableScroll} to="/tienda">Shop</NavLink></li>
            </ul>
          </nav>
        </header>
      </>
    )
  }
  