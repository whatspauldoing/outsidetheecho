import React from 'react'
import { Component } from 'react'
import { reactDom } from 'react-dom'
import { lodash } from 'lodash'
import api from '../modules/ote-api'
import FaStar from 'react-icons/lib/fa/star'

import { Header } from './header'
import { Search } from './search'

import '../style.scss'

window.React = React

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      siteInfo: {
        h1 : "Outside The Echo",
        h4 : "Providing political balance to the social media echo chamber",
        intro1 : "I have taken a selection of prominent and active left/right wing political commentators and pulled their feeds into this page to display their often opposing views side by side.",
        intro2 : "If you want to look up any particular topic type your search term into the box below and hit enter."
      },
      searchInputTerm: '',
      searchTerms: ["Boris Johnson","Jeremy Corbyn","NHS","Grenfall Tower"]
    }

    this.searchInputChange = this.searchInputChange.bind(this)
    this.removeSearchTerm = this.removeSearchTerm.bind(this)

  }

  componentDidMount() {
  }

  componentWillMount() {
  }

  componentWillUpdate() {
  }

  componentDidUpdate() {
  }

  searchInputChange(e) {
    let searchTerms = this.state.searchTerms
    {(e != '') ? searchTerms.push(e) : null}
    this.setState({
      searchTerms: searchTerms
    })
    api.loadTweets()
    //.then(resp => {

    //}).catch(console.error)
  }

  removeSearchTerm(e) {
    let searchTerms = this.state.searchTerms.filter(function(i) {
    	return i != e
    })
    this.setState({
      searchTerms: searchTerms
    })
  }

  render() {
    return (
      <div className="app" ref={(ref) => this._div = ref}>
        <Header
          siteInfo={this.state.siteInfo}
        />
        <Search
          searchTerms={this.state.searchTerms}
          handleSearchInputEnter={this.searchInputChange}
          handleRemoveSearchTerm={this.removeSearchTerm}
        />
      </div>
    )
  }
}
