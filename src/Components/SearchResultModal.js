import React from 'react'
import { Modal } from 'antd';

export default class SearchResultModal extends React.Component {

    constructor(props) {
        super(props);
        const { visibility } = props
        this.state = {
            visibility
        }
    }

    render() {
        const { visibility, toggleModalVisibility } = this.props
        return(
            <Modal
                title={"Gif Results"}
                visible={visibility}
                width={"90%"}
                height={"90%"}
                onCancel={() => toggleModalVisibility(false)}
                footer={null}
            />
        );
    }

}