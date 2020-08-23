import React, { Component } from 'react'
import Child from './Child'
export default class App extends Component {
  state = {
    count: 1,
  }

  // 如果把实例方法传递给子组件，那么在父组件更新的时候
  // 由于函数引用没有变，所以不会触发子组件的重新渲染
  handleClick = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      }
    })
  }

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.handleClick}>点击我</button>
        <Child data={1} onClick={this.handleClick} />
      </>
    )
  }
}
