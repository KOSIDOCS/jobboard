import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainHead from "../components/headers/MainHead";
import CustomHomePage from "../components/Home/CustomHomePage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <>
        <MainHead />
        <Switch>
          <Route component={CustomHomePage} path="/" exact={true} />
        </Switch>
      </>
    </BrowserRouter>
  );
};

export default AppRouter;
