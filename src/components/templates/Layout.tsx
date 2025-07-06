
// Layout, organizes the overall structure of the application.

import { Outlet } from "react-router-dom"
import Header from "../organisms/Header"
import Footer from "../organisms/Footer"

const Layout = () => {

  console.log('Rendering Layout')

  return (

    <>
    
      <Header/>
      <Outlet/>
      <Footer/>
  
    </>

  )

}

export default Layout
