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
const forgotPassword=async(email)=>{
  try {
    let res = await fetch('http://localhost:5000/api/users/forgot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email}),
    });
 return await res.json();

  } catch (error) {
    console.log(error);
  }
}
const updatePassword=async(newPassword, confirmPassword,id,token)=>{
  try {
      
    let res = await fetch(
      `http://localhost:5000/api/users/forgotPassword/${id}/${token}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({newPassword, confirmPassword}),
      }
    );
   return await res.json();
    }
    catch (error) {
      console.log(error);
    }
}
export {getUser,updateProfile,updatePreference,forgotPassword, updatePassword}