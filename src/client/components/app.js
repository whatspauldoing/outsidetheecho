import React from 'react'
import { Component } from 'react'
import { reactDom } from 'react-dom'
import { lodash } from 'lodash'
import api from '../modules/ote-api'
import FaStar from 'react-icons/lib/fa/star'

import { Header } from './header'
import { Search } from './search'
import { SearchResults } from './searchresults'

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
      searchTerms: [],
      leftTweets: [],
      rightTweets: []
    }

    this.searchInputChange = this.searchInputChange.bind(this)
    this.removeSearchTerm = this.removeSearchTerm.bind(this)

  }
  /* Timeline methods that I thought I would leave in for ya... */
  componentDidMount() {
    // Handy line to uncomment for preloaded results:
    // this.searchInputChange("DUP")
  }

  componentWillMount() {
  }

  componentWillUpdate() {
  }

  componentDidUpdate() {
  }

  searchInputChange(e) {
    // If we've made it this far it is because someone hit the enter key further down the chain
    // Create a copy of the search terms and push append a new search term onto the array if the
    // text input isn't empty. TODO: check its not there already?
    let searchTerms = this.state.searchTerms
    {(e != '') ? searchTerms.push(e) : null}
    // Set State:
    this.setState({
      searchTerms: searchTerms
    })

    // Call the api with our new search term and append it to the leftTweets array
    api.loadLeftTweets(e)
    .then(resp => {
      let leftTweets = this.state.leftTweets
      leftTweets.push(...resp.data.statuses)
      // Set State:
      this.setState({
        leftTweets: leftTweets
      })
    }).catch(console.error)

    // Call the api with our new search term and append it to the rightTweets array
    api.loadRightTweets(e)
    .then(resp => {
      let rightTweets = this.state.rightTweets
      rightTweets.push(...resp.data.statuses)
      // Set State:
      this.setState({
        rightTweets: rightTweets
      })
    }).catch(console.error)

  }

  removeSearchTerm(searchTerm) {
    // Clear all insightful conservative though that contains the search term
    let rT = []
    let rightTweets = this.state.rightTweets.filter(function(i) {
    	if (i.text.indexOf(searchTerm) == -1) {
         rT.push(i)
       }
    })

    // Clear all useless leftwing "thought" on the matter too
    let lT = []
    let leftTweets = this.state.leftTweets.filter(function(i) {
    	if (i.text.indexOf(searchTerm) == -1) {
         lT.push(i)
       }
    })

    // Remove the search term from the array of search terms
    let searchTerms = this.state.searchTerms.filter(function(i) {
    	return i != searchTerm
    })

    // Hack fix to clear both columns as not all tweets have the keywords in. I'm not clear from the API how it is working though
    // If there are no searchTerms clear both columns of tweets:
    {(searchTerms.length == 0) ? (rT=[], lT= []) : null}

    // Set State: (all at once for a change)
    this.setState({
      searchTerms: searchTerms,
      leftTweets: lT,
      rightTweets: rT
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
        <SearchResults
          leftTweets={this.state.leftTweets}
          rightTweets={this.state.rightTweets}
        />
        <div className="footer">
          <div className="footer__container">
            <div className="footer__holder">
              <p>Hope you enjoy it, if we get loads of views it will probably hit the API limit and die, but I'll cross that bridge when I come to it. Cheers!</p>
              <p>Thanks to:<br/>
                  <a href='https://github.com/hatemzidi' target='_blank'>https://github.com/hatemzidi</a> for the twitter-proxy code.<br/>
                  <a href='https://github.com/carhartl/jquery-cookie' target='_blank'>https://github.com/carhartl/jquery-cookie</a> for the cookies<br/>
                  <a href='https://twitter.com/rufushound' target='_blank'>@rufushound</a> for the lefties list<br/>
                  <a href='https://www.reddit.com/user/Hedgehogkilla' target='_blank'>https://www.reddit.com/user/Hedgehogkilla</a> for the righties list.
              </p>
              <p>Email: <a href='mailto:whatspauldoing@gmail.com'>Whatspauldoing</a> with comments/suggestions/right wingers/left wingers.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
