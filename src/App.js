import React from 'react';
import {Provider} from 'react-redux';
import store from './store/store';
import Form from './views/Form/Form';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import List from './views/List/List';

import Header from "./common/layout/Header";
import {Jumbotron} from "react-bootstrap";


function App() {

  return (

      <Provider store={store}>
        <Router>
          <Header/>
            <Jumbotron>
              <Switch>
                <Route exact path={'/'} component={List}/>
                <Route exact path={'/AddElement'} component={Form}/>
              </Switch>
            </Jumbotron>
        </Router>
      </Provider>
  );
}

export default App;
