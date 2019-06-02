import React from 'react'
import './HomePage.css'
import { Header, LogoBox, SearchResultModal } from '../Components'

export default class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisibility: false
        }
    }

    toggleModalVisibility = modalVisibility => this.setState({modalVisibility})

    render() {
        const { modalVisibility } = this.state
        return (
            <div className='container'>
                <div className='header'>
                    <LogoBox/>
                    <Header
                        toggleModalVisibility={this.toggleModalVisibility}
                    />
                </div>
                <SearchResultModal 
                    visibility={modalVisibility}
                    toggleModalVisibility={this.toggleModalVisibility}
                />
            </div>
        );
    }
}