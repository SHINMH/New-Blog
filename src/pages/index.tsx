import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@styles/Home.module.css'
import styled from '@emotion/styled'
import Header from '@components/common/Header'
import Footer from '@components/common/Footer'

const Content = styled.div`
  height: 1000px;
  margin-top: 100px;
`

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div>
        <Content>1231</Content>
      </div>
      <Footer />
    </div>
  )
}

export default Home