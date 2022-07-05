import React, { ReactNode, FunctionComponent } from 'react'
import Header from '@components/common/Header'
import Footer from '@components/common/Footer'

type TemplateProps = {
  children: ReactNode
}

const Template: FunctionComponent<TemplateProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Template
