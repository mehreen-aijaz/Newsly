import "./App.css";
//class based component
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import NewsItem from "./components/NewsItem";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News pageSize={7} country="in" category="sports" />
      </div>
    );
  }
}
