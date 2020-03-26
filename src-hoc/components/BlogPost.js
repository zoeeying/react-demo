import React from 'react'
import DataSource from '../data/DataSource'

export default class BlogPost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogPost: DataSource.getBlogPost(props.id)
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
      blogPost: DataSource.getBlogPost(this.props.id)
    })
  }
  updateBlogPost = () => {
    const { blogPost } = this.state
    const newBlogPost = { ...blogPost }
    newBlogPost.msg = `我是被修改后的文章${Date.now()}`
    DataSource.updateBlogPost(newBlogPost)
  }
  render() {
    const { blogPost } = this.state
    return (
      <>
        <div>{blogPost.msg}</div>
        <button onClick={this.updateBlogPost}>修改博客</button>
      </>
    )
  }
}
