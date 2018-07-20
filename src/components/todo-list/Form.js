import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import {
    addItem
} from "../../actions/todo-list";

const mapDispatchToProps = dispatch => {
    return {
        addItem: item => dispatch(addItem(item)),
    };
};

class ConnectedForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            content: ''
        }
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const content = this.state.content;
        const newItem = {
            id: uuidv1(),
            content: content
        };
        this.props.addItem(newItem);
        let newState = this.state;
        resetObjectPropertiesToValue(newState, '');
        this.setState(newState);
    };

    render() {
        const content = this.state.content;
        return (
            <div>
                <h2>Add new item</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Content</label>
                        <input
                            type="text"
                            className="form-control"
                            id="content"
                            value={content}
                            onChange={(e) => this.handleChange(e)}
                        />
                    </div>
                    <button type="submit" className="btn btn-lg btn-success">
                        + Add
                    </button>
                </form>
            </div>
        );
    }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;

function resetObjectPropertiesToValue(object, value){
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            object[key] = value;
        }
    }
}