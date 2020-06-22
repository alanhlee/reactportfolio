import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Portfolio from './pages/Portfolio'
import About from './About.js'
import Contact from './pages/Contact'

// import React from 'react';
// import './App.css';
import Navbar from './components/Navbar'
// import Jumbotron from './components/Jumbotron'

function App() {
  return (
    <>
    <Router>
      
        <Navbar />
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
  
    </Router>
    </>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Jumbotron />
//     </>
//   );
// }

export default App;
