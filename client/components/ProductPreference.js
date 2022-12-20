import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import { getUser } from '../express_api/user';

const ProductPreference = () => {
  const [preference, setPreference] = useState([]);
  const [summer, setSummer] = useState();
  const [winter, setWinter] = useState();
  const [casual, setCasual] = useState();
  const [traditional, setTraditional] = useState();
  const [formal, setFormal] = useState();
  const [sportsWear, setSportsWear] = useState();
  const [count, setCount] = useState(0);
  const router = useRouter();
  useEffect(() => {
    getUser()
      .then((parsed) => {
        
        setPreference(parsed);
        setSummer(parsed.productPreference.summer);
        setWinter(parsed.productPreference.winter);
        setCasual(parsed.productPreference.casual);
        setTraditional(parsed.productPreference.traditional);
        setFormal(parsed.productPreference.formal);
        setSportsWear(parsed.productPreference.sportsWear);
      });
  }, []);
  //summer
  const changeSummer = (e) => {
    if (summer === false) {
      e.currentTarget.style.border = '10px solid blue';
      setCount(count++);
    } else {
      e.currentTarget.style.border = 'none';
      setCount(count--);
    }
    setSummer(!summer);
    setCount(count);
    console.log('Summer', !summer, count);
  };
  //winter
  const changeWinter = (e) => {
    if (winter === false) {
      e.currentTarget.style.border = '10px solid blue';
      setCount(count++);
    } else {
      e.currentTarget.style.border = 'none';
      setCount(count--);
    }
    setWinter(!winter);
    setCount(count);
    console.log('Winter', !winter, count);
  };
  //casual
  const changeCasual = (e) => {
    if (casual === false) {
      e.currentTarget.style.border = '10px solid blue';
      setCount(count++);
    } else {
      e.currentTarget.style.border = 'none';
      setCount(count--);
    }
    setCasual(!casual);
    setCount(count);
    console.log('Casual', !casual, count);
  };
  //traditional
  const changeTraditional = (e) => {
    if (traditional === false) {
      e.currentTarget.style.border = '10px solid blue';
      setCount(count++);
    } else {
      e.currentTarget.style.border = 'none';
      setCount(count--);
    }
    setTraditional(!traditional);
    setCount(count);
    console.log('Traditional', !traditional, count);
  };
  //formal
  const changeFormal = (e) => {
    if (formal === false) {
      e.currentTarget.style.border = '10px solid blue';
      setCount(count++);
    } else {
      e.currentTarget.style.border = 'none';
      setCount(count--);
    }
    setFormal(!formal);
    setCount(count);
    console.log('Formal', !formal, count);
  };
  //sportsWear
  const changeSportsWear = (e) => {
    if (sportsWear === false) {
      e.currentTarget.style.border = '10px solid blue';
      setCount(count++);
    } else {
      e.currentTarget.style.border = 'none';
      setCount(count--);
    }
    setSportsWear(!sportsWear);
    setCount(count);
    console.log('SportsWear', !sportsWear, count);
  };
  //Saving Preferences
  const savePreference = async () => {
    const data = {
      productPreference: {
        summer,
        winter,
        casual,
        formal,
        traditional,
        sportsWear,
      },
    };
   
    const preferenceData=await updatePreference(data,preference._id)
    try {
      if(!preferenceData.error)
     { toast.success('Recommendations updated', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      //navigating to homepage
      setTimeout(() => {
        router.push('/');
      }, 1000);
    }
    } catch (error) {
      console.log(error);
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
      <section className="py-10 px-12">
        <p className="text-center text-2xl font-semibold mb-10">
          Choose at least 2 products from the preference product list to get
          your recommended products
        </p>
        {count == 1 ? (
          <h1 className="text-center text-2xl font-semibold mb-10 text-red-600">
            Please choose at least 2 products
          </h1>
        ) : null}
        <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* summer */}
          <div
            className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            onClick={changeSummer}
          >
            <img
              className="rounded-t-lg object-contain object-center h-[56vh] w-full"
              src="/summer.jpg"
              alt="cloth image"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Summer Collections
              </h5>
            </div>
          </div>

          {/* winter */}
          <div
            className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            onClick={changeWinter}
          >
            <img
              className="rounded-t-lg object-contain object-center h-[56vh] w-full"
              src="/winter.jpeg"
              alt="cloth image"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Winter Collections
              </h5>
            </div>
          </div>
          {/* casual */}
          <div
            className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            onClick={changeCasual}
          >
            <img
              className="rounded-t-lg object-contain object-center h-[56vh] w-full"
              src="/casual.jpeg"
              alt="cloth image"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Casual Collections
              </h5>
            </div>
          </div>
          {/* traditional */}
          <div
            className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            onClick={changeTraditional}
          >
            <img
              className="rounded-t-lg object-contain object-center h-[56vh] w-full"
              src="/traditional2.png"
              alt="cloth image"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Traditional Collections
              </h5>
            </div>
          </div>
          {/* formal */}
          <div
            className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            onClick={changeFormal}
          >
            <img
              className="rounded-t-lg object-contain object-center h-[56vh] w-full"
              src="/formal2.jpg"
              alt="formal"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Formal Collections
              </h5>
            </div>
          </div>
          {/* sportsWear */}
          <div
            className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            onClick={changeSportsWear}
          >
            <img
              className="rounded-t-lg object-contain object-center h-[56vh] w-full"
              src="/sportswear.jpg"
              alt="cloth image"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Sportswear Collections
              </h5>
            </div>
          </div>
        </div>
        {/* Saving the preferences */}

        <div className="flex justify-center mt-9">
          <button
            onClick={savePreference}
            type="submit"
            className="group relative flex w-20 justify-center rounded-md border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Save
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductPreference;
