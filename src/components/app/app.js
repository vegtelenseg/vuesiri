import React from 'react';
import { BrowserRouter as Route, Link, Router } from 'react-router-dom';
import LandingPage from '../landing-page/landing-page';
class App extends React.Component {
    render() {
        return (
            <Route>
                <LandingPage />
            </Route>
        );
    }
}

export default App;
