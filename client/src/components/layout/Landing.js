import React, { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  mainCard: {
    width: "50%"
  },
  mainCardP: {
    [theme.breakpoints.down("sm")]: {
      width: 350
    },
    [theme.breakpoints.up("md")]: {
      width: 500
    },
    margin: "auto"
  },
  mainMedia: {
    marginTop: -50,
    width: "100%"
  },
  card: {
    maxWidth: "375"
  },
  media: {
    marginTop: 6,
    height: "60%"
  }
});

const Landing = props => {
  const { classes } = props;
  const [, setUser] = useContext(UserContext);
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [errors, setErrors] = useState(null);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (formData.username === "ADMIN" && formData.password === "RENCI") {
      setUser({ user: formData.username });
    } else {
      setErrors("Invalid Credentials");
    }
  };

  return (
    <React.Fragment>
      <Grid container justify="center" spacing={24}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Precision Dosing
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <TextField
                  required
                  id="username"
                  name="username"
                  label="Username"
                  placeholder="Username"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  onChange={handleChange}
                />
                <TextField
                  required
                  id="password"
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="Password"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  style={{
                    height: "50px",
                    color: "white",
                    background:
                      "linear-gradient(to right bottom, #ef6c00, #ff4081)"
                  }}
                  fullWidth
                >
                  Login
                </Button>
                <span>{errors}</span>
              </form>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent />
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className={classes.card}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Mobile Friendly
              </Typography>
              <Typography component="p">
                This application is designed to be used on mobile. It also works
                great on desktop with easy to read tables.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className={classes.card}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Intuitive
              </Typography>
              <Typography component="p">
                The information and actions you need to make decisions are
                presented in easy to view tables, graphs and charts.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className={classes.card}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Built Around You
              </Typography>
              <Typography component="p">
                Take the guess work out of precision dosing. Make informed
                descisions regarding your patient's personalized dosing.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default withStyles(styles)(Landing);
