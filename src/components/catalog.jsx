export default function Catalog() {
    let data = [
        {
            'name':'Advanced marketing techniques',
            'price':'$299.99',
            'img':'./shop-1.jpg'
        },
        {
            'name':'Marketing for beginners',
            'price':'$99.99',
            'img':'./shop-2.jpg'
        },
        {
            'name':'Your first store',
            'price':'$89.90',
            'img':'./shop-3.jpg'
        },
        {
            'name':'Finding suppliers',
            'price':'$249.99',
            'img':'./shop-4.jpg'
        },
        {
            'name':'Choosing products',
            'price':'$49.99',
            'img':'./hero-2.jpg'
        },
        {
            'name':'SEO tools',
            'price':'$149.99',
            'img':'./services-2.jpg'
        }
    ]
    return (
       <section className="">
        <div className="flex flex-col items-center">
            <div className="py-20 bg-[color:var(--color-2)] text-white w-full h-full">
                <p className="text-4xl font-bold copy-shop review-title text-center">Invest in your business</p>
            </div>
            <section className="w-full section-shop py-20">
            <div className="flex justify-center m-auto flex-wrap items-center max-w-7xl flex-auto">
                {data.map((data,i) => {
                    return(
                        <div className="m-4" key={i}>
                            <img className="catalog-pic" src={data.img} alt="" />
                            <p className="my-4 text-2xl">{data.name}</p>
                            <p className="text-xl">{data.price}</p>
                        </div>
                    )
                })}
            </div>
            </section>
        </div>
       </section>
    )
  }
  