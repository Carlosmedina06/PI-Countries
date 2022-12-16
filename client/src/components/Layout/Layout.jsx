import React from 'react'

import Navbar from '../Navbar/Navbar'
import { StyleLayout } from './LayoutStyle'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <StyleLayout>{children}</StyleLayout>
    </>
  )
}

export default Layout
