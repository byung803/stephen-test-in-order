import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Template from './components';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path='/' component={Template} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default Router; 
