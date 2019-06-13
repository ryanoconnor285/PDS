import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from './components/navigation/Navbar';
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Landing from "./components/layout/Landing";
import Dashboard from "./components/layout/ Dashboard";

import { PatientProvider } from "./context/PatientContext";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <Router>
      <React.Fragment>
        <UserProvider>
          <PatientProvider>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </PatientProvider>
        </UserProvider>
      </React.Fragment>
    </Router>
  );
}

export default App;
