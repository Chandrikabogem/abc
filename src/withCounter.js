import React from "react";

const DCounter = (OriginalComponent,incrementNumber) => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        increment = () => {
            this.setState(previous => {
                return { count: previous.count + incrementNumber }
            })
        }
        render() {
            return <OriginalComponent increment={this.increment}
                count={this.state.count}

            />
        }
    }
    return NewComponent
}

export default DCounter