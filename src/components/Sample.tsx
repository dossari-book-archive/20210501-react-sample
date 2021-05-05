import { Component } from 'react'

export default class Sample extends Component<{
  stringValue: string
  numberValue: number
}> {
  render() {
    return (
      <div>渡された値は「{this.props.stringValue}」, 「{this.props.numberValue}」です</div>
    )
  }
}
