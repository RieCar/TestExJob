import React, { useState, useEffect } from "react";
import { loginUser, LoginUserFailure } from "../Features/useractions";
import { useDispatch, useSelector} from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { IStore } from "../app/models/store";


const Login: React.FC = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const currentUser = useSelector(
    (store: IStore) => store.currentUser
  );
  
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
    else{ //if either email or password is empty no request goes off
     dispatch(LoginUserFailure("Du behöver fylla i båda fälten"));
    }
  };


  return (
    <form className="login_form" onSubmit={handleOnSubmit}>
      {currentUser ? (
        <p> {currentUser.displayName}</p>
      ) : <p> </p> }
    
      <label id="name" className="login_form_label">
        Email
        <br></br>
        </label>
        <input type="text" name="email" onChange={handleOnChange} />
     
<br></br>
      <label id="name" className="login_form_label">
        Lösenord
        <br></br>
        </label>
        <input type="password" name="password" onChange={handleOnChange} />
     
      <pre>{}</pre>
      <input type="submit" value="Logga in" />
      <p>
        Forgot <a href="#">password?</a>

      </p>
    
    </form>
  );
};

export default Login;
