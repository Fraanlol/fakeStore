import { useEffect } from "react";

export default function Reviews() {

    useEffect(() => {
      const scrollers = document.querySelectorAll(".scroller");
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
      }
        function addAnimation() {
          scrollers.forEach((scroller) => {
            scroller.setAttribute("data-animated", true);
    
            const scrollerInner = scroller.querySelector(".scroller__inner");
            const scrollerContent = Array.from(scrollerInner.children);
    
            scrollerContent.forEach((item) => {
              const duplicatedItem = item.cloneNode(true);
              duplicatedItem.setAttribute("aria-hidden", true);
              scrollerInner.appendChild(duplicatedItem);
            });
          });
        }
        return function cleanup() {
          const scrollerInner = document.querySelector(".scroller__inner");
          let items = document.querySelectorAll('.f-itms[aria-hidden=true]');
          Array.from(items).forEach(k => {
            scrollerInner.removeChild(k)
          })
        };
    }, []);
    return (
      <div className="relative text-white bg-black scroller overflow-x-hidden">
        <div className="flex justify-center items-center py-4 font-thin animation-text w-max scroller__inner">
            <p className="font-['Montserrat'] text-3xl f-itms">SALE</p>
            <p className="font-['Montserrat'] text-3xl f-itms">SALE</p>
            <p className="font-['Montserrat'] text-3xl f-itms">SALE</p>
            <p className="font-['Montserrat'] text-3xl f-itms">SALE</p>
        </div>
      </div>
    )
  }
  