import React from 'react'; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from './containers/LandingPage'; 
import SignInPage from './containers/SignInPage'; 
import SignUpPage from './containers/SignUpPage'; 
import UserAccount from './containers/UserAccount'; 
import './App.css'; 

const App = () => (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/signin" component={SignInPage} />
                <Route exact path="/signup" component={SignUpPage} />
                <Route exact path="/account" component={UserAccount} />
            </Switch>
        </div>
    </Router>
)

export default App; 