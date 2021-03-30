import Home from "./pages/Home";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from "react";
import About from "./pages/About";
import Notfound from "./pages/Notfound";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route component={Notfound}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
