/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getproductdetails, updateProduct } from '../../express_api/product';
import TagOptions from '../../components/TagOptions';
import UploadImage from '../../components/UploadImage';
const Update = () => {
  //Dynamic routing
  const router = useRouter();
  const { _id } = router.query;
  //State properties
  const [category, setCategory] = useState();
  const [brand, setBrand] = useState();
  const [fabric, setFabric] = useState();
  const [size, setSize] = useState();
  const [condition, setCondition] = useState();
  const [gender, setGender] = useState();
  const [originPrice, setOriginPrice] = useState();
  const [sellingPrice, setSellingPrice] = useState();
  const [tags, setTags] = useState([]);
  const [url, setUrl] = useState(null);
  const [products, setProducts] = useState([]);
  //getting product
  useEffect(() => {
    getproductdetails(_id).then((parsed) => {
      setProducts(parsed);
      setCategory(parsed.category);
      setBrand(parsed.brand);
      setFabric(parsed.fabric);
      setSize(parsed.size);
      setCondition(parsed.condition);
      setGender(parsed.gender);
      setOriginPrice(parsed.originPrice);
      setSellingPrice(parsed.sellingPrice);
      setTags(parsed.tags);
      setUrl(parsed.image);
    });
  }, [_id]);

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
    //update product
    const productData = await updateProduct(_id, data);

    try {
      if (!productData.error) {
        toast.success('Product updated', {
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
      toast.error('Failed to update', {
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
      <Navbar />
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
              Update Product Information
            </h1>
          </div>
          <form onSubmit={handleSubmit} className="mt-1 space-y-6">
            <input type="hidden" name="remember" value="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              {/* Category */}
              <div>
                <h2 className="mb-1">Category</h2>
                <label htmlFor="category" className="sr-only">
                  Category
                </label>
                <select
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className=" mb-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                >
                  <option defaultValue>Choose category of the cloth</option>
                  <option value="Abaya">Abaya</option>
                  <option value="Coat">Coat</option>
                  <option value="Dress">Dress</option>
                  <option value="Hoodie">Hoodie</option>
                  <option value="Jacket">Jacket</option>
                  <option value="Jeans">Jeans</option>
                  <option value="Lehenga">Lehenga</option>
                  <option value="Panjabi">Panjabi</option>
                  <option value="Polos">Polos</option>
                  <option value="Salwar Kameez">Salwar Kameez</option>
                  <option value="Skirt">Skirt</option>
                  <option value="Sweater">Sweater</option>
                  <option value="Sweatshirt">Sweatshirt</option>
                  <option value="Shirt">Shirt</option>
                  <option value="Suit">Suit</option>
                  <option value="Turtleneck Sweater">Turtleneck Sweater</option>
                  <option value="Tshirt">Tshirt</option>
                  <option value="Tracksuit">Tracksuit</option>
                  <option value="Tops">Tops</option>
                </select>
              </div>
              {/* Brand of the cloth */}
              <div>
                <h2 className="mb-1"> Brand of the cloth</h2>
                <label htmlFor="brand" className="sr-only">
                  Brand of the cloth
                </label>
                <select
                name="brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                  className=" mb-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                >
                  <option defaultValue>Choose a brand</option>
                  <option value="Aarong">Aarong</option>
                  <option value="Anzara">Anzara</option>
                  <option value="Artisan">Artisan</option>
                  <option value="Cats Eye">Cats Eye</option>
                  <option value="Dorjibari">Dorjibari</option>
                  <option value="Deshi Dosh">Deshi Dosh</option>
                  <option value="Ecstasy">Ecstasy</option>
                  <option value="Gentle Park">Gentle Park</option>
                  <option value="Le Reve">Le Reve</option>
                  <option value="Myth">Myth</option>
                  <option value="NogorPolli">NogorPolli</option>
                  <option value="Illiyeen">Illiyeen</option>
                  <option value="Rang">Rang</option>
                  <option value="Richman">Richman</option>
                  <option value="Sailor">Sailor</option>
                  <option value="Sabyasachi">Sabyasachi</option>
                  <option value="Tahoor">Tahoor</option>
                  <option value="Trendz">Trendz</option>
                  <option value="Yellow">Yellow</option>
                </select>
              </div>
              {/* Fabric of the cloth */}
              <div>
                <h2 className="mb-1">Fabric of the cloth</h2>
                <label htmlFor="fabric" className="sr-only">
                  Fabric
                </label>
                <select
                  name="fabric"
                  value={fabric}
                  onChange={(e) => setFabric(e.target.value)}
                  className=" mb-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                >
                  <option defaultValue>Choose fabric of the cloth</option>
                  <option value="Cotton">Cotton</option>
                  <option value="Chiffon">Chiffon</option>
                  <option value="Cashmere">Cashmere</option>
                  <option value="Denim">Denim</option>
                  <option value="Georgette">Georgette</option>
                  <option value="Jersey">Jersey</option>
                  <option value="Linen">Linen</option>
                  <option value="Leather">Leather</option>
                  <option value="Nylon">Nylon</option>
                  <option value="Polyester">Polyester</option>
                  <option value="Polar Fleece">Polar Fleece</option>
                  <option value="Organza">Organza</option>
                  <option value="Silk">Silk</option>
                  <option value="Sweatshirt Fleece">Sweatshirt Fleece</option>
                  <option value="Satin">Satin</option>
                  <option value="Wool">Wool</option>
                </select>
              </div>
              {/* Size of the cloth */}
              <div>
                <h2 className="mb-1">Size of the cloth</h2>
                <label htmlFor="size" className="sr-only">
                  Size of the cloth
                </label>
                <select
                 name='size'
                 value={size}
                 onChange={(e) => setSize(e.target.value)}
                 className=" mb-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                >
                  <option defaultValue>Choose size of the cloth</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>
              {/* Condition of the cloth */}
              <div>
                <h2 className="mb-1">Condition of the cloth</h2>
                <label htmlFor="condition" className="sr-only">
                  Condition of the cloth
                </label>
                <select
                  name="condition"
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  className=" mb-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                >
                  <option defaultValue>Choose condition of the cloth</option>
                  <option value="New with tag">New with tag</option>
                  <option value="New without tag">New without tag</option>
                  <option value="Used but in good condition">Used but in good condition</option>
                  <option value="Defective">Defective</option>
                </select>
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
                  className="mb-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm bg-gray-50  p-2.5 "
                >
                  <option defaultValue>Choose a gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              {/* Original Price of the cloth */}
              <div>
                <h2 className="mb-1">Original Price of the cloth (price in BDT)</h2>
                <label htmlFor="originPrice" className="sr-only">
                  Original Price of the cloth
                </label>
                <input
                  id="originPrice"
                  name="originPrice"
                  type="originPrice"
                  required
                  className=" mb-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  placeholder="Original Price of the cloth"
                  value={originPrice}
                  onChange={(e) => setOriginPrice(e.target.value)}
                />
              </div>
              {/* Selling price of the cloth */}
              <div>
                <h2 className="mb-1">Selling price of the cloth (price in BDT)</h2>
                <label htmlFor="sellingPrice" className="sr-only">
                  Selling price of the cloth 
                </label>
                <input
                  id="sellingPrice"
                  name="sellingPrice"
                  type="sellingPrice"
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
                <h2 className="mb-1">Image of the cloth</h2>
                <label htmlFor="image" className="sr-only">
                  Image
                </label>
                {url && (
                  <img
                    style={{
                      width: '100px',
                      height: '100px',
                    }}
                    src={url}
                    alt="product"
                  />
                )}
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
      <Footer />
    </div>
  );
};

export default Update;
