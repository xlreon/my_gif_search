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
            searchState: SearchOptions.SearchClose,
            searchTerm: ""
        }
    }

    toggleSearch = () => {
        const { searchState, searchTerm } = this.state
        const { toggleModalVisibility } = this.props
        if(searchTerm) {
            toggleModalVisibility(true)
            this.setState({searchTerm: ""})
        }
        searchState === SearchOptions.SearchClose ? this.openSearch() : this.closeSearch()
    }

    openSearch = () => this.setState({searchState: SearchOptions.SearchOpen})

    closeSearch = () => this.setState({searchState: SearchOptions.SearchClose})

    setFocus = () => {
        const { searchState } = this.state
        const autoFocus = searchState === SearchOptions.SearchOpen
        autoFocus && this.refs.searchInput.focus()
    }

    handleChange = (event) => this.setState({searchTerm: event.target.value})

    render() {
        const { searchState, searchTerm } = this.state
        this.setFocus()
        return (
            <div className={searchState}>
                <input
                    ref="searchInput"
                    type="search"
                    className="search-box"
                    value={searchTerm}
                    onChange={this.handleChange}
                />
                <span className="search-button" onClick={this.toggleSearch}>
                    <span className="search-icon"></span>
                </span>
            </div>
        );
    }
}