import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Hoom from './Components/Root/Hoom/Hoom.jsx';
import Error from './Components/Root/Error/Error.jsx';
import Joob from './Jobs/Joob.jsx';
import Blog from './Components/Root/Blogs/Blog.jsx';
import Aplied from './Components/Root/Aplied Job/Aplied.jsx';
import Statices from './Components/Root/Statices/Statices.jsx';
import JobDtl from './Components/Root/job Delatels/JobDtl.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Hoom></Hoom>
      },
      {
        path:'/job',
        element:<Joob></Joob>
      },
      {
        path:'/blogs',
        element:<Blog></Blog>
      },
      {
        path:'/aplied',
        element:<Aplied></Aplied>,
        loader:()=> fetch('../jobs.json')
        
      },
    {
      path:'/statics',
      element:<Statices></Statices>
    },
    {
      path:'/job/:id',
  
      element:<JobDtl></JobDtl>,
      loader: ()=> fetch('../jobs.json')
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>,
)
