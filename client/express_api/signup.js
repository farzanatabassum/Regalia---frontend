const signup = async (name, email, gender, password) => {
  try {
    let res = await fetch('http://localhost:5000/api/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, gender, password }),
    });
    let response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};
export { signup };
