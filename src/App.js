import React from "react";
import "./App.css";
import Home from "./containers/home";
import Header from "./components/header";
import Hero from "./components/hero";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactUS from "./containers/contactus";
import Post from "./containers/post";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Route path="/" exact component={Home} />
        <Route path="/contact-us" component={ContactUS} />
        <Route path="/posts/:slug" component={Post} />
      </div>
    </Router>
  );
}

export default App;
