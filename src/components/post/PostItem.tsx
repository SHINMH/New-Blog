import styled from '@emotion/styled'
import React, { FunctionComponent } from 'react'

export type PostProps = {
  title: string
  content: string
  summary: string
  date: string
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  border-radius: 0.2rem;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  margin: 0.875em 0.5em;
  transition: 0.3s box-shadow;
  &:hover {
    cursor: pointer;
    z-index: 5;
    background: #fff;
    border: none;
    -webkit-box-shadow: 0 1px 3px 0 #bcbdbd, 0 0 0 1px #d4d4d5;
    box-shadow: 0 1px 3px 0 #bcbdbd, 0 0 0 1px #d4d4d5;
    -webkit-transform: translateY(-3px);
    transform: translateY(-3px);
  }
`
const CardContent = styled.div`
  flex: 1;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
`

const CardImageWapper = styled.div`
  position: relative;
  display: block;
  flex: 0 0 auto;
  padding: 0;
  background: rgba(0, 0, 0, 0.05);
`

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  height: auto;
  border-radius: inherit;
`

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 3px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 20px;
  font-weight: 700;
`
const Date = styled.div`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.7;
  float: right;
`

const Extra = styled.div`
  flex-grow: 0;
  padding: 15px;
  border-top: 1px solid rgba(0, 0, 0, 0.05) !important;
`

const Summary = styled.div`
  margin-top: 0.5em;
  -webkit-line-clamp: 2;
  display: -webkit-box;
`

const PostItem: React.FC<PostProps> = ({ title, content, summary, date }) => {
  return (
    <Card>
      <CardImageWapper>
        <CardImage
          src={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ6yI5v-1UCyMx8CdTpABg9QzItPHcPLZh7_1ZnzOpTg&s'
          }
        />
      </CardImageWapper>
      <CardContent>
        <Title>{title}</Title>
        <Summary>{summary}</Summary>
      </CardContent>
      <Extra>
        <Date>{date}</Date>
      </Extra>
    </Card>
  )
}

export default PostItem
