import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignUpDialog from "./SignUpDialog";
import registerServiceWorker from './registerServiceWorker';

//START EXERCISE
function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    );
}
ReactDOM.render(<WelcomeDialog />, document.getElementById('root'));
// END EXERICSE

// START EXERCISE
function Contacts() {
    return <div className="Contacts" />;
}

function Chat() {
    return <div className="Chat" />;
}

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

function App() {
    return (
        <SplitPane
            left={
                <Contacts />
            }
            right={
                <Chat />
            } />
    );
}
ReactDOM.render(<App />, document.getElementById('root2'));
// END EXERCISE
// START EXERCISE
ReactDOM.render(<SignUpDialog />, document.getElementById('root3'));
// END EXERCISE
registerServiceWorker();
