import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import postList from './container/postList';
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact component={postList} path="/" />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
