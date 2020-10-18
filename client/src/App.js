import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Header from "./components/Header";
// import Map from "./components/Map";
// import Nav from "./components/Navbar";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import Cover from "./pages/Cover";
import Home from "./pages/Home";
import France from "./pages/France";
import Italy from "./pages/Italy";
import Spain from "./pages/Spain";
import Usa from "./pages/Usa";
import Img from "./pages/Gallery";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Cover} />
        <Route exact path={["/", "/home"]}>
          <Home />
        </Route>
        <Route exact path="/france">
          <France />
        </Route>
        <Route exact path="/italy">
          <Italy />
        </Route>
        <Route exact path="/spain">
          <Spain />
        </Route>
        <Route exact path="/usa">
          <Usa />
        </Route>
        <Route exact path="/Gallery">
          <Img />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
