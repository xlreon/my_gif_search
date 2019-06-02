import React from 'react'
import './HomePage.css'
import { Header, LogoBox } from '../Components'

export default class HomePage extends React.Component {

    render() {
        return (
            <div className='container'>
                <div className='header'>
                    <LogoBox/>
                    <Header/>
                </div>
            </div>
        );
    }
}