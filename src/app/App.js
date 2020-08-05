import React, {Component} from 'react'
import { connect } from 'react-redux'
import './App.css';
import { ChangeButtonState, GetButtonState } from '../core/sockets.js'

class App extends Component {

  render(){
    return (
      <div className="AppMain">
          <button onClick= {ChangeButtonState}>{this.props.buttonState}</button>
      </div>
    );
  }

  componentDidMount() {
    GetButtonState()
  }

}

const mapStateToProps = state => ({
  buttonState: state.buttonState 
})

export default connect(mapStateToProps)(App)

