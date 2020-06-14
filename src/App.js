import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Blog from './pages/Blog'
import Header from './components/Header'

export default function App() {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path='/blog'>
                        <Blog />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
