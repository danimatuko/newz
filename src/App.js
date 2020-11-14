import "./App.css";
import Navigation from "./components/navigation/navigation";
import Homepage from "./pages/homepage/homepage";
import Footer from "./components/footer/footer";
import { Route, Switch } from "react-router-dom";
import { Fragment } from "react";



function App() {
  return (
    <Fragment>
      <Navigation />
      <Switch>
        <Route path="/" component={Homepage}></Route>
      </Switch>
      <Footer />
    </Fragment>
  );
}


export default App;
