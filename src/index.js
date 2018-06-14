import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import MyComponent from "./MyComponent";

ReactDOM.render(<MyComponent />, document.getElementById('root'));
registerServiceWorker();
