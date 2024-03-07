import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home/HomePage'
import About from './components/About/About.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Career from './components/Career/Career.jsx'
import GalleryComponent from './components/Gallery/GalleryComponent.jsx'
import Card from './components/Cards/Cards'
import MainBody from './components/Mainbody/MainBody.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/aboutMpcl/about", element: <About /> },
      { path: "/career", element: <Career /> },
      { path: "/aboutMpcl/gallery", element: <GalleryComponent /> },
      { path: "/services", element: <MainBody/> },


    ] // TODO: fill this with actual
  }
])

                                    
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}


    <RouterProvider router={router} />
  </React.StrictMode>,
)
