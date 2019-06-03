import React from 'react'
import './GridContainer.css'

class GridContainer extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            batchNo: 1
        }
    }


    handleScroll = (event) => {
        const { batchNo } = this.state
        const { gifsData } = this.props
        if(event.deltaY === 1) {
            batchNo !== gifsData.length && this.setState({batchNo: batchNo + 1})
        }
        else if(event.deltaY === -1) {
            batchNo !== 1 && this.setState({batchNo: batchNo - 1})
        }
    }

    componentDidMount() {
        window.addEventListener('wheel', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('wheel', this.handleScroll);
    }

    getCurrentContent = () => {
        const { gifsData } = this.props
        const { batchNo } = this.state
        if(gifsData) {
            const start = batchNo - 1
            const end = start + 14
                return gifsData.slice(start, end)
        }
        else {
            return []
        }
    }

    getItems = () => {
        const currentContent = this.getCurrentContent()
        const skeletonArray = [0,1,2,3,4,5,6,7,8,9]
        return currentContent
                ? currentContent.map(
                    (gif, index) => {
                        const gifUrl = gif.images.preview_webp && gif.images.preview_webp.url
                        const gifTitle = gif.title
                        if(gifUrl && gifTitle) {
                            return <div className={`gallery__item gallery__item--${index+1}`}>
                                    <img
                                        src={gif.images.preview_webp.url}
                                        alt={gif.title}
                                        className="gallery__img"
                                        />
                                </div>
                        }
                    }
                )
                : skeletonArray.map( (data, index) => {
                    return <div className={`gallery__item gallery__item--${index+1}`}>
                            <div className="skeleton"></div>
                        </div>
                } )
    }

    render() {
        return (
            <div className="gallery">
                {this.getItems()}
            </div>
        );
    }
}

export default GridContainer