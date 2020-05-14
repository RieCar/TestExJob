import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { loginUser } from "../Features/User/actions";

const Login: React.FC = () => {
  
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const dispatch = useDispatch()

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target 
    setForm((prevState) => ({ 
      ...prevState,
      [name]: value 
    }));
  }


  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if ( form.email && form.password ) {
      dispatch(loginUser(form))
    }
  }

  return (

    <form onSubmit={handleOnSubmit}>
          <label>
        Email
              <input type="text" name="email" onChange={handleOnChange}/>
          </label>

          <label>
              Lösenord
              <input type="password" name="password" onChange={handleOnChange} />
          </label>
          <input type="submit" value="Logga in"/>
          <p>
              Forgot <a href="#">password?</a>
          </p>

      </form>

  )

}


export default Login;

