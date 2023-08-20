import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  increase = () => {
    this.setState(prevState => {
      if (prevState.speed >= 0) {
        return {speed: prevState.speed + 10}
      }
      return {speed: prevState.speed}
    })
  }

  applyBreak = () => {
    this.setState(prevState => {
      if (prevState.speed > 0) {
        return {speed: prevState.speed - 10}
      }
      return {speed: prevState.speed}
    })
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg">
        <h1 className="Main_headng">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="img_size"
          alt="loading..."
        />

        <h3 className="Sub_headng">
          Speed is <span>{speed}</span>Mph
        </h3>
        <p className="descrption">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="">
          <button type=" " className="button1" onClick={this.increase}>
            Accelearte
          </button>
          <button className="button2" onClick={this.applyBreak}>
            Apply Break
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
