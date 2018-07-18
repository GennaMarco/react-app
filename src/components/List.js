import React from "react";
import { connect } from "react-redux";
import { deleteArticle } from "../actions/articles";

const mapStateToProps = state => {
    return { articles: state.articles };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteArticle: article => dispatch(deleteArticle(article))
    };
};

class ConnectedList extends React.Component {

    handleDeleteArticle(article){
        this.props.deleteArticle(article);
    }

    render(){
        return (
            <ul className="list-group list-group-flush">
                {this.props.articles.map(el => (
                    <li className="list-group-item" key={el.id}>
                        <div className="row">
                            <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                {el.title}
                            </div>
                            <div
                                className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-offset-4 col-sm-offset-4 col-md-offset-4 col-lg-offset-4 col-xl-offset-4">
                                <a style={{float: 'right'}} className="btn btn-danger" onClick={() => this.handleDeleteArticle(el)}><span
                                    className="glyphicon glyphicon-remove"/></a>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        )
    }
}

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;
