import React from 'react'
import Logo from '../assets/logo_transparent.png'

export default class LogoBox extends React.Component {
    render() {
        return <div className="logoBox">
            <img src={Logo} alt="Logo" class="logo"/>
        </div>
    }
}