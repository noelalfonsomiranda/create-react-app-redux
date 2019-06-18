import React, {Component} from 'react'
import {connect} from 'react-redux'
import ToDoItem from '../components/ToDoItem'
import {loadToDoList} from '../actions'

class ToDoListContainer extends Component {
  componentDidMount() {
    this.props.loadToDoList()
  }

  render() {
    return (
      <div>
        <ul>
          <ToDoItem toDoList={this.props.toDoList} />
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    toDoList: state.stuff.toDoList,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadToDoList: () => dispatch(loadToDoList()),
    dispatch,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoListContainer)
