import React from "react";
import { Form } from "react-bootstrap";
import { Switch } from "react-router";
import WithNavRoutes from "./WithNavRoutes";
import {Dashboard} from "../Pages/Dashboard";

const Routes = () => {
  return (
    <>
    <Switch>
        <WithNavRoutes
          exact
          path="/"
          component={(props) => <Dashboard {...props} />}
        />
      </Switch>
    </>
    )
  };
  export default Routes;