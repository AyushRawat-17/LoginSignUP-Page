import React from 'react';
import { Redirect,Link } from 'react-router-dom';
import Paper from "@material-ui/core/Paper";
import './Logout.css'
function Logout() {
    const token = localStorage.getItem("token");
    if(token === null){
        return <Redirect to='/'/> ;
        }
    localStorage.removeItem("token");
    return (
        <Paper elevation={3} className="logout">

            <h1 className="logout-heading">You have been Logout !!!</h1>
            <Link to='/'>GO TO HOME PAGE</Link>
        </Paper>
    );
}

export default Logout;
