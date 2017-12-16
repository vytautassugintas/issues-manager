import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import registerServiceWorker from "./registerServiceWorker";
import issuesStore from "./store";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
let store = createStore(issuesStore);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
  registerServiceWorker()
);
