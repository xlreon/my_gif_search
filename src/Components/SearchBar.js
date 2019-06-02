import React from 'react';
import './SearchBar.scss';

const SearchOptions = {
    SearchClose: 'search',
    SearchOpen: 'search open'
}

export default class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchState: SearchOptions.SearchClose
        }
    }

    toggleSearch = () => {
        const { searchState } = this.state
        searchState === SearchOptions.SearchClose ? this.openSearch() : this.closeSearch()
    }

    openSearch = () => this.setState({searchState: SearchOptions.SearchOpen})

    closeSearch = () => this.setState({searchState: SearchOptions.SearchClose})

    render() {
        const { searchState } = this.state

        return (
            <div className={searchState}>
                <input type="search" className="search-box" />
                <span className="search-button" onClick={this.toggleSearch}>
                    <span className="search-icon"></span>
                </span>
            </div>
        );
    }
}