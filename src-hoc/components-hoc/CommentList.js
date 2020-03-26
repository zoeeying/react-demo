import React from 'react'
import DataSource from '../data/DataSource'
import Comment from './Comment'
import withSubscription from './withSubscription'

class CommentList extends React.Component {
  addComment = () => {
    DataSource.addComment({ id: Date.now(), msg: `Hello${Date.now()}` })
  }
  render() {
    return (
      <>
        {this.props.data.map(item => (
          <Comment comment={item} key={item.id}></Comment>
        ))}
        <button onClick={this.addComment}>添加评论</button>
      </>
    )
  }
}
export default withSubscription(CommentList, DataSource =>
  DataSource.getComments()
)
