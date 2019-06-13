import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
}));

function Login() {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value})
  const handleSubmit = e => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <React.Fragment>
    <form className={classes.container} validate="true" autoComplete="off">
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
      </form>
      <Button onClick={handleSubmit}>Login</Button>
    </React.Fragment>
  )
}

export default Login
