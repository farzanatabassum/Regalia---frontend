//product details
const getproductdetails = async (_id) => {
  try {
    let res = await fetch(`http://localhost:5000/api/products/single/${_id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

//get seller product
const getProduct = async () => {
  try {
    //token
    const token = localStorage.getItem('Token');
    let res = await fetch('http://localhost:5000/api/products/read', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
export { getproductdetails, getProduct };
