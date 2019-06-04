import React from 'react'
import './GridContainer.css'

class GridContainer extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            batchNo: 1,
            playIndex: null,
        }
    }


    handleScroll = (event) => {
        const { batchNo } = this.state
        const { gifsData } = this.props
        if(event.deltaY >= 3) {
            batchNo !== gifsData.length && this.setState({batchNo: batchNo + 1})
        }
        else if(event.deltaY <= -3) {
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

    togglePlayPause = playIndex => this.setState({playIndex}) 

    getItems = () => {
        const currentContent = this.getCurrentContent()
        return currentContent ? currentContent.map(this.getGalleryItem) : []
        }
        
    getGalleryItem = (gif, index) => {
        const { playIndex } = this.state
        const gifUrl = gif.images.preview_webp && gif.images.preview_webp.url
        const gifStaticUrl = gif.images.original_still && gif.images.original_still.url
        const gifTitle = gif.title
        if(gifUrl && gifTitle) {
            return <div className={`gallery__item gallery__item--${index+1}`}>
                    <img
                        key={gif.id}
                        src={playIndex === index ? gifUrl : gifStaticUrl}
                        alt={gif.title}
                        className="gallery__img"
                        onMouseEnter={() => this.togglePlayPause(index)}
                        onMouseLeave={() => this.togglePlayPause(null)}
                        />
                </div>
        }
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