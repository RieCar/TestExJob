import React,{Component} from 'react';
import axios from 'axios'; 

export default class Login extends React.Component<{}, {email:string, password:string}>{

    constructor(props:any) {
        super(props);
        this.state = {
            email: '',
            password: ''
          };

          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
      
    }

         handleChange(event:any){
          if(event.target.name === "email"){
            this.setState({ email: event.target.value});
          }
          else{
            this.setState({ password: event.target.value});
          }
       
      }
      handleSubmit(event:any) {
        event.preventDefault();
        let user = {
          Email: this.state.email,
          Password : this.state.password
        }

        var config = {
            headers: { 'Content-Type': 'application/json' },
          };
          
        axios.post('http://localhost:5000/api/user/login', user,config)
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
                Email
                <input type="text" name="email"onChange={this.handleChange} />
            </label>

            <label>
                Password
                <input type="text" name="password" onChange={this.handleChange} />
            </label>
            <input type="submit"/>
            <p>
                Forgot <a href="#">password?</a>
            </p>

        </form>

    )
}

}