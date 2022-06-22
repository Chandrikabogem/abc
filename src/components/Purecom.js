import React, { PureComponent } from 'react'

 class Parentcom extends PureComponent {
  render() {
      console.log("Pure Component")
    return (
      <div>
        Pure Component {this.props.message}
      </div>
    )
  }
}

export default Parentcom
