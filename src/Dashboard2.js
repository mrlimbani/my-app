import React from 'react'
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'

function Dashboard2() {
    return (
        <React.Fragment>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                        <br /> Dashboard2
                    </p>
                    <Link
                        className="App-link"
                        to="/"
                        rel="noopener noreferrer"
                    >
                        Go Dashboard1
                    </Link>
                </header>
            </div>
        </React.Fragment>
    )
}

export default Dashboard2