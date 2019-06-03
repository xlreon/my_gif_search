import React from 'react';
import { connect } from 'react-redux'
import './SearchBar.scss';
import { updateSearchText, setModalVisibility, getSearchGifs } from "../actions";

const SearchOptions = {
    SearchClose: 'search',
    SearchOpen: 'search open'
}

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchState: SearchOptions.SearchClose,
            searchTerm: ""
        }
    }

    toggleSearch = () => {
        const { searchState, searchTerm } = this.state
        const { updateSearchText, setModalVisibility, getSearchGifs } = this.props
        if(searchTerm) {
            updateSearchText(searchTerm)
            setModalVisibility(true)
            getSearchGifs(searchTerm)
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

export default connect(null,{
    updateSearchText,
    setModalVisibility,
    getSearchGifs
})(SearchBar)