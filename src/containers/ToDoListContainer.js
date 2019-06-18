import React, {Component} from 'react'
import {connect} from 'react-redux'
import ToDoItem from '../components/ToDoItem'
import {getToDoList} from '../actions'

class ToDoListContainer extends Component {
  componentDidMount() {
    this.props.getToDoList()
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
  console.log(`asd: state`, state)
  return {
    toDoList: state.stuff.toDoList,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getToDoList: () => dispatch(getToDoList()),
    dispatch,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoListContainer)
