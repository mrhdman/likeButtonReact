import React, {Component} from 'react';
import './App.css';

class App extends Component {


  state = {
    yesCount: 0,
    noCount: 0
  }

  likeMe = () => {
    let newCount = this.state.yesCount + 1
    this.setState({
      yesCount: newCount
    })
    console.log("yes +1")
  }
  dislikeMe = () => {
    let newCount = this.state.noCount + 1
    this.setState({
      noCount: newCount
    })
    console.log("no +1")
  }


  render() {
    return (
      <div className="App">
      <h1>Do you like?</h1>
      <button className="yesButton" onClick={this.likeMe}>YES: {this.state.yesCount}</button>
      <button className="noButton" onClick={this.dislikeMe}>NO: {this.state.noCount}</button>
    </div>
    )
  }
}

export default App;
