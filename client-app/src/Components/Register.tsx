import React,{Component} from 'react';
import axios from 'axios'; 
import { IFormValues } from '../app/models/user';

export default class Register extends React.Component<{}, {firstname:string, lastname:string,email:string, password:string, organisation:string}>{

    constructor(props:any) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            organisation: ''
          };

          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
      
    }

         handleChange(event:any){

        var targetname = event.target.name; 

        switch (targetname)
        {
            case 'email':{
                this.setState({ email: event.target.value});
                break;
            }

            case 'password':{
                this.setState({ password: event.target.value});
                break;
            }

            case 'firstname':{
                this.setState({ firstname: event.target.value});  
                break;
            }

            case 'lastname':{
                this.setState({ lastname: event.target.value});  
                break;
            }

            case 'organisation':{
                this.setState({ organisation: event.target.value}); 
                break;
            }
            default:
              break;
        }
            
      }
      handleSubmit(event:any) {
        event.preventDefault();
        let user :IFormValues= {
            username: this.state.firstname + this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            organisation: this.state.organisation

        }

        var config = {
            headers: { 'Content-Type': 'application/json' },
          };
          
        axios.post('http://localhost:5000/api/user/create', user,config)
        .then((response) => {
            console.log(response);             
          }, (error) => {
            console.log(error);
          });
       
      }
render(){

    return(

        <form onSubmit={this.handleSubmit}>
            <label>
               Firstname
                <input type="text" name="firstname"onChange={this.handleChange} />
            </label>
            <label>
               Lastname
                <input type="text" name="lastname"onChange={this.handleChange} />
            </label>
            <label>
               Company
                <input type="text" name="organisation"onChange={this.handleChange} />
            </label>
            <label>
                Email
                <input type="text" name="email"onChange={this.handleChange} />
            </label>

            <label>
                Password
                <input type="text" name="password" onChange={this.handleChange} />
            </label>
            <input type="submit"/>
        </form>

    )
}

}