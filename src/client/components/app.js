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
      searchInputTerm: ''
    }

    this.searchInputChange = this.searchInputChange.bind(this)

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
    api.loadTweets()
    //.then(resp => {

    //}).catch(console.error)
  }

  render() {
    return (
      <div className="app" ref={(ref) => this._div = ref}>
        <Header siteInfo={this.state.siteInfo} />
        <Search handleSearchInputEnter={this.searchInputChange} />
      </div>
    )
  }
}
