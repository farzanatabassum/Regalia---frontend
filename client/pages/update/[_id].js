import React, { useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../backend/firebase/firebase';
import Multiselect from 'multiselect-react-dropdown';
import preferenceTags from '../../../backend/helper/preferenceTags';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Update = () => {
  //preferenceTags
  const {summer,winter,casual,traditional,formal,sportsWear}=preferenceTags

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
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);
  //getting product
  useEffect(() => {
    fetch(`http://localhost:5000/api/products/single/${_id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((parsed) => {
        console.log('Tags', parsed.tags);
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

  //for tags option
  let options = [];
  options=options.concat(summer,winter,casual,traditional,formal,sportsWear)
  //for new image
  const selectedFile = (e) => {
    e.preventDefault();

    if (!file) return;
    const storageRef = ref(storage, `products/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUrl(downloadURL);
          console.log('File available at', downloadURL);
        });
      }
    );
  };
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
    console.log(data);
    try {
      const token = localStorage.getItem('Token');
      let response = await fetch(
        `http://localhost:5000/api/products/editProduct/${_id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        }
      );
      let res = await response.json();
      console.log('Result', res);
      setCategory('');
      setBrand('');
      setFabric('');
      setSize('');
      setCondition('');
      setGender('');
      setOriginPrice('');
      setSellingPrice('');
      setTags('');
      setFile(null);
      setProgress(0);
      toast.success('Your product has been updated', {
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
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar/>
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
                <input
                  id="category"
                  name="category"
                  type="category"
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
                  required
                  className=" mb-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
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
                  className="mb-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm bg-gray-50  p-2.5 "
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
                  required
                  className=" mb-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  placeholder="Selling price of the cloth"
                  value={sellingPrice}
                  onChange={(e) => setSellingPrice(e.target.value)}
                />
              </div>
              {/* Tags */}
              <div>
                <h2 className="mb-1">Tags</h2>
                <label htmlFor="tags" className="sr-only">
                  Tags
                </label>
                <h1 className="text-red-600 mb-1 ">{error}</h1>

                <Multiselect
                  isObject={false}
                  options={options}
                  onRemove={(e) => {
                    if (e.length == 1) {
                      setError('Please choose at least two or more tags!!!');
                      setTags(e);
                    } else {
                      setError('');
                      setTags(e);
                    }
                  }}
                  onSelect={(e) => {
                    if (e.length == 1) {
                      setError('Please choose at least two or more tags!!!');
                      setTags(e);
                    } else {
                      setError('');
                      setTags(e);
                    }
                  }}
                  selectedValues={tags}
                  avoidHighlightFirstOption
                  className="mb-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm bg-gray-50  p-2.5 "
                  hidePlaceholder
                />

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
                <input
                  id="image"
                  name="image"
                  type="file"
                  className=" mb-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                />
                {file && (
                  <button
                    type="submit"
                    className="group relative flex w-48 justify-center rounded-md border border-transparent bg-gray-700 py-2 px-4 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    onClick={selectedFile}
                  >
                    {' '}
                    Upload Image
                  </button>
                )}
                {file && <h2>Uploading done {progress}%</h2>}
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
      <Footer/>
    </div>
  );
};

export default Update;
