import {useRouter} from 'next/router'
import React from 'react'
import { useEffect} from 'react'
import { toast } from 'react-toastify'
const SellWithUs = () => {
  const router=useRouter()
  useEffect(()=>{
    if(!localStorage.getItem("Token")){
      toast.error("Please Login first")
      router.push('/login')
    }
  },[router]
  )
  return (
    <div>
       <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="mt-1 text-center text-2xl font-bold tracking-tight text-gray-900">
              Seller&apos;s Product Information
            </h1>
          </div>
          <form
            className="mt-1 space-y-6"
            action="#"
            method="POST"
            encType="multipart/form-data"
          >
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
                  autoComplete="category"
                  required
                  className=" mb-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  placeholder="Category"
                 
                />
              </div>
              {/* Brand of the cloth */}
              <div>
                <h2 className="mb-1">  Brand of the cloth</h2>
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
                  className=" mb-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  placeholder="Condition of the cloth"
                 
                />
              </div>
              {/* Gender */}
              <div>
                <h2 className="mb-1">Gender</h2>
                <label htmlFor="gender" className="sr-only">
                  Gender
                </label>
                <select  name='gender'  class="mb-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm bg-gray-50  p-2.5 ">
                  <option selected>Choose a gender</option>
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
                 
                />
              </div>
              {/* Selling price of the cloth */}
              <div>
                <h2 className="mb-1">Selling price of the cloth</h2>
                <label htmlFor="sellPrice" className="sr-only">
                Selling price of the cloth
                </label>
                <input
                  id="sellPrice"
                  name="sellPrice"
                  type="sellPrice"
                  autoComplete="sellPrice"
                  required
                  className=" mb-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  placeholder="Selling price of the cloth"
                 
                />
              </div>
             {/* Tags */}
              <div>
                <h2 className="mb-1">Tags</h2>
                <label htmlFor="tags" className="sr-only">
                  Tags
                </label>
                <select  name='tags'  class="mb-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm bg-gray-50  p-2.5 ">
                  <option selected>Choose two or more tags</option>
                  <option value="Traditional">Traditional</option>
                  <option value="Casual">Casual</option>
                  <option value='Party-wear'>Party-wear</option> 
                  <option value='Formal'>Formal</option> 
                  <option value='Plus-size'>Plus-size</option> 
                </select>
              </div>
              {/* Image */}
              <div>
                <h2 className="mb-1">Image of the cloth</h2>
                <label htmlFor="image" className="sr-only">
                  Image
                </label>
                <input
                  id="image"
                  name="image"
                  type="file"
                  autoComplete="image"
                  required
                  className=" mb-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  
                />
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
  )
}

export default SellWithUs
