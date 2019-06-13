import React from 'react';
import DosingTable from './modules/DosingTable';
import DemographicFactors from './modules/DemographicFactors';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class DrugMonitoringTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Demographic Factors" />
            <Tab label="Dosing Table" />
            <Tab label="PK / PD Charts" />
            <Tab label="Theraputic Range" />
            <Tab label="Socioeconomic/Geographic" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><DemographicFactors /></TabContainer>}
        {value === 1 && <TabContainer><DosingTable /></TabContainer>}
        {value === 2 && <TabContainer></TabContainer>
        }
        {value === 3 && <TabContainer></TabContainer>
        }
        {value === 4 && <TabContainer></TabContainer>
        }
      </div>
    );
  }
}

DrugMonitoringTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrugMonitoringTabs);