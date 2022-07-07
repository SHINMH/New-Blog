import React, { FunctionComponent } from 'react'
import Post from 'src/pages/post'
import { PostProps } from './PostItem'

type PostListProps = {
  posts: PostProps[]
}

const PostList: FunctionComponent<PostListProps> = ({ posts }) => {
  return (
    <div>
      <Post />
    </div>
  )
}

export default PostList
