import React from "react";
import "./SignUp.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from 'axios';

function SignUp() {
  const [state, setState] = React.useState({
    name: "",
    student_no: "",
    branch: "",
    mobile_no: "",
    email: "",
    password: "",
  });

  const Login_field = {
    margin: "2px 70px",
  };
  const Login_button = {
    margin: "10px 130px",
  };
 
  function handleChange(event){
    const value = event.target.value;
    const name1 = event.target.name;
    
    setState((prevValue)=>{
      if(name1==='name'){
        return {
          name: value,
          student_no: prevValue.student_no,
          branch:prevValue.branch,
          mobile_no:prevValue.mobile_no,
          email:prevValue.email,
          password:prevValue.password,
          
        };
      }
      else if(name1==='student_no'){
        return {
          name: prevValue.name,
          student_no: value,
          branch:prevValue.branch,
          mobile_no:prevValue.mobile_no,
          email:prevValue.email,
          password:prevValue.password,
          
        };
      }
      else if(name1==='branch'){
        return {
          name:prevValue.name,
          student_no: prevValue.student_no,
          branch:value,
          mobile_no:prevValue.mobile_no,
          email:prevValue.email,
          password:prevValue.password,
          
        };
      }
      else if(name1==='mobile_no'){
        return {
          name: prevValue.name,
          student_no: prevValue.student_no,
          branch:prevValue.branch,
          mobile_no:value,
          email:prevValue.email,
          password:prevValue.password,
          
        };
      }
      else if(name1==='email'){
        return {
          name: prevValue.name,
          student_no: prevValue.student_no,
          branch:prevValue.branch,
          mobile_no:prevValue.mobile_no,
          email:value,
          password:prevValue.password,
          
        };
      }
      else if(name1==='password'){
        return {
          name: prevValue.name,
          student_no: prevValue.student_no,
          branch:prevValue.branch,
          mobile_no:prevValue.mobile_no,
          email:prevValue.email,
          password:value,
          
        };
      }
    });
    
  }
  
  function handleSubmit(event){
    event.preventDefault();
    axios.post('https://ionic-server-app.herokuapp.com/trainee/register', state)
      .then(res=>{
        console.log(res);
        console.log(res.data);
        window.location = "/retrieve"
      })
  }

  return (
    <div className="signup-form">
      <h1 className="signup-h1">Welcome</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          type="name"
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          onChange={handleChange}
          value={state.name}
          style={Login_field}
        />
        <TextField
          type="number"
          id="outlined-basic"
          label="Student No."
          variant="outlined"
          name="student_no"
          onChange={handleChange}
          value={state.student_no}
          style={Login_field}
        />
        <TextField
          type="name"
          id="outlined-basic"
          label="Branch"
          variant="outlined"
          name="branch"
          onChange={handleChange}
          value={state.branch}
          style={Login_field}
        />
        <TextField
          type="number"
          id="outlined-basic"
          label="Mobile No."
          variant="outlined"
          name="mobile_no"
          onChange={handleChange}
          value={state.mobile_no}
          style={Login_field}
        />
        <TextField
          type="email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          value={state.email}
          style={Login_field}
        />
        <TextField
          type="password"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          name="password"
          onChange={handleChange}
          value={state.password}
          style={Login_field}
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={Login_button}
        >
          SignUp
        </Button>
      </form>
    </div>
  );
}

export default SignUp;
