import React, {Component} from 'react'
import '../styles/404.scss'
export default class Error404 extends Component {
  render(){
    return (
      <div className='bg'>
        <img src="../images/404.png" alt="" className='img' />
        <p className='text-center font-28 mtb30'>您访问的页面找不到了</p>
        <a href="javascript:;" className='block font-28 text-center'>返回上一页</a>
      </div>
    )
  }
}