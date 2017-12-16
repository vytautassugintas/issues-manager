import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import IssuesPage from "./containers/IssuesPage";

class App extends Component {
  
  render() {
    return (
      <div>
        <IssuesPage />
      </div>
    );
  }
}

export default App;
