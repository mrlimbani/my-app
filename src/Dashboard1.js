import React from 'react'
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'

function Dashboard1() {
    return (
        <React.Fragment>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                        <br /> Dashboard1
                    </p>
                    <Link
                        className="App-link"
                        to="/1"
                        rel="noopener noreferrer"
                    >
                        Go Dashboard2
                    </Link>
                </header>
            </div>
        </React.Fragment>
    )
}

export default Dashboard1