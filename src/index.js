import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NameForm from './NameForm';
import EssayForm from './EssayForm';
import FlavorForm from './FlavorForm';
import Reservation from "./Reservation";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<NameForm />, document.getElementById('root'));
ReactDOM.render(<EssayForm />, document.getElementById('root2'));
ReactDOM.render(<FlavorForm />, document.getElementById('root3'));
ReactDOM.render(<Reservation />, document.getElementById('root4'));
ReactDOM.render(<input value="hi"/>, document.getElementById('root5'));

// delay, after 5 second the input is editable
setTimeout(function()
{
    ReactDOM.render(<input value={null} />, document.getElementById('root5'));
}, 5000);
registerServiceWorker();
