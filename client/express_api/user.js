const getUser=async()=>{
    try {
        const token = localStorage.getItem('Token');
        let res = await fetch('http://localhost:5000/api/users/me', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,

          },
        });
        return await res.json();
      } catch (error) {
        console.log(error);
      }

}
const updateProfile=async( name,
    password,userId)=>{
        try{
            const token = localStorage.getItem('Token');
      let response = await fetch(
        `http://localhost:5000/api/users/updateProfile/${userId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({name,password}),
        }
      );
      return await response.json();
        }
        catch(error){
            console.log(error)
        }

}
const updatePreference=async(data,userId)=>{
  try {
    const token = localStorage.getItem('Token');
    let response = await fetch(
      `http://localhost:5000/api/users/updatePreference/${userId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );
    return await response.json();
     } catch (error) {
    console.log(error);
  }

}
export {getUser,updateProfile,updatePreference}