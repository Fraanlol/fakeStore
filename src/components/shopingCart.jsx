import { useCart } from "../context/cartContext";

export default function ShopCart() {
   const cartContext = useCart();
   function hide(){
      document.querySelector('#shopList').classList.toggle('showCarr')
   }

    return (
       <div id='shopList' className='z-[9999] fixed h-full transition flex flex-row duration-500 translate-x-full w-full'>
         <div onClick={hide} className='relative z-[99] w-full h-full right-0 opacity-85 grow'>

         </div>
         <div className='relative bg-white z-[99] w-full h-full right-0 max-w-xs md:max-w-xl'>
         <div className="fixed top-0 bg-white h-full w-full leading-5 right-0 text-sm max-w-xs md:max-w-xl flex flex-col py-5 md:py-10 transition-all duration-300 translate-x-0">
            <div className="px-7 md:px-16 mb-6 md:mb-9 flex justify-between items-start">
               <div>
                  <span className="font-bold text-2xl">Shopping Bag:</span>
               </div>
               <div>
                  <svg onClick={hide} className="cursor-pointer stroke-black hover:stroke-gray-400 transition-colors ease-in-out duration-200" width="30px" height="30px" viewBox="-0.5 0 25 25" xmlns="http://www.w3.org/2000/svg">
                     <path d="M3 21.32L21 3.32001" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                     <path d="M3 3.32001L21 21.32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
               </div>
            </div>
            <div className="px-7 md:px-16 grow overflow-hidden flex flex-col overflow-y-auto">
              { cartContext.items.map((k,i) => {
               return (
                  <div key={i} className="flex gap-4 md:gap-8 mb-10">
                     <img className="w-12 md:w-20 max-w-full h-20 object-contain" src={k.image} alt="" />
                     <div className="flex flex-col gap-y-3 md:gap-y-6">
                        <div className="items-start flex gap-x-4">
                           <p className="font-medium max-w-72">{k.title}</p>
                           <svg onClick={() => {cartContext.handleRemoveItemFromCart(k.id)}} width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
                              <path d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                           </svg>
                        </div>
                        <div className="flex justify-between items-end">
                           <p className="font-semibold text-xl">${k.price * k.quantity}</p>
                           <div className="flex gap-x-2 text-base font-semibold items-center">
                              <svg onClick={()=>{
                                  cartContext.handleAdjustItemQuantity(k.id,k.quantity,'decrement');
                              }} className="bg-slate-200 w-5 h-5 md:w-6 md:h-6 rounded-sm stroke-slate-600 flex justify-center items-center p-1 duration-150 transition-colors hover:bg-slate-300" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M6 12L18 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              <p>{k.quantity}</p>
                              <svg onClick={()=>{
                                  cartContext.handleAdjustItemQuantity(k.id,k.quantity,'increment');
                              }} className="bg-slate-200 w-5 h-5 md:w-6 md:h-6 rounded-sm stroke-slate-600 flex justify-center items-center p-1 duration-150 transition-colors hover:bg-slate-300" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M4 12H20M12 4V20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                           </div>
                        </div>
                     </div>
                  </div>
               )
              })}
            </div>
            <div className="border-t border-slate-300 pt-4 md:pt-6 px-7 md:px-16 text-black">
               <div className="text-sm md:text-base flex justify-between pb-3 md:pb-6 items-center">
                  <p className="font-medium text-lg">Total:</p>
                  <p className="font-bold">${cartContext.getSubtotal()}</p>
               </div>
               <div>
                  <button className="button-shop mb-3 w-full flex justify-center gap-x-2 hover:bg-[color:var(--color-1)]">
                     <span className="text-lg font-bold">BUY</span>
                  </button>
               </div>
            </div>
         </div>
         </div>
       </div>
    )
  }
  