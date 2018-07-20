import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./containers/App";
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);