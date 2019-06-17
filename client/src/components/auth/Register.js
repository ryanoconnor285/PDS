import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
}));

function Register() {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: ""
  });

  const {
    firstName,
    lastName,
    email,
    confirmEmail,
    password,
    confirmPassword
  } = formData;

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    if (confirmPassword !== password) {
      console.log("Passwords do not match");
    } else if (confirmEmail !== email) {
      console.log(formData);
    }
  };

  return (
    <React.Fragment>
      <form className={classes.container} validate="true" autoComplete="off">
        <TextField
          required
          id="filled-firstName"
          label="First Name"
          name="firstName"
          className={classes.textField}
          onChange={handleChange}
          margin="normal"
          variant="filled"
        />
        <TextField
          required
          id="filled-lastName"
          label="Last Name"
          name="lastName"
          className={classes.textField}
          onChange={handleChange}
          margin="normal"
          variant="filled"
        />
        <TextField
          required
          id="filled-email"
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          className={classes.textField}
          onChange={handleChange}
          margin="normal"
          variant="filled"
        />
        <TextField
          required
          id="filled-confirmEmail"
          label="Confirm Email"
          type="email"
          name="confirmEmail"
          className={classes.textField}
          onChange={handleChange}
          margin="normal"
          variant="filled"
        />
        <TextField
          required
          id="filled-password"
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          className={classes.textField}
          onChange={handleChange}
          margin="normal"
          variant="filled"
        />
        <TextField
          required
          id="filled-confirmPassword"
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          autoComplete="current-password"
          className={classes.textField}
          onChange={handleChange}
          margin="normal"
          variant="filled"
        />
        <TextField
          required
          id="filled-role"
          label="Role"
          name="role"
          className={classes.textField}
          onChange={handleChange}
          margin="normal"
          variant="filled"
        />
      </form>
      <Button onClick={handleSubmit}>Register</Button>
    </React.Fragment>
  );
}

export default Register;
