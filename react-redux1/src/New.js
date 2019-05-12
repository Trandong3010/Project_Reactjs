import React, { Component } from 'react';
import {connect} from 'react-redux';
class New extends Component {
    // useEditStatusInStore = () => {
    //     var {dispatch} =this.props;
    //     dispatch({type:'CHANGE_EDIT_STATUS'})
    // }
    render() {
        return (
            <div>
                <h1>Đây là component</h1>
                <button onClick={() => this.props.useEditStatusInStore()}>Click đi</button>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.editStatus
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        useEditStatusInStore: () => {
            dispatch({type:'CHANGE_EDIT_STATUS'})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(New)