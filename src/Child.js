import React, { memo, PureComponent } from 'react'
// export default memo((props) => {
//   console.log(props.data)
//   return (
//     <>
//       <h5>我是子组件</h5>
//     </>
//   )
// })

export default class Child extends PureComponent {
  render() {
    console.log(this.props.data)
    return (
      <>
        <h5>我是子组件</h5>
      </>
    )
  }
}
