import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import ItemList from './components/ItemList';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore(); // You can also pass in an initialState here

render(
    <Provider store={store}>
        <ItemList />
    </Provider>,
    document.getElementById('app')
);