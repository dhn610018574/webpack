import React , {Component} from 'react'
import '../styles/gyplan.scss'
export default class Gyplan extends Component {
    render () {
        return (
            <div>
                <div className="protocol-title">《出借人服务协议》</div>
                <div className="party">
                    <div className='parter fl'>甲方（出借人）：上海信而富企业管理有限公司</div>
                    <div className='name fr'>小哥哥</div>
                </div>
            </div>
        )
    }
}