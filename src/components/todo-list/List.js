import React from "react";
import { connect } from "react-redux";
import { checkItem } from "../../actions/todo-list";

const mapStateToProps = state => {
    return { items: state.todo_list };
};

const mapDispatchToProps = dispatch => {
    return {
        checkItem: item => dispatch(checkItem(item))
    };
};

class ConnectedList extends React.Component {

    handleCheck(item){
        this.props.checkItem(item);
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
                                <div className={"col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 " + (item.isChecked ? "list-item-text" : "")}>
                                    {item.content}
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