import React ,{Component} from 'react'
import '../styles/notice.scss'
export default class Notice extends Component {
  render() {
    return (
      <div className="info">
        <h2>系统公告</h2>
        <h3>尊敬的客户：</h3>
        <p className="sj">信而富理财APP正在升级维护中，给您带来不便请见谅！</p>
        <p className="tel">客服电话：<i>400-688-8692</i></p>
        <div className="right">
          <p>上海信而富企业管理有限公司</p>
          <p>2017年8月23日</p>
        </div>
        <a href="#">退出应用</a>
      </div>     
    )
  }
}