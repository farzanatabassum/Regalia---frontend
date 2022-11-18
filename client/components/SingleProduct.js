import React from 'react'

const SingleProduct = ({img,category,brand,fabric,condition,size,price}) => {
  return (
    <div>
        <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">    
            <img
              alt="ecommerce"
              className="lg:w-1/2 lg:h-auto object-cover w-7/12 object-top rounded"
              src={img}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-60 mt-6 lg:mt-0 ">
            <h1 className="text-gray-900  text-3xl title-font font-medium mb-3 ">
             Description
              </h1>
              <h2 className=" mb-2 text-lg title-font text-gray-500 tracking-widest">
                <span className='font-bold'>Category:</span> {category}
              </h2>
              <h2 className=" mb-2 text-lg title-font text-gray-500 tracking-widest">
              <span className='font-bold'>Brand:</span> {brand}
              </h2>
              <h2 className=" mb-2 text-lg title-font text-gray-500 tracking-widest">
              <span className='font-bold'>Fabric:</span> {fabric}
              </h2>
              <h2 className=" mb-2 text-lg title-font text-gray-500 tracking-widest">
              <span className='font-bold'>Size:</span> {size}
              </h2>
              <h2 className="mb-2 text-lg title-font text-gray-500 tracking-widest">
              <span className='font-bold'>Condition:</span> {condition}
              </h2>
              
              <h2 className=" mb-6 text-lg title-font text-gray-500 tracking-widest">
              <span className='font-bold'>Price:</span> {price}
              </h2>
              <button class="flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded">Add to Cart</button>

            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default SingleProduct
