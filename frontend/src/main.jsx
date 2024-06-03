import React from 'react'
import { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Switch from './pages/Switch.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx'
import { AuthContext } from './contexts/AuthContext.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Navigate, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/SignUp.jsx'


const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  const location = useLocation();
  return !user ? (
    <Navigate to="/login" state={{ from: location }} />
  ) : (
    children
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<PrivateRoute><Home /></PrivateRoute>}></Route>
      <Route path='login' element={<Login/>} ></Route>
      <Route path='signup' element={<Signup/>} ></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
        <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)

