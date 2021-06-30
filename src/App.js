import React from 'react';
//Global Style
import GlobalStyle from './components/GlobalStyle';
//Import Pages
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import MovieDetail from './pages/MovieDetail';
//Router
import { Route, Switch, useLocation } from 'react-router-dom';
//Animation
//mport { AnimatePresence } from 'framer-motion';


//imports

import Topbar from "./components/topbar/Topbar";
import Me from "./components/About/Me";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Menu from "./components/menu/Menu"
import "./app.scss"
import { useState } from "react";


function App() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">

      <GlobalStyle />

      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Switch location={location} key={location.pathname} >
          <Route path="/" exact >
              <AboutUs/>
          </Route>
          <Route path="/about" exact >
              <Me/>
          </Route>
          <Route path="/portfolio" exact>
              <Portfolio />
          </Route>
        <Route path="/work" exact>
          <OurWork />
        </Route>
        <Route path="/work/:id" >
          <MovieDetail />
        </Route>
        <Route path="/testimonials" exact>
          <Testimonials />
        </Route>
        <Route path="/contact">
            <ContactUs />
          </Route>
      </Switch>       
        
       
       
        </div>
  );
}

export default App;
