import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Pages/Login'
import Forum from './Pages/Forum'
import Events from './Pages/Events'
import Showcase from './Pages/Showcase'
import Features from './Pages/Features'
import PageNotFound from './Pages/PageNotFound'
import About from './Pages/About'
import Privacy from './Pages/Privacy'
import Terms from './Pages/Terms'
import ContactUs from './Pages/ContactUs'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <PageNotFound/>
  },
  {
    path: '/features',
    element: <Features/>
  },
  {
    path: '/forums',
    element: <Forum/>
  },
  {
    path: '/events',
    element: <Events/>
  },
  {
    path: '/showcase',
    element: <Showcase/>
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/privacy',
    element: <Privacy/>
  },
  {
    path: '/terms',
    element: <Terms/>
  },
  {
    path: '/contact-us',
    element: <ContactUs/>
  },
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
