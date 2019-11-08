import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Projects from './pages/Projects'

export default function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route path='/projects'>
                    <Projects />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </div>
    )
}

