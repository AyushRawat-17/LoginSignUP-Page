import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
function CovidBody(props) {
    return (
        <TableRow>
          <TableCell>{props.country}</TableCell>
          <TableCell>{props.cases}</TableCell>
          <TableCell>{props.todayCases}</TableCell>
          <TableCell>{props.deaths}</TableCell>
          <TableCell>{props.todayDeaths}</TableCell>
          <TableCell>{props.recovered}</TableCell>
          <TableCell>{props.active}</TableCell>
      </TableRow>
    );
}

export default CovidBody;

