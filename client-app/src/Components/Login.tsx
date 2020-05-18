import React, { useState } from "react";
import { loginUser } from "../Features/actions";
import store from "../Features/store";
import agent from "../app/api/agent";
import { IFormValues } from "../app/models/user";
import { useDispatch } from "react-redux";

const Login: React.FC =()=> {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const dispatch = useDispatch();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target 
    setForm((prevState) => ({ 
      ...prevState,
      [name]: value 
    }));
  }
  // handleChange = (event: any) => {
  //   if (event.target.name === "email") {
  //     this.setState({ email: event.target.value });
  //   } else if (event.target.name === "password") {
  //     this.setState({ password: event.target.value });
  //   }
  // };
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if ( form.email && form.password ) {
      agent.Users.login(form).then((response) => {
      console.log(response);    
      if(response != null){
        localStorage.setItem("token", response.token);
        localStorage.setItem("org", response.organisation);
        dispatch(loginUser(response));
      }
      else return false; 
    });
    }
  }
  // handleSubmit = (event: any) => {
  //   event.preventDefault();

  //   let user: IFormValues = {
  //     email: this.state.email,
  //     password: this.state.password,
  //   };
   
  //   agent.Users.login(user).then((response) => {
  //     console.log(response);    
  //     if(response != null){
  //       localStorage.setItem("token", response.token);
  //       localStorage.setItem("org", response.organisation);
  //       store.dispatch(loginUser(response));

  //     }
  //     else return false; 
  //   });

  // };

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
  }


export default Login;
