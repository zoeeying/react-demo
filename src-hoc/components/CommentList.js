import React from 'react'
import DataSource from '../data/DataSource'
import Comment from './Comment'

export default class CommentList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: DataSource.getComments()
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
      comments: DataSource.getComments()
    })
  }
  addComment = () => {
    DataSource.addComment({ id: Date.now(), msg: `Hello${Date.now()}` })
  }
  render() {
    return (
      <>
        {this.state.comments.map(item => (
          <Comment comment={item} key={item.id}></Comment>
        ))}
        <button onClick={this.addComment}>添加评论</button>
      </>
    )
  }
}
