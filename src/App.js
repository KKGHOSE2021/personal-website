import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutMe from './components/AboutMe/AboutMe';
import ContactMe from './components/ContactMe/ContactMe';
import Projects from './components/Projects/Projects';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import Header from './components/Header/Header';


function App() {

      return (
        <Router>
          <Route path="/">
            <Header />
            </Route>          
            <Switch>

            <Route path="/projects">
                <Projects />
                </Route>
                <Route path="/blogs">
                <Blogs />
                </Route>
              <Route path="/about">
                <AboutMe />
              </Route>
              <Route path="/contact">
                <ContactMe />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>        
        </Router>
  );
}

export default App;
