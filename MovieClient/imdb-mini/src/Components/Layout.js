import React from 'react'
import { Outlet } from "react-router-dom";

//racfe: short key
const Layout = () => {
  return (
    <main>
      <Outlet/>
    </main>
  )
}

export default Layout
