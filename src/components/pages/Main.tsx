
// Deals with routing, element rendering errors and imports the majority of the styles

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import '../../styles/reset.css'
import '../../styles/variables.css'
import '../../styles/keyframes.css'
import '../../styles/media-queries.css'
import '../../styles/general.css'
import '../../styles/main.css'

import Layout from '../../components/templates/Layout'
import Save from '../../components/organisms/Save'
import Update from '../../components/organisms/Update'
import Delete from '../../components/organisms/Delete'
import Error from '../../components/atoms/Error'

const Routes = createBrowserRouter([{
  path:'/', element:<Layout/>, errorElement:<Error/>, children:[
      { path : '/Save', errorElement:<Error/>, element:<Save/> }, 
      { path : '/Update', errorElement:<Error/>, element:<Update/> }, 
      { path : '/Delete', errorElement:<Error/>, element:<Delete/> }, 
  ]
}])

ReactDOM.createRoot(document.getElementById('root')!).render(    
  <React.StrictMode>
      <RouterProvider router={Routes}/>
  </React.StrictMode>
)
