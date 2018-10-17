import React, { Component } from 'react'
import { withFirebase } from '../components/FirebaseContext'

class Signout extends Component {
  signOut = () => {
    this.props.firebase.auth().signOut()
  }
  render() {
    return (
      <button
        style={{
          marginLeft: 10,
          borderRadius: '0.5rem',
          backgroundColor: '#fff',
          border: '2px solid #ffa400',
          fontFamily: 'sans-serif',
          padding: '0.5rem 0.5rem',
          color: '#0f0f0f',
        }}
        onClick={this.signOut}
      >
        Sign Out
      </button>
    )
  }
}

export default withFirebase(Signout)
