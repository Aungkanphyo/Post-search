import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Home from './views/HomePage/Home'
import PostPage from './views/PostPage/PostPage'
import Register from './views/Register'
import Protected from './views/Protected'
import Contact from './views/Contact'

function App() {
const router = createBrowserRouter(
  createRoutesFromElements(
    <AuthProvider>
      <Route path='/'>
        <Route index element={<Home/>}/>
        <Route path='/postPage' element={<PostPage/>}/>
        <Route path='/contact' element={
          <Protected>
            <Contact/>
          </Protected>
        }/>
        <Route path='/register' element={<Register/>}/>
      </Route>
    </AuthProvider>
  )
)

  return (
    <RouterProvider router={router}/>
  )
}

export default App
