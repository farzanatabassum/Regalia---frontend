import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
const UpdatePreference = () => {
  const [preference, setPreference] = useState([]);
  const [summer, setSummer] = useState();
  const [winter, setWinter] = useState();
  const [casual, setCasual] = useState();
  const [traditional, setTraditional] = useState();
  const [formal, setFormal] = useState();
  const [sportsWear, setSportsWear] = useState();
  let [count, setCount] = useState(0);
  let x = 1;
  let sum = 0;
  const router=useRouter()
  const summerDiv = useRef();
  const winterDiv = useRef();
  const casualDiv = useRef();
  const traditionalDiv = useRef();
  const formalDiv = useRef();
  const sportsWearDiv = useRef();
  useEffect(() => {
    const token = localStorage.getItem('Token');
    if(!token){
      router.push('/')
    }
    else
   { fetch('http://localhost:5000/api/users/me', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((parsed) => {
        setPreference(parsed);
        setSummer(parsed.productPreference.summer);
        setWinter(parsed.productPreference.winter);
        setCasual(parsed.productPreference.casual);
        setTraditional(parsed.productPreference.traditional);
        setFormal(parsed.productPreference.formal);
        setSportsWear(parsed.productPreference.sportsWear);
      });}
  }, [router]);
  if (summer == true) {
    summerDiv.current.style.border = '10px solid blue';
    sum = sum + x;
  }

  if (winter === true) {
    winterDiv.current.style.border = '10px solid blue';
    sum = sum + x;
  }

  if (casual === true) {
    casualDiv.current.style.border = '10px solid blue';
    sum = sum + x;
  }
  if (formal === true) {
    formalDiv.current.style.border = '10px solid blue';
    sum = sum + x;
  }
  if (traditional === true) {
    traditionalDiv.current.style.border = '10px solid blue';
    sum = sum + x;
  }
  if (sportsWear === true) {
    sportsWearDiv.current.style.border = '10px solid blue';
    sum = sum + x;
  }
  count = sum;

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
    try {
      const token = localStorage.getItem('Token');
      let response = await fetch(
        `http://localhost:5000/api/users/updatePreference/${preference._id}`,
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
      toast.success('Recommendations for the product updated', {
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
        router.push('/')
      }, 1000);
      return res;
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
        {count==1 ? (
          <h1 className="text-center text-2xl font-semibold mb-10 text-red-600">Please choose at least 2 products</h1>
           ) : null}
        <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* summer */}
          <div
            className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            onClick={changeSummer}
            ref={summerDiv}
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
              {/* <h5 className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                <span className="font-bold">Category: </span>Shirt
              </h5> */}
            </div>
          </div>

          {/* winter */}
          <div
            className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            onClick={changeWinter}
            ref={winterDiv}
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
              {/* <h5 className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                <span className="font-bold">Category: </span>Jacket
              </h5> */}
            </div>
          </div>
          {/* casual */}
          <div
            className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            onClick={changeCasual}
            ref={casualDiv}
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
              {/* <h5 className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                <span className="font-bold">Category: </span> Skirt
              </h5> */}
            </div>
          </div>
          {/* traditional */}
          <div
            className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            onClick={changeTraditional}
            ref={traditionalDiv}
          >
            <img
              className="rounded-t-lg object-contain object-center h-[56vh] w-full"
              src="/traditional.jfif"
              alt="cloth image"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Traditional Collections
              </h5>
              {/* <h5 className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                <span className="font-bold">Category:</span> Punjabi
              </h5> */}
            </div>
          </div>
          {/* formal */}
          <div
            className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            onClick={changeFormal}
            ref={formalDiv}
          >
            <img
              className="rounded-t-lg object-contain object-center h-[56vh] w-full"
              src="/formal.jfif"
              alt="cloth image"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Formal Collections
              </h5>
              {/* <h5 className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                <span className="font-bold">Category:</span> Suit
              </h5> */}
            </div>
          </div>
          {/* sportsWear */}
          <div
            className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            onClick={changeSportsWear}
            ref={sportsWearDiv}
          >
            <img
              className="rounded-t-lg object-contain object-center h-[56vh] w-full"
              src="/sportswear1.jfif"
              alt="cloth image"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Sportswear Collections
              </h5>
              {/* <h5 className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                <span className="font-bold">Category:</span> Tracksuit
              </h5> */}
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

export default UpdatePreference;
