import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import axios from 'axios';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [user, SetUser] = useState({
                                    username:'',
                                    password:''
                                  })

  let history = useHistory();
  
  const handleChange = (e) => {
    e.preventDefault()
    SetUser({...user, [e.target.name]: e.target.value})
    
  }

  const handleSubmit = e  => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/login", user)
    .then(res => {
      localStorage.setItem('token',res.data.payload)
      SetUser({...user,
        username:'',
        password:''
      })
      history.push('/bubbles')
    })
    .catch(err => console.log(err))
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
            <button onClick={handleSubmit}>Login</button>
          </form>
      </div>
    </>
  );
};

export default Login;
