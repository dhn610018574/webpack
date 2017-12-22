import React, {
  Component
} from 'react'
import {
  IconTitle,
  YearRale,
  Progress,
  User,
  NewPerson,
  PlanProgress,
  Safe,
  IntrolProduct
} from '../components'
import '../styles/investDetail.scss'

export default class InvestDetail extends Component {
  // constructor(props,context){
  //   super(props);
  //   this.state = {
  //     isShow:false
  //   }
  // }
  // componentDidMount() {
  //   this.getInitData();
  // }
  render() {
    return (
      <div> 
        <IconTitle></IconTitle>
        <YearRale></YearRale>
        <Progress></Progress>
        <User></User>
        <div className="line"></div>
        <NewPerson></NewPerson>
        <div className="line"></div>
        <PlanProgress></PlanProgress>
        <div className="line"></div>
        <Safe></Safe>
        <div className="line"></div>
        <IntrolProduct></IntrolProduct>
        <a className='investBtn' href='javascript:;'>马上投资</a>
      </div>
    )
  }
}