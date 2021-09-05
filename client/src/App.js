import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import postDetail from './container/postDetail';
import postList from './container/postList';
import {createBrowserHistory} from 'history'
const history=createBrowserHistory();
class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route exact component={postList} path="/" />
            <Route exact component={postDetail} path="/post/:id" />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
