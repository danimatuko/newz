import "./App.css";
import Navigation from "./components/navigation/navigation";
import Homepage from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Navigation />
      <Switch>
        <Route path="/" component={Homepage}></Route>
      </Switch>
    </Fragment>
  );
}

export default App;


