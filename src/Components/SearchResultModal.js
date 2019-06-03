import React from 'react'
import { connect } from 'react-redux'
import { setModalVisibility } from '../actions'
import { Modal, Typography } from 'antd'
import GridContainer from './GridContainer'

const { Text } = Typography

class SearchResultModal extends React.Component {

    render() {
        const { visibility, setModalVisibility, gifsData, searchText } = this.props

        return(
            <Modal
                title={<span>{'Your Gif Results for '}<Text mark>{searchText}</Text></span>}
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
