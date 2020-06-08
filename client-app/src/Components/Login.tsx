import React, { useState, useEffect } from "react";
import { loginUser, LoginUserFailure } from "../Features/useractions";
import { useDispatch, useSelector} from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { IStore } from "../app/models/store";

import "../app/layout/style/login.scss";


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
     var error = {Message:""}
     error.Message = "You need to fill in both fields.";
     //error = "You need to fill in both fields.";
     console.log("Error", error); 
      dispatch(LoginUserFailure(error.Message));
      // history.push({pathname:"/Login",})
    //  var error = currentUser;
    }
  };

  function ListErrors(props: any) {
    var currentList = props.items;
    console.log("current", currentList);
  currentList?.map((item:any)=> (
     console.log(item.Description)
   ))
    const list = (
      <div>
        <ul>
          {currentList?.map((item: any) => (
            <li key={item}>{item}
            </li>
          ))}
        </ul>
      </div>
    );
    return <div>{list}</div>;
  }


  return (
    <div className="container"> 
    <div className="ingress"> 
    <h2 className="ingress_title"> Login at Customer Portal </h2>
    <p> At your organisations portal site you can read about ongoing projects, laid orders and so on</p>
    <p> If you don't have the credentials contact Camelonta at info@camelonta.se</p>
    </div>
    <div>
    {currentUser?.Errors ? (
    <ListErrors items={currentUser?.Errors} />
      ) : <p> </p>
    }
    </div>
    <form className="login_form" onSubmit={handleOnSubmit}>
  
    <div className="login_form_group">
      <label htmlFor="email" className="login_form_label">
        Email      
        </label>
        <br></br>
        <input className="login_form_input" type="text" name="email" id="email" onChange={handleOnChange} />
        </div>

<div className="login_form_group">  
      <label htmlFor="password" className="login_form_label">
        Lösenord </label>
        <br></br>
       
        <input className="login_form_input" type="password" name="password" id="password" onChange={handleOnChange} />
        </div> 
      <pre>{}</pre>
      <input className="login_form_button" type="submit" value="Logga in" />
      <p>
        Forgot <a href="#">password?</a>

      </p>
    
    </form>
    </div>
  );
};

export default Login;



