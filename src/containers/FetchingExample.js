import React, { Component } from 'react'
import { withFirebase } from '../components/FirebaseContext'

class FetchingExample extends Component {
  state = {
    test: null,
  }
  componentDidMount() {
    const { firebase } = this.props
    firebase
      .database()
      .ref('/test')
      .once('value')
      .then(snapshot => {
        this.setState({
          test: snapshot.val(),
        })
      })
  }
  render() {
    const { test } = this.state

    if (!test) {
      return null
    }

    return (
      <div>
        <h4>string test data : {test}</h4>
      </div>
    )
  }
}

export default withFirebase(FetchingExample)
