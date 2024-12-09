import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Tutorials from './pages/Tutorials.jsx'
import EditTutorials from './pages/EditTutorials.jsx'
import Login from './pages/Login.jsx'
import Users from './pages/Users.jsx'

const router = createBrowserRouter([
  {
    element: <Login />,
    path: "/",
  },
  {
    element: <Tutorials />,
    path: "/tutorials",
  },
  {
    element: <EditTutorials />,
    path: "/tutorials/edit/:id",
  },
  {
    element: <Users />,
    path: "/users",
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
