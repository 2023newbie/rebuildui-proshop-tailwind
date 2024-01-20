import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Home from './screens/Home.jsx'
import Login from './screens/Login.jsx'
import Register from './screens/Register.jsx'

import './index.css'

const router = createBrowserRouter([
  { path: '/', element: <App />, children: [
    { index: true, element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
  ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
