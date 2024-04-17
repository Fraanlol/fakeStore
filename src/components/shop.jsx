import {useEffect, useState} from 'react'
import { useCart } from "../context/cartContext";

export default function Shop() {
    const cartContext = useCart();
    const [products, setProducts] = useState([]);
    const [categories, setCats] = useState([]);
    const [currentCat, setCurrentCat] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setCats(data);
          setCurrentCat(data[0])
        });
        
        return () => {
         
        };
      }, []);

      useEffect(() => {
        setIsLoading(true)
        let query = 'https://fakestoreapi.com/products/category/' + currentCat;
        fetch(query)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
            setProducts(data)
            setIsLoading(false)
        });
        
        return () => {
        
        };
      }, [currentCat]);

      const addItem = (data) => {
        if(!cartContext.isCartActive){
            cartContext.toggleIsCartActive();
        }
        cartContext.handleAddItemToCart(data);
      };
    return (
       <section className="mb-40">
        <div className="flex flex-col items-center" id="product-chart" >
            <div className="py-16 w-full bg-[color:var(--color-2)] text-white">
                <p className="text-4xl font-bold copy-shop text-center">Our products</p>
            </div>
            <section className="w-full py-20 flex flex-col items-start justify-center gap-8 lg:flex-row lg:items-start lg:justify-end px-8">
                <div className='lg:basis-80 pl-4 lg:pl-24 mb-16 lg:mb-0'>  
                    <p className='font-bold text-2xl mb-4'>Categories</p>
                    <ul className='flex flex-row flex-wrap lg:flex-col items-start justify-start text-xl'>
                        {categories.map((cat,i) => {
                            return(<li className='p-2' onClick={(e) => setCurrentCat(cat)} key={i}>{cat.slice(0,1).toUpperCase() + cat.slice(1)}</li>)
                        })}
                    </ul>
                </div>
                <div className="gridCart w-full  grid col-auto row-auto gap-x-4 grid-cols-3 max-w-7xl">
                    {products.map((product,i) => {
                        return(
                            <div className={`p-8 m-4  w-80 text-center ${isLoading ? 'opacity-50':''}`} key={i}>
                                <div className='flex flex-col items-center justify-end h-4/5'>
                                    <img className="catalog-pic" src={product.image} alt="" width={100} height={100} />
                                    <p className="my-4 text-xl">{product.title}</p>
                                    <p className="text-xl">{product.price}$</p>
                                </div>
                                <div>
                                    <span onClick={(e) => {addItem(product)}} className='pt-4 font-bold'><p className='w-fit m-auto cursor-pointer pt-4'>Add to cart</p></span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
       </section>
    )
  }
  