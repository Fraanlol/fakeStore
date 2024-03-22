import { NavLink } from "react-router-dom";

export default function Hero() {
    return (
       <section className="mb-16 relative">
        <div className="block-background">
            <div className="hero-image block_background_image block_background_image_fixed">
                <img className="w-screen h-screen" src="./hero-1.png" alt="" />
            </div>
            <div className="block_background_overlay block_background_image_fixed">

            </div>
        </div>
        <div className="flex flex-row items-center justify-center section-hero text-white z-20 hero-img">
            <div className="hero-mainContent flex flex-row justify-center items-center flex-wrap flex-auto z-20 gap-x-16 gap-y-8">
                <div className="font-bold text-center leading-snug text-justify">
                    <h1><span className="mobile-color text-justify">Boost</span> your<br/>business.</h1> 
                </div>
                <div className="hero-copy-mobile flex flex-col justify-start align-start">
                    <div>
                        <p className="text-center text-xl">Drive e-commerce success with expert guidance.</p>
                    </div>
                    <div className="w-fit">
                        <NavLink to="/contact" className="hero-cta">Sell</NavLink>
                    </div>
                </div>
            </div>
        </div>
       </section>
    )
  }
  