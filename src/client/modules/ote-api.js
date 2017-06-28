import axios from 'axios'
//import Auth from './auth'
//import dateformat from 'dateformat'
import 'es6-promise/auto'
import 'url-search-params-polyfill'

let baseUrl = `http://outtheecho/`

let baseRequest = axios.create({
  baseURL: baseUrl
})

export default {
  loadLeftTweets(searchTerm) {
    let wing = encodeURIComponent("from:owenjones OR from:abiwilks OR from:marcuschown OR from:mrjamesob OR from:thestaggers OR from:thecanarysays OR from:TomLondon6 OR from:georgemonbiot OR from:paulmasonnews")
    return baseRequest.get('functions/twitter-proxy.php?url=search/tweets.json?'+encodeURIComponent("q=" + searchTerm + "%20" + wing + "&count=10&result_type=recent&language=en&include_entities=true"))
  },
  loadRightTweets(searchTerm) {
    let wing = encodeURIComponent("from:toadmeister OR from:Melanielatest OR from:DanielJHannan OR from:isabelhardman OR from:montie OR from:toryboypierce OR from:juliaHB1 OR from:iaindale OR from:DPJHodges")
    return baseRequest.get('functions/twitter-proxy.php?url=search/tweets.json?'+encodeURIComponent("q=" + searchTerm + "%20" + wing + "&count=10&result_type=recent&language=en&include_entities=true"))
  }
}
