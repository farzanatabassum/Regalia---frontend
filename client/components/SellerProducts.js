import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Link from 'next/link';
const SellerProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    const token = localStorage.getItem('Token');
    await fetch('http://localhost:5000/api/products/read', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((parsed) => {
        console.log(parsed);
        setProducts(parsed);
        setIsLoading(false);
      });
  };
  //Deleting Products
  const handleDelete = async (productId) => {
    const token = localStorage.getItem('Token');
    const response = await fetch(
      `http://localhost:5000/api/products/deleteProduct/${productId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    getProduct();
  };

  return (
    <div>
      {/* productlist */}
      <section className="py-10 px-12">
        <h3 className="text-center text-2xl font-semibold mb-6">My Products</h3>
        {!products && <h3 className="text-center text-2xl font-semibold mb-3">
            You have not posted any products
          </h3>}
        {products.length>0 && isLoading}
        {isLoading && <div>Loading... </div>}
        <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {products &&
            products.map((product) => {
              return (
                <div
                  className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
                  key={product._id}
                >
                  <img
                    className="rounded-t-lg object-contain object-center h-[56vh] w-full"
                    src={product.image}
                    alt="cloth image"
                  />
                  <div className="p-5">
                    <h5 className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                      <span className="font-bold">Category:</span>{' '}
                      {product.category}
                    </h5>
                    <h5 className="mb-2  font-normal tracking-tight text-gray-900 dark:text-white">
                      <span className="font-bold">Brand:</span> {product.brand}
                    </h5>

                    <h5 className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                      <span className="font-bold">Fabric:</span>{' '}
                      {product.fabric}
                    </h5>
                    <h5 className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                      <span className="font-bold">Size:</span> {product.size}
                    </h5>
                    <h5 className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                      <span className="font-bold">Condition:</span>{' '}
                      {product.condition}
                    </h5>
                    <h5 className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                      <span className="font-bold">Gender:</span>{' '}
                      {product.gender}
                    </h5>
                    <h5 className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                      <span className="font-bold">
                        Original price of the cloth:
                      </span>{' '}
                      {product.originPrice}
                    </h5>
                    <h5 className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                      <span className="font-bold">
                        Selling price of the cloth:
                      </span>{' '}
                      {product.sellingPrice}
                    </h5>
                    <h5 className=" font-normal text-gray-700 dark:text-gray-400">
                      <span className="font-bold">Tags of the cloth:</span>{' '}
                      {product.tags.join(', ')}
                    </h5>
                  </div>
                  <div className="flex justify-center mb-4 ">
                    <Link href={`/update/${product._id}`}>
                      <div className="mr-5">
                        {' '}
                        <button
                          type="button"
                          className=" text-white bg-blue-600 font-medium rounded-lg text-sm px-5 py-3 text-center "
                        >
                          Edit
                        </button>
                      </div>
                    </Link>
                    <button
                      type="button"
                      className=" text-white bg-red-700 font-medium rounded-lg text-sm px-5 py-3 text-center "
                      onClick={() => {
                        handleDelete(product._id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
};

export default SellerProducts;
