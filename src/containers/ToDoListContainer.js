import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {loadToDoList} from '../actions'

class ToDoListContainer extends PureComponent {
  componentDidMount() {
    this.props.loadToDoList()
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.toDoList.map((toDo, index) => (
            <li key={index}>{toDo.title}</li>
          ))}
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
