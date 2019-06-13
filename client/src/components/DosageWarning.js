import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const action = (
  <button>Change Dose</button>
);

const styles = theme => ({
  snackbar: {
    margin: theme.spacing(5),
  },
});

function DosageWarning(props) {
  const { classes } = props;

  return (
    <div>
      <SnackbarContent
        className={classes.snackbar}
        message={
          "Patient's most recent Rivaroxaban concentration is 314 mcg/L.  Rivaroxaban concentrations > 300 mcg/L can lead to death from major bleeding."
        }
        action={action}
      />
    </div> 
  );
}

DosageWarning.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DosageWarning);