import React from 'react'
import DataSource from '../data/DataSource'

function withSubscription(WrappedComponent, selectData) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        data: selectData(DataSource, props)
      }
    }
    componentDidMount() {
      DataSource.addChangeListener(this.handleChange)
    }
    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange)
    }
    handleChange = () => {
      this.setState({
        data: selectData(DataSource, this.props)
      })
    }

    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />
    }
  }
}

export default withSubscription

/*
function withSubscription(WrappedComponent, selectData) {
  return class extends React.Component {}
}


// 返回高阶组件的高阶函数
function connect(selectData) {
  return function(WrappedComponent) {
    return class extends React.Component {}
  }
}
connect(DataSource => DataSource.getComments())(CommentList)
*/
