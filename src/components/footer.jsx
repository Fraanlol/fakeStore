export default function Footer() {
    return (
       <section className="mb-20 footer pt-8 z-20 absolute bg-[color:var(--color-1)] w-full pb-16">
            <div className="flex justify-center items-center footer my-16">
                <div className="mr-36px">
                    <p className="text-2xl mb-4 font-bold">Receive our latest news</p>
                    <div className="flex justify-center items-start flex-col">
                        <p>Mail</p>
                        <input className="footer-contact" type="mail" name="" id="" placeholder="Dirección de correo" />
                        <button className="footer-cta" disabled>Send</button>
                    </div>
                </div>
                <div className=" mx-24">
                    <p className="text-2xl font-bold">Contact us</p>
                    <p>ocsonbrand@gmail.com</p>
                </div>
                <div>
                    <p className="text-2xl font-bold">Social</p>
                    <p>Soon</p>
                </div>
            </div>
            <p class="text-center text-gray-500 text-xs">
                &copy;2023 Ocson LLC. All rights reserved.
            </p>
       </section>
    )
  }