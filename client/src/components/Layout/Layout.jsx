import React from 'react'
import Footer from '../Footer/Footer'

import Navbar from '../Navbar/Navbar'

import { StyleLayout } from './LayoutStyle'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <StyleLayout>{children}</StyleLayout>
      <Footer />
    </>
  )
}

export default Layout
