import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NameForm from './NameForm';
import EssayForm from './EssayForm';
import FlavorForm from './FlavorForm';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<NameForm />, document.getElementById('root'));
ReactDOM.render(<EssayForm />, document.getElementById('root2'));
ReactDOM.render(<FlavorForm />, document.getElementById('root3'));
registerServiceWorker();
