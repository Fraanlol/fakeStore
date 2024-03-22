export default function Services() {
    return (
       <section className="z-20 relative bg-[color:var(--color-2)] text-white pt-16">
        <div className="flex items-center justify-center flex-col pb-16 px-16 mx-auto">
           <div className="mb-8 text-5xl font-bold leading-normal self-start">
            <h3 className="text-center">Services</h3>
           </div>
           <div className="flex flex-row services-container gap-x-16">
            <div>
                <img className="services-pic" src="/services-1.jpg" alt="" />
                <p className="text-2xl mt-4 mb-4">Consulting</p>
            </div>
            <div>
                <img className="services-pic" src="/services-2.jpg" alt="" />
                <p className="text-2xl mt-4 mb-4">Positioning</p>
            </div>
            <div>
                <img className="services-pic" src="/services-3.jpg" alt="" />
                <p className="text-2xl mt-4 mb-4">Sales</p>
            </div>
           </div>
        </div>
       </section>
    )
  }
  