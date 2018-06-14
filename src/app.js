import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';
import React from "react";

// An intermediate component that uses the ThemedButton
function Toolbar(props) {
    return (
        <ThemedButton onClick={props.changeTheme}>
            Change Theme
        </ThemedButton>
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light,
        };

        this.toggleTheme = this.handleToggleTheme.bind(this);
    }

    handleToggleTheme(){
        this.setState({theme: this.state.theme === themes.dark ? themes.light : themes.dark})
    }

    render() {
        // The ThemedButton button inside the ThemeProvider
        // uses the theme from state while the one outside uses
        // the default dark theme
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme} />
                </ThemeContext.Provider>
                <section>
                    <ThemedButton />
                </section>
            </div>
        );
    }
}

export default App;
