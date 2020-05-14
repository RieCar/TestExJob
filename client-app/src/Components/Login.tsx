import React,{Component} from 'react';
import axios from 'axios'; 
import {loginUser} from "../Features/actions";
import store from '../Features/store';
import agent from '../app/api/agent';
import { IFormValues } from '../app/models/user';

class Login extends React.Component{
  state = {
    email: '',
    password: ''
  };
      handleChange= (event:any)=>{
      if(event.target.name === "email"){
                  this.setState({ email: event.target.value});
                }
                else if(event.target.name === "password"){
                  this.setState({ password: event.target.value});
                }
         
       
      }
      handleSubmit=(event:any)=> {
        event.preventDefault();

        let user :IFormValues= {
          email : this.state.email,
         password: this.state.password
        }

             agent.Users.login(user)
            .then((response) => {          
              console.log(response);
              localStorage.setItem("token", response.token)
              localStorage.setItem("organisation", response.organisation)
              store.dispatch(loginUser(response));
          }
            )}     
   
render(){

    return(

        <form onSubmit={this.handleSubmit}>
            <label>
                Email
                <input type="text" name="email" onChange={this.handleChange}/>
            </label>

            <label>
                Lösenord
                <input type="password" name="password" onChange={this.handleChange} />
            </label>
            <input type="submit" value="Logga in"/>
            <p>
                Forgot <a href="#">password?</a>
            </p>

        </form>

    )
}
}


export default Login;

