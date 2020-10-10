import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import "./Home.css";
import Login from './Login';
import SignUp from './SignUp';

function Home() {
  const [value, setValue] = React.useState(0);
  const[page,setPage]=React.useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0){
      setPage(true);
    }
    else if(newValue === 1){
      setPage(false);
    }
  };

  return (
    <div className="Home">
      <Paper className="Home-form">
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          className="Login-Tab"
        >
          <Tab label="Login"/>
          <Tab label="Sign UP"/>
        </Tabs>
          {page ? <Login/> : <SignUp/>}
      </Paper>
    </div>
  );
}

export default Home;
