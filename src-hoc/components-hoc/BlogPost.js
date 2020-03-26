import React from 'react'
import DataSource from '../data/DataSource'
import withSubscription from './withSubscription'

class BlogPost extends React.Component {
  updateBlogPost = () => {
    const blogPost = this.props.data
    const newBlogPost = { ...blogPost }
    newBlogPost.msg = `我是被修改后的文章${Date.now()}`
    DataSource.updateBlogPost(newBlogPost)
  }
  render() {
    return (
      <>
        <div>{this.props.data.msg}</div>
        <button onClick={this.updateBlogPost}>修改博客</button>
      </>
    )
  }
}
export default withSubscription(BlogPost, (DataSource, props) =>
  DataSource.getBlogPost(props.id)
)
