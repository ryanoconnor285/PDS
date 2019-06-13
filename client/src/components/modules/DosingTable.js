import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(name, hours, actualDose, testedConc, recDose, predConc) {
  id += 1;
  return { id, name, hours, actualDose, testedConc, recDose, predConc };
}

const rows = [
  createData('05/18/2019', '2 Hours', '20 mg once daily', '314 mcg/L', '15 mg once daily', '275 mcg/L'),
  createData('05/18/2019', '12 Hours', '20 mg once daily', '144 mcg/L', '15 mg once daily', '132 mcg/L'),
  createData('11/14/2018', '2 Hours', '20 mg once daily', '299 mcg/L', '15 mg once daily', '271 mcg/L'),
  createData('11/14/2018', '12 Hours', '20 mg once daily', '142 mcg/L', '15 mg once daily', '130 mcg/L'),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Typography variant="h6" id="modal-title">
        This information was last updated 05/19/2019 at 2:47am
      </Typography>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Time (Test Time - Dose Time)</TableCell>
            <TableCell>Actual Dose</TableCell>
            <TableCell>Tested Concentration</TableCell>
            <TableCell>Recommended Dose</TableCell>
            <TableCell>Predicted Concentration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.hours}</TableCell>
              <TableCell>{row.actualDose}</TableCell>
              <TableCell>{row.testedConc}</TableCell>
              <TableCell>{row.recDose}</TableCell>
              <TableCell>{row.predConc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);