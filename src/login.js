import react from 'react';
import fire from './config/fire';
import myimg from './login-img.png'

import 'bootstrap/dist/css/bootstrap.min.css';

import{Form , Container , Col , Button , Aler , Card , Row} from 'react-bootstrap'



class Login extends react.Component{
    constructor(props) {
        super(props);
        this.state = {

            error: " ",
        };
    }
    login=()=>{
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        fire.auth().signInWithEmailAndPassword(email , password).then((u)=>{
            console.log("successfully Logged in");
        })
        .catch((err)=>{
            console.log("Error" + err.toString());
            this.setState({error : "Error" + err.toString()});

        })
    }

    signUp=()=>{
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        fire.auth().createUserWithEmailAndPassword(email , password).then((u)=>{
            console.log("successfully Signed up");
        })
        .catch((err)=>{
            console.log("Error" + err.toString());
            this.setState({error : "Error" + err.toString()});

        })
    }

    

    render(){

        return(

            
            <Container className="mt-5">
                <div><h4 style={{color:"red"}}>{this.state.error}</h4></div>
                <Row>
              
            <div className="imgcontainer mb-5">
              <img src={myimg} alt="Avatar" className="avatar"/>
            </div>
          
            <Col>
            
              <label><b >Email</b></label>
              <input type="text" placeholder="Enter Username" name="uname" id="email" required/>
          </Col>
          <Col>
              <label><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" id="password" required/>
              </Col>
              </Row>
              <div className="mt-5">

              
              <div className="mb-2"><Button onClick={this.login} variant="primary" className="">Login</Button>
              </div>
              <Button onClick={this.signUp}>SignUp</Button>
              </div>
          
            <div className="container" >
                
              
              
            </div>

            
            
            </Container>
        );
            
        

    }


}

export default Login;