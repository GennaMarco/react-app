import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginControl from './LoginControl'
import Page from './Page'
import registerServiceWorker from './registerServiceWorker';

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
            <h2>
                You have {unreadMessages.length} unread messages.
            </h2>
            }
        </div>
    );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];

ReactDOM.render(<LoginControl />, document.getElementById('root'));
ReactDOM.render(<Mailbox unreadMessages={messages}/>, document.getElementById('root2'));
ReactDOM.render(<Page />, document.getElementById('root3'));
registerServiceWorker();
