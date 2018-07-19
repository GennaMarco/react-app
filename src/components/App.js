import React from "react";
import List from "./List";
import Form from "./Form";

class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            articleToUpdate: {
                id: '',
                title: ''
            }
        };
    }

    handleArticleTriggerUpdate(article){
        let newState = this.state;
        newState['articleToUpdate'] = article;
        this.setState(newState);
    }

    render() {
        return (
            <div className="row mt-5">
                <div className="col-md-4 offset-md-1">
                    <h2>Articles</h2>
                    <List onArticleTriggerUpdate={(article) => this.handleArticleTriggerUpdate(article)}/>
                </div>
                <div className="col-md-4 offset-md-1">
                    <h2>Add a new article</h2>
                    <Form articleToUpdate={this.state.articleToUpdate} />
                </div>
            </div>
        )
        ;
    }
}
export default App;