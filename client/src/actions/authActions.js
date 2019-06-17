import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './types'

//Register User
export const registerUser = ({ firstName, lastName, email, role, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({ firstName, lastName, email, role, password });

  try {
    const res = await axios.post('/api/users', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    })
  } catch (err) {
    const errors = err.response.data.errors;

    if(errors) {
      errors.forEach(error => console.log(error))
    }

    dispatch({
      type: REGISTER_FAIL
    })
  }
}