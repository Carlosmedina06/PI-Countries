import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { StyleLayout } from './LayoutStyle'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar/>
      <StyleLayout>{children}</StyleLayout>
      <Footer/>
    </>
  )
}

export default Layout
