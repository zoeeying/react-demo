import React, { Component } from 'react'
import './index.css'
import { CSSTransition } from 'react-transition-group'

// 使用CSS3来实现动画
// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       isShow: true
//     }
//   }
//   render() {
//     const { isShow } = this.state
//     return (
//       <>
//         <div className={isShow ? 'show' : 'hide'} />
//         <button onClick={this.onToggle}>toggle</button>
//       </>
//     )
//   }

//   onToggle = () => {
//     this.setState(prev => ({ isShow: !prev.isShow }))
//   }
// }

// 使用react-transitioon-group动画库来实现动画
// CSSTransition
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: true
    }
  }
  render() {
    const { isShow } = this.state
    return (
      <>
        <CSSTransition
          in={isShow} // 相当于开关
          timeout={2000} // 动画持续时间
          classNames="avatar" // CSS类名的前缀
          unmountOnExit // 最后图片隐藏掉的时候，删掉DOM元素
          appear // 出现的时候就有动画效果
        >
          <div className="divBox" />
        </CSSTransition>
        <div>
          <button onClick={this.onToggle}>toggle</button>
        </div>
      </>
    )
  }

  onToggle = () => {
    this.setState(prev => ({ isShow: !prev.isShow }))
  }
}

export default App
