import React from 'react';
import Link from 'next/link';

const ProductItem = ({ image, brand, category, size, price }) => {
  return (
    <div>
      <Link href="/product/Regalia">
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img
            className="rounded-t-lg object-contain object-center h-[56vh] w-full"
            src={image}
            alt="cloth image"
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {brand}
            </h5>
            <h5 className="mb-2 font-normal text-gray-700 dark:text-gray-400">
              {category}
            </h5>
            <h5 className="mb-2 font-normal text-gray-700 dark:text-gray-400">
              {size}
            </h5>
            <h5 className="mb-2 font-normal text-gray-700 dark:text-gray-400">
              {price}
            </h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
