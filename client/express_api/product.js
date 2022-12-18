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
//update product
const updateProduct=async(_id, data)=>{
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
    return res;
  } catch (error) {
    console.log(error);
  }
}
export { getproductdetails, getProduct, updateProduct };
