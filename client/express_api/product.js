//product details
const getproductdetails = async (_id) => {
    try {
      let res = await fetch(`http://localhost:5000/api/products/single/${_id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      return await res.json();
    } catch (error) {
      console.log( error);
    }
  };
  
  export {getproductdetails};