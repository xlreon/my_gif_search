import React from 'react'
import { connect } from 'react-redux'
import { setModalVisibility } from '../actions'
import { Modal } from 'antd';

class SearchResultModal extends React.Component {

    render() {
        const { visibility, setModalVisibility } = this.props
        return(
            <Modal
                title={"Gif Results"}
                visible={visibility}
                width={"90%"}
                height={"90%"}
                onCancel={() => setModalVisibility(false)}
                footer={null}
            />
        );
    }
}

export default connect(null,{
    setModalVisibility
})(SearchResultModal)
