import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import ScrollTop from "./components/ScrollTop";
import { ThemeProvider } from "./components/Theme";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Publications from "./pages/Publications";
import CV from "./pages/CV";
import "./site.scss";

function App() {
  return (
    <ThemeProvider>
      <div className="site">
        <GlobalStyle />
        <ScrollTop />
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/research" exact component={Research} />
          <Route path="/publications" exact component={Publications} />
          <Route path="/cv" exact component={CV} />
          <Redirect from="/portfolio" to="/research" />
          <Redirect from="/about" to="/cv" />
          <Redirect from="/testimonials" to={{ pathname: "/", hash: "#collaborators" }} />
          <Redirect from="/contact" to={{ pathname: "/", hash: "#contact" }} />
          <Redirect from="/work" to="/research" />
          <Redirect to="/" />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
