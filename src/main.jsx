import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import Layout from './layout/Layout'
import HomePage from './pages/homepage/HomePage'
import Stats from './pages/stats/Stats'
import Timeline from './pages/timeline/Timeline'
import NotFound from './pages/notfoundpage/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        // path: "/",
        index: true,
        element: <HomePage></HomePage>
      },
      {
        path: "/timeline",
        element: <Timeline></Timeline>
      },
      {
        path: "/stats",
        element: <Stats></Stats>
      },

    ],
    errorElement: <NotFound></NotFound>
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
