import React from 'react'
import './GridContainer.css'

class GridContainer extends React.Component {

    getItems = () => {
        const { gifsData } = this.props
        const skeletonArray = [0,1,2,3,4,5,6,7,8,9]
        return gifsData
                ? gifsData.map(
                    (gif, index) => {
                        return <div className={`gallery__item gallery__item--${index+1}`}>
                                <iframe
                                    src={gif.embed_url}
                                    alt={gif.title}
                                    className="gallery__img"
                                    />
                            </div>
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