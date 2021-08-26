import React from "react";
import { Route } from "react-router";
import { Header} from "../Layouts/Header"
import { Navigation} from "../Layouts/Navigation"

const WithNavRoutes = ({ component: RouteComponent, ...rest }) => {
  return (
    <>
      <Header/>
      <Navigation/>
      <div className="main-content">
        <Route
          {...rest}
          render={(routeProps) => <RouteComponent {...routeProps} />}
        />
      </div>
    </>
  );
};

export default WithNavRoutes;