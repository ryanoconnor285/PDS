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
    width: 650,
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(age, sex, race, bmi, leanMass) {
  id += 1;
  return { id, age, sex, race, bmi, leanMass };
}

const rows = [
  createData('Age', '87', '66'),
  createData('Sex', 'M', 'F'),
  createData('Race', 'white', 'white'),
  createData('BMI', '39.1', '30.9'),
  createData('Lean Body Mass', '140', 'unknown'),
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
            <TableCell>Demographic</TableCell>
            <TableCell>Patient</TableCell>
            <TableCell>Phase 3 Clincal Trial Average</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.age}
              </TableCell>
              <TableCell>{row.sex}</TableCell>
              <TableCell>{row.race}</TableCell>
              <TableCell>{row.bmi}</TableCell>
              <TableCell>{row.leanMass}</TableCell>
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