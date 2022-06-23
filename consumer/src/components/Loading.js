import React, { Component } from 'react'

export class Loading extends Component {
  render() {
    return (<>{this.props.loading &&
<div className="h-100 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary  " style={{width: '3rem',height: '3rem',marginTop:'30rem'}} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      </div>
        }
    </>
    )
  }s
}

export default Loading