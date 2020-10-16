import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import CovidTable from './CovidTable'
import { Redirect,Link } from 'react-router-dom';
import './Logout'
import { Button } from '@material-ui/core';
import './CovidFetch.css'
function CovidFetch() {

  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://coronavirus-19-api.herokuapp.com/countries',
      );
 
      setData(result.data);
    };
 
    fetchData();
  }, []);

if(token === null){
  return <Redirect to='/'/> ;
  }

  return (
    <div>
    <div className="covid-heading">
    <h1>Covid-19 Cases</h1>
    <Button variant="contained" color="primary" style={{margin:"10px"}} >
    <Link to='/logout' className="link-button">Logout</Link>
    </Button>
    </div>
    <CovidTable 
      data={data}
    />
    </div>
  );

}

export default CovidFetch;
