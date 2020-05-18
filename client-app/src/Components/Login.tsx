import React, { useState } from "react";
import { loginUser } from "../Features/useractions";
// import store from "../Features/store";
import { IFormValues } from "../app/models/user";
import { useDispatch } from "react-redux";

const Login: React.FC = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

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
    }
  };
  // const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   if ( form.email && form.password ) {
  //     agent.Users.login(form).then((response) => {
  //     console.log(response);
  //     if(response != null){
  //       localStorage.setItem("token", response.token);
  //       localStorage.setItem("org", response.organisation);
  //       dispatch(loginUser(response));
  //     }
  //     else return false;
  //   });
  //   }
  // }

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
