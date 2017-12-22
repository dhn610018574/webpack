import React ,{Component} from 'react'

export default class BannerContent extends Component {
  render(){
    return(
      <div className='plr30'>
        <h5 className='font-32 text-center mtb30 col666'>信而富--2017年首家登陆纽交所的中国企业</h5>
        <p className='text-center mtb30 font-28 col666'>—— 美国纽交所上市公司 ——</p>
        <p className='text-left mtb30 font-28 col666'>信而富于2017.4.28美国纽约证券交易所上市。(股票代码：XRF )</p>
        <p className='text-left mtb30 font-28 col666'>信而富严格遵守SEC规定，财务年报公开透明、数据真实准确。</p>
        <p className='text-left mtb30 font-28 col666'>精彩瞬间：</p>
        <img src="../images/n1.png" alt="" className='mtb30'/>
        <img src="../images/n2.png" alt="" className='mtb30'/>
        <img src="../images/n3.png" alt="" className='mtb30'/>
        <img src="../images/n4.png" alt="" className='mtb30'/>
        <p className='font-28 text-center mtb30'>上市精彩瞬间，未来精彩无限</p>
        <p className='font-28 text-center'>从2001到2017</p>
        <p className='font-28 text-center'>我们实现了质的飞跃</p>
        <p className='font-28 text-center'>从2017到未来</p>
        <p className='font-28 text-center'>更值得期待</p>
      </div>
    )
  }
}