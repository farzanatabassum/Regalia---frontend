import { useRouter } from 'next/router';
import React from 'react';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sellform } from '../express_api/sellform';
import TagOptions from './TagOptions';
import UploadImage from './UploadImage';
const SellWithUs = () => {
  //State properties
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [fabric, setFabric] = useState('');
  const [size, setSize] = useState('');
  const [condition, setCondition] = useState('');
  const [gender, setGender] = useState('');
  const [originPrice, setOriginPrice] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [tags, setTags] = useState([]);
  const [url, setUrl] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem('Token')) {
      router.push('/login');
    }
  }, [router]);

  //form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      category,
      brand,
      fabric,
      size,
      condition,
      gender,
      originPrice,
      sellingPrice,
      tags,
      image: url,
    };
    const productData = await sellform(data);
    try {
      if (!productData.error) {
        toast.success('Product Created', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        //navigating to My products page
        setTimeout(() => {
          router.push('/seller');
        }, 1000);
      }
    } catch (error) {
      toast.error('Try again', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  };

  return (
    <div>
      {/* React toastify */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="mt-1 text-center text-2xl font-bold tracking-tight text-gray-900">
              Seller&apos;s Product Information
            </h1>
          </div>
          <form onSubmit={handleSubmit} className="mt-1 space-y-6">
            <div className="-space-y-px rounded-md shadow-sm">
              {/* Category */}
              <div>
                <h2 className="mb-1">Category</h2>
                <label htmlFor="category" className="sr-only">
                  Category
                </label>

                <input
                  id="category"
                  name="category"
                  type="category"
                  autoComplete="category"
                  required
                  className=" mb-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  placeholder="Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              {/* Brand of the cloth */}
              <div>
                <h2 className="mb-1"> Brand of the cloth</h2>
                <label htmlFor="brand" className="sr-only">
                  Brand of the cloth
                </label>
                <input
                  id="brand"
                  name="brand"
                  type="brand"
                  autoComplete="brand"
                  required
                  className=" mb-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  placeholder="Brand of the cloth"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
              </div>
              {/* Fabric of the cloth */}
              <div>
                <h2 className="mb-1">Fabric of the cloth</h2>
                <label htmlFor="fabric" className="sr-only">
                  Fabric
                </label>
                <input
                  id="fabric"
                  name="fabric"
                  type="fabric"
                  autoComplete="fabric"
                  required
                  className=" mb-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  placeholder="Fabric"
                  value={fabric}
                  onChange={(e) => setFabric(e.target.value)}
                />
              </div>
              {/* Size of the cloth */}
              <div>
                <h2 className="mb-1">Size of the cloth</h2>
                <label htmlFor="size" className="sr-only">
                  Size of the cloth
                </label>
                <input
                  id="size"
                  name="size"
                  type="size"
                  autoComplete="size"
                  required
                  className=" mb-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  placeholder="Size of the cloth"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                />
              </div>
              {/* Condition of the cloth */}
              <div>
                <h2 className="mb-1">Condition of the cloth</h2>
                <label htmlFor="condition" className="sr-only">
                  Condition of the cloth
                </label>
                <input
                  id="condition"
                  name="condition"
                  type="condition"
                  autoComplete="condition"
                  required
                  className=" mb-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 bg-white sm:text-sm"
                  placeholder="Condition of the cloth"
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                />
              </div>
              {/* Gender */}
              <div>
                <h2 className="mb-1">Gender</h2>
                <label htmlFor="gender" className="sr-only">
                  Gender
                </label>
                <select
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className=" mb-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"

                  // className="mb-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm bg-gray-50  p-2.5 "
                >
                  <option defaultValue>Choose a gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              {/* Original Price of the cloth */}
              <div>
                <h2 className="mb-1">Original Price of the cloth</h2>
                <label htmlFor="originPrice" className="sr-only">
                  Original Price of the cloth
                </label>
                <input
                  id="originPrice"
                  name="originPrice"
                  type="originPrice"
                  autoComplete="originPrice"
                  required
                  className=" mb-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  placeholder="Original Price of the cloth"
                  value={originPrice}
                  onChange={(e) => setOriginPrice(e.target.value)}
                />
              </div>
              {/* Selling price of the cloth */}
              <div>
                <h2 className="mb-1">Selling price of the cloth</h2>
                <label htmlFor="sellingPrice" className="sr-only">
                  Selling price of the cloth
                </label>
                <input
                  id="sellingPrice"
                  name="sellingPrice"
                  type="sellingPrice"
                  autoComplete="sellingPrice"
                  required
                  className=" mb-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  placeholder="Selling price of the cloth"
                  value={sellingPrice}
                  onChange={(e) => setSellingPrice(e.target.value)}
                />
              </div>
              {/* Tags */}
              <div>
                <TagOptions tags={tags} setTags={setTags} />
              </div>
              {/* Image */}
              <div>
                <UploadImage setUrl={setUrl} />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellWithUs;
