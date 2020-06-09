import React, { useState, useEffect } from "react";
import { loginUser } from "../../Features/useractions";
import { useDispatch, useSelector} from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { IStore } from "../../app/models/store";

import "../../app/layout/style/login.scss";
import ReactDOM from "react-dom";


const Login: React.FC = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  var error = useSelector(
    (store: IStore) => store.currentUser?.error
  );

  var message = useSelector(
    (store: IStore) => store.currentUser?.message
  );

  const dispatch = useDispatch(); 
  let history = useHistory();


 
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
  
    if (form.email && form.password) {
      dispatch(loginUser(form));
      history.push({pathname:"/Card", state: organisation});
    }
    else{ //if either email or password is empty no request goes off
      var HTMLp = React.createElement('p', {className:'error'}, "You need to fill in both fields.");
      ReactDOM.render(HTMLp, document.getElementById('errormessage'));
    }
  };

  function ListErrors(props: any) {
    var currentList = props.items;
    console.log("current", currentList);
  currentList?.map((item:any)=> (
     console.log("erroritem",item.error.Errors)
   ))
    const list = (
      <div>
        <ul>
          {currentList?.map((item: any) => (
            <li key={item}>{item.error}
            </li>
          ))}
        </ul>
      </div>
    );
    return <div>{list}</div>;
  }


  return (
    <div className="mainlogin"> 
    <div className="ingress"> 
    <h2 className="ingress_title"> Login at Customer Portal </h2>
    <p> You need to login to use the customer Portal</p>
    <p> At your organisations portal site you can read about ongoing projects, laid orders and so on</p>
    <p> If you don't have the credentials contact Camelonta at <a href="mailto=info@camelonta.se">info@camelonta.se </a></p>
    </div>
    <div>
    {error ? (
     // <p> {message}</p>
     <ListErrors props={message}/>
  ):
  (
    <p> </p>
  )}
    </div>

  
    <form className="login_form" onSubmit={handleOnSubmit}>
    <div id="errormessage" style={{color: "red"}}></div>

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



