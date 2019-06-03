import React from 'react'
import { connect } from 'react-redux'
import './HomePage.css'
import { Header, LogoBox, SearchResultModal } from '../Components'

class HomePage extends React.Component {

    render() {
        const { modalVisibility, gifs } = this.props
        return (
            <div className='container'>
                <div className='header'>
                    <LogoBox/>
                    <Header/>
                </div>
                <SearchResultModal 
                    visibility={modalVisibility}
                    gifsData={gifs}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        modalVisibility: state.modalVisibility,
        gifs: state.gifs
    }
}

export default connect(mapStateToProps)(HomePage)