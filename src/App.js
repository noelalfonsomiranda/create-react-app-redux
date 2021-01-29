import React from 'react'
import styled from 'styled-components'
// import {Route} from 'react-router-dom'

import logo from './logo.svg'

import AddToDo from 'containers/AddToDo'
import ToDoListContainer from 'containers/ToDoListContainer'

// import Navigation from './components/Navigation'

import './App.css'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
`

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Wrapper>
          <img src={logo} className='App-logo' alt='logo' />
          <h1>React Playground</h1>
        </Wrapper>
        {/**
          <Navigation />
          <Route exact path='/' component={ToDoListContainer} />
          <Route exact path='/new-item' component={AddToDo} />
        */}
        <AddToDo />
        <ToDoListContainer />
      </header>
    </div>
  )
}

export default App
