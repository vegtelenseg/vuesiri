import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from '../landing-page/landing-page';
import HomePage from '../carousel/carousel';
class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/home" component={HomePage} />
                </Switch>
            </Router>
        );
    }
}

export default App;
