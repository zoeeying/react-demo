const comments = [
  {
    id: 1,
    msg: 'Hello1'
  },
  {
    id: 2,
    msg: 'Hello2'
  },
  {
    id: 3,
    msg: 'Hello3'
  }
]

const blogPosts = [
  {
    id: 1,
    msg: '文章1'
  },
  {
    id: 2,
    msg: '文章2'
  },
  {
    id: 3,
    msg: '文章3'
  }
]

let listeners = []

const DataSource = {
  getComments() {
    return comments
  },
  getBlogPosts() {
    return blogPosts
  },
  getBlogPost(id) {
    return blogPosts.find(item => item.id === id)
  },
  addBlogPost(blog) {
    blogPosts.push(blog)
    DataSource.broadCast()
  },
  updateBlogPost(blog) {
    let hasUpdate = false
    for (let i = 0; i < blogPosts.length; i++) {
      const curBlog = blogPosts[i]
      if (blog.id === curBlog.id) {
        blogPosts[i] = Object.assign({}, curBlog, blog)
        hasUpdate = true
      }
    }

    if (hasUpdate) {
      DataSource.broadCast()
    }
  },
  addComment(comment) {
    comments.push(comment)
    DataSource.broadCast()
  },
  addChangeListener(handler) {
    listeners.push(handler)
  },
  removeChangeListener(handler) {
    listeners = listeners.filter(item => item !== handler)
  },
  broadCast() {
    listeners.map(listener => listener())
  }
}
export default DataSource
