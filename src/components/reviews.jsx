export default function Reviews() {
    return (
       <section className="section-reviews text-white py-32 z-20 relative">
            <div className="flex justify-center items-center max-w-6xl mx-auto mb-16"> 
                <h4 className="mb-4 text-5xl font-bold review-title">
                    Why our customers love us. 
                </h4>
            </div>
            <div className="flex flex-row mx-auto gap-x-52 gap-y-16 justify-center items-center flex-wrap">
                <div className="flex flex-row justify-center items-start">
                    <img className="mr-16 img-review" src="./reviews-1.jpg" alt="" />
                    <p className="max-w-xs text-lg copy-review">Ocson has significantly boosted my Amazon sales.</p>
                </div>
                <div className="flex flex-row justify-center items-start">
                    <img className="mr-16 img-review" src="./reviews-2.jpg" alt="" />
                    <p className="max-w-xs text-lg copy-review">Thanks to Ocson, my online business has grown exponentially.</p>
                </div>
            </div>
       </section>
    )
  }
  