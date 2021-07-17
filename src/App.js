
import React from 'react';
import './App.css';
import Login from './login';
import Home from './home';
import fire from './config/fire';
import {Posts} from './mock-data'
import 'bootstrap/dist/css/bootstrap.min.css';




class App extends React.Component {

  constructor(props){
    super(props);

    this.state ={
      user:null,
      friends:[
        {id:1,name:'Ahmed',email:'ahmad@gmail.com'},
        {id:2,name:'khaled',email:'khaled@gmail.com'},
        {id:3,name:'Hosam',email:'Hosam@gmail.com'},
        {id:4,name:'Mohammed',email:'Mohammed@gmail.com'},
        {id:5,name:'Ayman',email:'Ayman@gmail.com'},
        {id:6,name:'Fathi',email:'Fatji@gmail.com'},

      ]
    }


  }

  removeFriends =(e)=> {
    var array = [...this.state.friends];
    var index = array.indexOf(e.target.value)
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({friends: array});
    }
  }

  componentDidMount(){
    this.authListener();

  }

  authListener=()=>{
    fire.auth().onAuthStateChanged(( user=> {

      if(user){
        this.setState({user});
      }else{
        this.setState({ user: null })
      }

    }))


  }
  render(){

  
  return (


    <div className="App">


      {this.state.user ? (<Home friends={this.state.friends} />):(<Login/>)}
    </div>
  );
}
}
export default App;
