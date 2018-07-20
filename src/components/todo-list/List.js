import React from "react";
import { connect } from "react-redux";
import {
    checkItem,
    deleteItem
} from "../../actions/todo-list";

const mapStateToProps = state => {
    return { items: state.todo_list };
};

const mapDispatchToProps = dispatch => {
    return {
        checkItem: item => dispatch(checkItem(item)),
        deleteItem: item => dispatch(deleteItem(item)),
    };
};

class ConnectedList extends React.Component {

    handleCheck(item){
        this.props.checkItem(item);
    }

    handleDeleteItem(item){
        this.props.deleteItem(item);
    }

    render(){
        return (
            <ul className="list-group list-group-flush">
                {this.props.items.map(item => (
                    <li className={"list-group-item " + (item.isChecked ? "checked" : "")} key={item.id}>
                        <label>
                            <div className="row">
                                <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                                    <input type="checkbox" checked={item.isChecked} onChange={() => this.handleCheck(item)}/>
                                </div>
                                <div className={"col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 " + (item.isChecked ? "list-item-text" : "")}>
                                    {item.content}
                                </div>
                                <div className="col-xs-offset-2 col-md-offset-2 col-lg-offset-2 col-xl-offset-2 col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                    <a className="btn btn-danger" onClick={() => this.handleDeleteItem(item)}>
                                        <span className="glyphicon glyphicon-remove"/>
                                    </a>
                                </div>
                            </div>
                        </label>
                    </li>
                ))}
            </ul>
        )
    }
}

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;