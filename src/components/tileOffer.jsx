export default function TileOffer() {
    return (
       <div className="mb-24">
        <div className="flex justify-center items-center flex-col mb-16">
            <p className="text-xl text-gray-400 mb-4">Get now your favorite clothes</p>
            <p className="text-4xl">Up to 50% <br/><span className="font-bold text-4xl">discount</span></p>
            <img src="./DoubleDown.svg" alt="" />
        </div>
        <div>
            <div className="flex items-center justify-around flex-row lg:justify-center lg:gap-40 mb-8">
                <div className="flex items-center justify-center flex-col">
                    <img className="mb-4 cartImg" src="product_1.jpg" alt="" width={100} />
                    <p className="text-xl">Jackets</p>
                </div>
                <div className="flex items-center justify-center flex-col">
                    <img className="mb-4 cartImg" src="product_2.jpg" alt="" width={70} />
                    <p className="text-xl">Accessories</p>
                </div>
            </div>
            <div className="flex items-center justify-around flex-row lg:justify-center lg:gap-40">
                <div className="flex items-center justify-center flex-col">
                    <img className="mb-4 cartImg" src="product_3.jpg" alt="" width={100} />
                    <p className="text-xl">Shirts</p>
                </div>
                <div className="flex items-center justify-center flex-col">
                    <img className="mb-4 cartImg" src="product_4.jpg" alt="" width={100} />
                    <p className="text-xl">Hoodies</p>
                </div>
            </div>
        </div>
       </div>
    )
  }
  