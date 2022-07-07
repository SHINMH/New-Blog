import React, { FunctionComponent } from 'react'

export type PostProps = {
  slug: string
  data: {
    [key: string]: any
  }
  content: string
}

const PostItem: FunctionComponent<PostProps> = ({ slug, data, content }) => {
  return (
    <div>
      <div>{slug}</div>
      <div>{content}</div>
    </div>
  )
}

export default PostItem
