import PostItem from '@components/post/PostItem'
import styled from '@emotion/styled'

const PostListWapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const PostList = ({}) => {
  let test = [
    { title: '제목', summary: '요약' },
    { title: '제목', summary: '요약' },
    { title: '제목', summary: '요약' },
  ]

  return (
    <PostListWapper>
      <PostItem
        title={'제목'}
        content={
          '컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠'
        }
        summary={'요약요약요약요약요약요약요약'}
        date={'2022.08.27'}
      />
      <PostItem
        title={'제목'}
        content={'컨텐츠'}
        summary={'요약'}
        date={'2022.08.27'}
      />
      <PostItem
        title={'제목'}
        content={'컨텐츠'}
        summary={'요약'}
        date={'2022.08.27'}
      />
      <PostItem
        title={'제목'}
        content={'컨텐츠'}
        summary={'요약'}
        date={'2022.08.27'}
      />
      <PostItem
        title={'제목'}
        content={'컨텐츠'}
        summary={'요약'}
        date={'2022.08.27'}
      />
      <PostItem
        title={'제목'}
        content={'컨텐츠'}
        summary={'요약'}
        date={'2022.08.27'}
      />
      <PostItem
        title={'제목'}
        content={'컨텐츠'}
        summary={'요약'}
        date={'2022.08.27'}
      />
      <PostItem
        title={'제목'}
        content={'컨텐츠'}
        summary={'요약'}
        date={'2022.08.27'}
      />
      <PostItem
        title={'제목'}
        content={'컨텐츠'}
        summary={'요약'}
        date={'2022.08.27'}
      />
      <PostItem
        title={'제목'}
        content={'컨텐츠'}
        summary={'요약'}
        date={'2022.08.27'}
      />
    </PostListWapper>
  )
}

export default PostList
