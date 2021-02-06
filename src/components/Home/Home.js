import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

export default class Home extends React.Component {
    render() {
        return (
            <div className ='home_component'>
                <Link to="/login">
                    <div className="signin">
                        Log In
                    </div>
                </Link>
                <Link to="/join">
                    <div className="signup">
                        Sign Up
                    </div>
                </Link>
            </div>
        )
    }
}