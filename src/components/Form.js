import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import {
    addArticle,
    updateArticle,
} from "../actions/articles";

const mapDispatchToProps = dispatch => {
    return {
        addArticle: article => dispatch(addArticle(article)),
        updateArticle: article => dispatch(updateArticle(article))
    };
};

class ConnectedForm extends Component {

    constructor() {
        super();
        this.state = {
            id: "",
            title: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const articleToUpdate = this.props.articleToUpdate;
        articleToUpdate.title = articleToUpdate ? event.target.value : "";
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const articleToUpdate = this.props.articleToUpdate;
        const { title } = this.state;
        if(articleToUpdate.id){
            this.props.updateArticle(articleToUpdate);
            resetObjectPropertiesToValue(articleToUpdate, '');
        }
        else {
            const id = uuidv1();
            this.props.addArticle({title, id});
        }
        this.setState({ title: "" });
    }

    render() {
        const articleToUpdate = this.props.articleToUpdate;
        const title = articleToUpdate.id ? articleToUpdate.title : this.state.title;

        const classBtn = articleToUpdate.id ? 'btn-warning' : 'btn-success';

        debugger;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit" className={"btn btn-lg " + classBtn}>
                    {articleToUpdate.id ? 'Edit' : 'Save'}
                </button>
            </form>
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