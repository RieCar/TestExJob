import React, { useState, useEffect } from "react";
import { loginUser } from "../Features/useractions";
import { useDispatch} from "react-redux";
import { useHistory, useLocation } from "react-router-dom";


const Login: React.FC = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch(); 
  let history = useHistory();
  let location = useLocation();
 
  var organisation = window.localStorage.getItem('organisation');
 
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
    // var user : IFormValues= {
    //   email: form.email,
    //   password: form.password
    // };
    if (form.email && form.password) {
      dispatch(loginUser(form));
      history.push({pathname:"/Card", state: organisation});
    }
  };


  return (
    <form onSubmit={handleOnSubmit}>
      <label>
        Email
        <input type="text" name="email" onChange={handleOnChange} />
      </label>

      <label>
        Lösenord
        <input type="password" name="password" onChange={handleOnChange} />
      </label>
      <input type="submit" value="Logga in" />
      <p>
        Forgot <a href="#">password?</a>
      </p>
    </form>
  );
};

export default Login;
