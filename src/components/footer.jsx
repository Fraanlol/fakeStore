export default function Footer() {
    return (
      <div className="bg-[color:var(--color-1)] px-4 md:px-24 pt-8 2xl:px-60">
        <div className="mb-8">
            <p className="text-3xl font-bold pb-4">About</p>
            <p className="text-white">Our promise is to perform responsibly as a leading, global company. 
                Sign up for texts to be notified about our best offers on the most selling products.
            </p>
        </div>
        <div className="flex flex-row justify-start items-start gap-16 mb-16">
            <div>
                <p className="text-3xl pb-4 font-bold">Shop</p>
                <p className="text-white pb-4 cursor-pointer">Shirts</p>
                <p className="text-white pb-4 cursor-pointer">Jackets</p>
                <p className="text-white pb-4 cursor-pointer">Accessories</p>
                <p className="text-white pb-4 cursor-pointer">Hoodies</p>
            </div>
            <div>
                <p className="text-3xl pb-4 font-bold">Resources</p>
                <p className="text-white pb-4 cursor-pointer">GitHub</p>
                <p className="text-white pb-4 cursor-pointer">FakeStore API</p>
            </div>
        </div>
        <div>
            <p className="text-black font-sm font-bold text-center">© 2023 FakeShop Inc. All Rights Reserved.</p>
        </div>
      </div>
    )
  }