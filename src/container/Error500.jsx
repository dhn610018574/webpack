import React ,{Component} from 'react'
import '../styles/404.scss'
export default class Abnormal extends Component{
  render(){
    return (
      <div className='bg'>
        <img src="../images/gz.png" alt="" className='img' />
        <p className='text-center font-28 mtb30'>哎呀，网络不给力</p>
        <a href="javascript:;" className='block font-28 text-center'>点击刷新</a>
      </div>
    )
  }
}