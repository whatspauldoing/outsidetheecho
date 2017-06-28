import React from 'react'
import { PropTypes , Component } from 'react'

export class SearchResults extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="search-results">
        <div className="search-results__container">
          <div className="search-results__holder">
            <div className="search-results__left-col">
              {this.props.leftTweets.map(tweet =>
                <div className="search-results__tweet search-results__tweet-left" key={tweet.id_str}>
                  {tweet.text}
                </div>
              )}
            </div>
            <div className="search-results__right-col">
              {this.props.rightTweets.map(tweet =>
                <div className="search-results__tweet search-results__tweet-right" key={tweet.id_str}>
                  {tweet.text}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

}

SearchResults.propTypes = {
  leftTweets: PropTypes.array,
  rightTweets: PropTypes.array
}
