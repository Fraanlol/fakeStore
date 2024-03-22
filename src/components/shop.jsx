import {useState} from 'react'

export default function Shop() {
    const [optionsData, setState] = useState([])
    let data = [
        {
            'name_en':'Acrylic Cutting Boards',
            'name_es':'Tablas para picar de Acrilico',
            'price':'$35.99',
            'img':'./acrilic.jpg',
        },
        {
            'name_en':'Beer Bottle Caps, 200 PCS',
            'name_es':'Tapas de cerveza 200 unidades',
            'price':'$19.99',
            'img':'./beer.jpg',
        },
        {
            'name_en':'Tape Measure for Body Measuring, 79Inch/2Meters',
            'name_es':'Cinta metrica corporal, 79Pul./2Mts.',
            'price':'$9.99',
            'img':'./tape.jpg',
            'variant':[{
                'color':'white',
                'code':'#ffffff',
                'img':'./tape.jpg',
                },
                {
                'color':'pink',
                'code':'#fadadd',
                'img':'./tape2.jpg',
                }],
        },
    ]
    function showModal(e) {
        document.getElementById('product-pic').src = this.img
        document.getElementById('product-title').textContent = this.name_en
        document.getElementById('product-description').textContent = this.price
        document.getElementById('productShow').style.display = 'block'
        document.getElementById('product-chart').style.display = 'none'
        setState(this.variant)
    }

    function hideModal(e){
        document.getElementById('productShow').style.display = 'none'
        document.getElementById('product-chart').style.display = 'flex'
    }

    function changeBackg(e){
        document.getElementById('product-pic').src = this.img
    }

    return (
       <section className="mb-40">
        <div className="flex flex-col items-center" id="product-chart" >
            <div className="py-16 w-full bg-[color:var(--color-2)] text-white">
                <p className="text-4xl font-bold copy-shop text-center">Our products</p>
            </div>
            <section className="w-full py-20">
            <div className="flex justify-center m-auto flex-wrap items-center max-w-7xl flex-auto">
                {data.map((data,i) => {
                    return(
                        <div className="m-4" key={i}>
                            <button onClick={showModal.bind(data)}>
                                <img className="catalog-pic" src={data.img} alt="" />
                            </button>
                            <p className="my-4 text-xl">{data.name_en}</p>
                            <p className="text-xl">{data.price}</p>
                        </div>
                    )
                })}
            </div>
            </section>
        </div>
        <section id="productShow" className="hidden bg-[color:var(--color-light)] w-full h-full">
            <div className="flex justify-center max-w-7xl flex-wrap items-center m-auto">
                    <div className="m-4 flex flex-row justify-center items-center flex-wrap gap-12">
                            {/* Left */}
                            <img id="product-pic" className="modal-img" alt="" />
                            {/* Right */}
                            <div className="flex flex-col justify-center align-center">
                                <p id="product-title" className="my-4 text-4xl font-bold"> </p>
                                <div className='flex flex-row gap-8'>
                                    <p id="product-description" className="text-xl mb-12"></p>
                                </div>
                                <div className="flex flex-row mb-12 border-collapse items-center gap-4">
                                    <div>
                                        <button className="px-6 py-4 border border-[color:var(--border-shop)]">-</button>
                                        <button className="px-6 py-4 border-y border-[color:var(--border-shop)]">1</button>
                                        <button className="px-6 py-4 border border-[color:var(--border-shop)]">+</button>
                                    </div>
                                    <div id="product-variants" className='flex flex-row'>{
                                        optionsData && optionsData.map((k,i) => {
                                            return(
                                                <div className='ml-2 border border-black rounded-md' key={i}>
                                                   <p className='p-4 colorPick' style={{"backgroundColor": k.code}} onClick={changeBackg.bind(k)}></p>
                                                </div>
                                            )
                                        })
                                    }</div>
                                </div>
                                <div>
                                    <button className="chart-button mr-4 disabled tooltip" title="No Disponible">Add to cart</button>
                                    <button onClick={hideModal} className="">Back</button>
                                </div>
                            </div>
                    </div>
            </div>
        </section>
       </section>
    )
  }
  