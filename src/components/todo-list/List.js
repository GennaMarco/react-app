import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { items: state.todo_list };
};

class ConnectedList extends React.Component {

    render(){
        return (
            <ul className="list-group list-group-flush">
                {this.props.items.map(el => (
                    <li className="list-group-item" key={el.id}>
                        <div className="row">
                            <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                {el.content}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        )
    }
}

const List = connect(mapStateToProps)(ConnectedList);
export default List;