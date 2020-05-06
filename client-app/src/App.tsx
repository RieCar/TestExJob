import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'; 

class App extends Component {
  state = {
    values: []
  }

  componentDidMount(){

    axios.get('http://localhost:5000/api/organisation')
    .then((response)=> {
      this.setState ({
        values:response.data
      }) 
    })
    
  }
  render(){
    return (
      <div className="App">
        <header >      
        <ul>
          {this.state.values.map((value:any)=> (
            <li key ={value.customerId} > {value.companyName}
            <p> {value.customerDescription}</p>
            <img src={'http:' + value.imageUrl} ></img></li>
           
          ))}
          {/*  alt={value.customerIcon.Description} */}
        </ul>
        </header>
      </div>
    );
  }

}

export default App;
