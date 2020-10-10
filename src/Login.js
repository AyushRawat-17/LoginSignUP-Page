import React from 'react';
import './Login.css';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from 'axios';

function Login() {

    const [state,setState]=React.useState({
      student_no:"",
      password:""
    })

    const Login_field = {
        margin: "5px 100px",
    }
  
    const Login_button = {
      margin: "10px 170px"
    }

    function handleChange(event){
      const value = event.target.value;
      const name1 = event.target.name;
      setState((prevValue)=>{
        if(name1==='student_no'){
          return {
            student_no:value,
            password:prevValue.password
          };
        }
        else if(name1==='pass'){
          return {
            student_no:prevValue.student_no,
            password:value
          };
        }
      });
    }
    
    function hadleSubmit(event){
      event.preventDefault();
      axios.post('https://ionic-server-app.herokuapp.com/trainee/login', state)
        .then(res=>{
          console.log(res);
          console.log(res.data);
          window.location = "/retrieve"
        })
  
    }

    return (
        <div className="Login-form">
        <h1>Login to Continue</h1>
        <form onSubmit={hadleSubmit}>
          <TextField
            id="outlined-basic"
            label="Student Number"
            variant="outlined"
            name="student_no"
            type="number"
            value={state.student_no}
            onChange={handleChange}
            style={Login_field}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            name="pass"
            onChange={handleChange}
            value={state.password}
            style={Login_field}
          />
          <br/>
          <Button variant="contained" color="primary" type="submit" style={Login_button}>
            Login
          </Button>
        </form>
        </div>
  
    );
}

export default Login;
