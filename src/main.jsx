import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from 'react-router'
import App from './App.jsx'
import "./style.css";

const routerInput = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
])

createRoot(document.getElementById('rendere')).render(
  <StrictMode>
    <RouterProvider router={routerInput} />
  </StrictMode>,
)
