import React ,{Component} from 'react'
import '../styles/upgrade.scss'
export default class Upgrade extends Component {
  render(){
    return (
      <div>
        <img src="../images/upgrade.png" alt="" className='ma mb30'/>
        <p className='font-32  text-center'>欢迎来到全新的信而富理财</p>
        <p className='font-32 text-center mb60'>您眼光真好！</p>
        <p className='font-28 text-center mb60'>特为您送上<i>200</i>元返现红包</p>
        <a href="javascript:;" className='btn'>领取红包</a>
        <h5 className='font-32 text-center mb60'>活动规则</h5>
        <p className='font-28 mb20 plr30'>1.升级新版信而富理财APP的用户可领取200元返现红包；</p>
        <p className='font-28 plr30'>2.返现红包可在“我-优惠红包”中查看，需投资时使用，不可直接提现。使用规则详见返现红包使用规则。</p>
      </div>
    )
  }
}