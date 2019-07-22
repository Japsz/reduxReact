import React from 'react';
import {Provider} from 'react-redux';
import store from './store/store';
import Form from './views/Form/Form';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import List from './views/List/List';
import FilteredList from "./views/List/FilteredList";

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
                <Route path={'/filter/:key/:text'} component={FilteredList}/>
              </Switch>
            </Jumbotron>
        </Router>
      </Provider>
  );
}

export default App;
