import React from "react";
import "./App.css";
import Home from "./containers/home";
import Header from "./components/header";
import Hero from "./components/hero";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactUS from "./containers/contactus";
import Post from "./containers/post";
import AllPost from "./containers/allposts";
import BlogPost from "./components/blogpost";

import { ConfigureStore } from "./Redux/configureStore";
import { Provider } from "react-redux";

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Hero />
          <Route path="/" exact component={Home} />
          <Route path="/contact-us" component={ContactUS} />
          <Route path="/posts/:slug" component={Post} />
          <Route path="/all" component={AllPost} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
