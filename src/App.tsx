import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import './styles/App.css';

const HomePage = lazy(() => import('./pages/home'));
const NotFound = lazy(() => import('./pages/notFound'));

function App(): JSX.Element {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/404" component={NotFound} />
                <Redirect to="/404" />
            </Switch>
        </Suspense>
    );
}

export default App;
