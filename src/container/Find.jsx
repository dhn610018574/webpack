import React ,{Component} from 'react'
import {Router, Route, Link, browserHistory, IndexRoute, hashHistory} from 'react-router'
import {
  Header,
  FindBanner,
  FinanceNews,
  NewList,
  TabBar
} from '../components'
export default class Find extends Component {
  render() {
    return (
      <div>
        <Header/>
        <FindBanner/>
        <div className="line"></div>
        <FinanceNews/>
        <NewList/>
        <TabBar/>
      </div>     
    )
  }
}