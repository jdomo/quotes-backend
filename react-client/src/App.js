import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Result from './components/Result';
import Landing from './components/Landing';
import Register from './components/Register';
import Login from './components/Login';

const my404 = () => {
  return (
    <div>
      Where do you think you're going?
    </div>
  )
}

class App extends Component {
  
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" render={(props) => <Landing {...props} />}/>
          <Route component={my404} />
        </Switch>
      </main>
    )
  }
}

export default App;
