import React, { useState } from "react";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [user, SetUser] = useState({
                                    username:'',
                                    password:''
                                  })

  const handleChange = (e) => {
    e.preventDefault()
    SetUser({...user, [e.target.name]: e.target.value})
    
  }

  const handleSubmit = e {
    axios.post()
  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div>
          <form>
            <input 
              type='text'
              name='username'
              placeholder="Username"
              value = {user.username}
              onChange = {handleChange}
            />
            <input 
              type='text'
              name='password'
              placeholder="Password"
              value = {user.password}
              onChange = {handleChange}
            />
            <button>Login</button>
          </form>
      </div>
    </>
  );
};

export default Login;
