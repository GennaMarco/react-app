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

const initialState = {
    id: "",
    title: "",
    content: ""
};

class ConnectedForm extends Component {

    constructor() {
        super();
        this.state = initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const articleToUpdate = this.props.articleToUpdate;
        articleToUpdate[event.target.id] = articleToUpdate ? event.target.value : "";
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const articleToUpdate = this.props.articleToUpdate;

        if(articleToUpdate.id){
            this.props.updateArticle(articleToUpdate);
            resetObjectPropertiesToValue(articleToUpdate, '');
        }
        else {
            const articleNew= this.state;
            articleNew.id = uuidv1();
            this.props.addArticle(articleNew);
        }
        this.setState(initialState);
    }

    render() {
        const articleToUpdate = this.props.articleToUpdate;
        const title = articleToUpdate.id ? articleToUpdate.title : this.state.title;
        const content = articleToUpdate.id ? articleToUpdate.content : this.state.content;
        const classBtn = articleToUpdate.id ? 'btn-warning' : 'btn-success';

        return (
            <div>
                <h2>{articleToUpdate.id ? 'Edit' : 'Add a new' } article</h2>
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
                    <div className="form-group">
                        <label htmlFor="title">Content</label>
                        <input
                            type="text"
                            className="form-control"
                            id="content"
                            value={content}
                            onChange={this.handleChange}
                        />
                    </div>
                    {articleToUpdate.id ?
                        <a type="submit"
                           className="btn btn-default btn-lg"
                        >
                            Reset
                        </a>
                        :
                        ''
                    }

                    <button type="submit" className={"btn btn-lg " + classBtn}>
                        {articleToUpdate.id ? 'Edit' : 'Save'}
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