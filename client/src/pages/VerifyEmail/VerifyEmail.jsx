import React, { Component } from 'react'

export default class VerifyEmail extends Component {
  state = {
    Success: false
  }

  componentDidMount() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });

    fetch(`http://192.168.2.84:3001/api/v1/auth/verify-email?token=${params.token || ""}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(data => {
      if(data.status === 204) {
        this.setState({
          Success: true
        })
      }
    })
  }

  render() {
    return (
      <div id="App">
        <div id="Content">
          <h1>Verify Email</h1>
          <p>Success: {this.state.Success ? "true" : "false"}</p>
        </div>
      </div>
    )
  }
}
