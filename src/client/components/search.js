import React from 'react'
import { PropTypes , Component } from 'react'

export class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleAddTerm = this.handleAddTerm.bind(this);
  }

  handleUserInput(searchTerm) {
    this.setState({
      searchTerm: searchTerm
    })
  }

  handleAddTerm(searchTerm) {
    this.props.handleSearchInputEnter(searchTerm)
    this.setState({
      searchTerm: ''
    })
  }

  render() {
    return (
      <div className="search">
        <div className="search__container">
          <div className="search__holder">
            <SearchBar handleSearchInputEnter={this.handleAddTerm}
              handleSearchInputChange={this.handleUserInput}
              searchTerm={this.state.searchTerm}
            />
          </div>
        </div>
      </div>
    )
  }

}

const SearchBar = React.createClass({

  handleChange() {
    this.props.handleSearchInputChange(
      this.refs.searchTerm.value
    )
  },

  handleEnter(e) {
    if (e.key === 'Enter') {
      this.props.handleSearchInputEnter(
        this.refs.searchTerm.value
      )
    }
  },

  render() {
    return (
        <input type="text"
          name="ote-search-term"
          placeholder="Define the conversation"
          ref="searchTerm"
          value={this.props.searchTerm}
          onChange={this.handleChange}
          onKeyPress={this.handleEnter}
        />
    );
  }
});


Search.propTypes = {
  handleSearchInputEnter: PropTypes.func
}
