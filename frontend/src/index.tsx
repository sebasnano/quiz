import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Quizz from "./componets/Questions/Quizz";
import QuestionList from "./componets/Questions/QuestionList";
import Navbar from "./componets/Navbar/Navbar";

import "./index.css";
import "bootswatch/dist/cosmo/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className="container p-4">
      <Switch>
        <Route exact path="/" component={Quizz} />
        <Route path="/question" component={QuestionList} />
      </Switch>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
