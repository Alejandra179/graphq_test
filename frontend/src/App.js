import React from 'react';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';
import { LayoutsItems } from './utils';

function App(){
    return(
        <Router>
            <Switch>
        {
          LayoutsItems.map((layout, key) => {
            return(
              <Route
                key={key}
                path={layout.path}
                exact={layout.exact}
                component={layout.component}
              />
            )
          })
        }
      </Switch>
            
        </Router>
    )
}

export default App;