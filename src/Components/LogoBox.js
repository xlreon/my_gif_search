import React from 'react'
import './LogoBox.css'

export default class LogoBox extends React.Component {
    render() {
        return <div className="logo-box">
            <img
                className="logo"
                src='https://i.ya-webdesign.com/images/neon-transparent-animated-3.gif'
                alt="Logo"
                />
        </div>
    }
}