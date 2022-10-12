import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Flavor from '../Flavor/Flavor'

import { onClose, tg } from '../hooks/useTelegrem'

import './App.css'

const App = () => {
    useEffect(() => {
        tg.ready()
    }, [])
    
    return (
        <Router>
            <Route path='/flavor' render={() => <Flavor />} />
            <div>
                work
                <button onClick={onClose}>Close</button>
            </div>
        </Router>
    )
}

export default App
