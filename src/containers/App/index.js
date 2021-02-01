import React from 'react'
import styled from 'styled-components'
import {Switch, Route} from 'react-router-dom'

import logo from 'logo.svg'

import ToDo from 'containers/ToDo/Loadable'
import NotFoundPage from 'containers/NotFoundPage/Loadable'

const Wrapper = styled.div`
  text-align: center;

  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .App-link {
    color: #61dafb;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

function App() {
  return (
    <Wrapper className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>React Playground</h1>
        {/**
          <Navigation />
          <Route exact path='/' component={ToDo} />
          <Route exact path='/new-item' component={AddToDo} />
        */}
        <Switch>
          <Route exact path='/' component={ToDo} />

          <Route path='' component={NotFoundPage} />
        </Switch>
      </header>
    </Wrapper>
  )
}

export default App
