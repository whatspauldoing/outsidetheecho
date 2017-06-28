import axios from 'axios'
//import Auth from './auth'
//import dateformat from 'dateformat'
import 'es6-promise/auto'
import 'url-search-params-polyfill'

let baseUrl = `/`

let baseRequest = axios.create({
  baseURL: baseUrl
})

export default {
  loadTweets() {
    return console.log("I will get tweets...")
    //let token = Auth.getToken()
    //baseRequest.defaults.headers.common['Authorization'] = `bearer ${token}`
    // return baseRequest.get('api/get-tweets')
  }
}
