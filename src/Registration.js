import React from 'react'
import './Registration.css'
import { Link } from 'react-router-dom';
import Paper from "@material-ui/core/Paper";
function Registration() {
    return (
        <Paper elevation={3} className="registration">
        <h1 className="registration-heading">Registred Successfully !!!</h1>
        <Link to='/'>GO TO HOME PAGE</Link>
        </Paper>

    )
}

export default Registration;
