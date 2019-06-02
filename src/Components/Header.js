import React from 'react';
import './Header.css'

export default class Header extends React.Component {

    render() {
        return (
            <div class="text-box">
                <h1 class="heading-primary">
                    <span class="heading-primary-main">
                        My gif search
                    </span>
                    <span class="heading-primary-sub">
                        Describe you with a Gif
                    </span>
                </h1>
            </div>
        );
    }
}