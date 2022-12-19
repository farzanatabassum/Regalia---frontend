//create product
const createProduct = async (data) => {
  try {
    const token = localStorage.getItem('Token');
    let response = await fetch('http://localhost:5000/api/products/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    let res = await response.json();
    return res;
  } catch (error) {
    console.log(error);
  }
};
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

//get seller products
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
const updateProduct = async (_id, data) => {
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
};
//delete product
const deleteProduct = async (productId) => {
  try
  {
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
   return await response.json();
  }
  catch(error){
    console.log(error)
  }
};
export {
  createProduct,
  getproductdetails,
  getProduct,
  updateProduct,
  deleteProduct,
};
