const signin = async (email, password) => {
  try {
    let res = await fetch('http://localhost:5000/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    let response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};
export { signin };
