import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Theme context, default to light theme
const ThemeContext = React.createContext('light');

// Signed-in user context
const UserContext = React.createContext({
    name: 'Guest',
});

class App extends React.Component {
    render() {
        const {signedInUser, theme} = this.props;

        // App component that provides initial context values
        return (
            <ThemeContext.Provider value={theme}>
                <UserContext.Provider value={signedInUser}>
                    <Layout />
                </UserContext.Provider>
            </ThemeContext.Provider>
        );
    }
}

function Layout() {
    return (
        <div>
            <aside>
            </aside>
            <Content />
        </div>
    );
}

// A component may consume multiple contexts
function Content() {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <UserContext.Consumer>
                    {user => (
                        <ProfilePage user={user} theme={theme} />
                    )}
                </UserContext.Consumer>
            )}
        </ThemeContext.Consumer>
    );
}

function ProfilePage() {
    return (
        <div>

        </div>
    );
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
