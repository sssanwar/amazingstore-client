import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import HomePageContainer from './pages/home/home.container'
import './App.css'

function App() {
  return (
    <Container maxWidth="md" className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePageContainer />
          </Route>
        </Switch>
      </Router>
    </Container>
  )
}

export default App
