import React from 'react'
import { connect } from 'react-redux'
import { setModalVisibility } from '../actions'
import { Modal } from 'antd'
import GridContainer from './GridContainer'

class SearchResultModal extends React.Component {

    render() {
        const { visibility, setModalVisibility, gifsData, searchText } = this.props

        return(
            <Modal
                title={`Your Gif Results for ${searchText}`}
                visible={visibility}
                width={"90%"}
                height={"90%"}
                onCancel={() => setModalVisibility(false)}
                footer={null}
                centered
            >
                <GridContainer
                    gifsData={gifsData}
                />
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        searchText: state.searchText
    }
}

export default connect(
        mapStateToProps,
        {setModalVisibility}
    )
(SearchResultModal)
