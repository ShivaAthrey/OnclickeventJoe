// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {showHide: true}
  showHide() {
    const {showHide} = this.state
    if (showHide === true) {
      return {
        <div className="joecontainer">
          <h1>Joe</h1>
        </div>
      }
    }
  }
  show() {
    const {showHide} = this.state
    if (showHide === true) {
      return {
        <div className="joecontainer">
          <h1>Jonas</h1>
        </div>
      }
    }
  }

  render() {
    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttoncontainer">
          <button className="button" onClick={showHide}>
            Showhide/FirstName
          </button>
          <button className="button" onClick={show}>
            Showhide/lastName
          </button>
        </div>
      </div>
    )
  }
}

export default ShowHide
