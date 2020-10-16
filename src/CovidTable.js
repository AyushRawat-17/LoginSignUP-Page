import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import HeadingElement from "./HeadingElements";
import TableBody from "@material-ui/core/TableBody";
import TablePagination from "@material-ui/core/TablePagination";
import TableFooter from "@material-ui/core/TableFooter";
import CovidBody from "./CovidBody";
function CovidTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  function tableCell(headingitem) {
    return <TableCell>{headingitem}</TableCell>;
  }

  function bodyElement(item) {
    return (
      <CovidBody
        country={item.country}
        cases={item.cases}
        todayCases={item.todayCases}
        deaths={item.deaths}
        todayDeaths={item.todayDeaths}
        recovered={item.recovered}
        active={item.active}
      />
    );
  }

  return (
    <Paper elevation={3}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>{HeadingElement.map(tableCell)}</TableRow>
          </TableHead>
          <TableBody>{props.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(bodyElement)}</TableBody>
          <TableFooter>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={props.data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </TableFooter>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default CovidTable;
