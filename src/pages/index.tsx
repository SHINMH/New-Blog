import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@styles/Home.module.css'
import styled from '@emotion/styled'
import Header from '@components/common/Header'
import Footer from '@components/common/Footer'
import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import { getAllPosts } from 'src/util/mdUtil'
import PostList from '@components/main/PostList'

const Content = styled.div`
  height: 1000px;
`

const Home: NextPageWithLayout = props => {
  console.log(props)
  return (
    <Content>
      <PostList posts={props} />
    </Content>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <div className={styles.container}>
      <Header />
      {page}
      <Footer />
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const posts = getAllPosts()

  return { props: { posts } }
}
