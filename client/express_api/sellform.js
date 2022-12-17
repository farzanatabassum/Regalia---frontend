const sellform=async(data)=>{
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
            return res
        }
        catch(error){
            console.log(error)
        }

}
export {sellform}