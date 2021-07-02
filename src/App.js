import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import PostList from "./components/PostList";
import Test from "./components/Test";

import "./App.css";
import "react-modal-video/css/modal-video.min.css";

const App = () => {
  return (
    <Router>
      <Header />
      <section className="container py-5">
        <Route exact path="/" component={PostList} />
        <Route exact path="/test" component={Test} />
      </section>
    </Router>
  );
};

export default App;
