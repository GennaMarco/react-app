import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './Clock';
import registerServiceWorker from './registerServiceWorker';

function App()
{
    return (
        <div>
            <Clock />
            <Clock />
            <Clock />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
