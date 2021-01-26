import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import MenuBar from './components/MenuBar'
import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
function App(){
    return(
        <Router>
            <MenuBar/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/register' component={Register}/>
            
        </Router>
    )
}

export default App;