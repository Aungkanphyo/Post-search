import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Home from './views/HomePage/Home'
import PostPage, { PostLoader } from './views/PostPage/PostPage'
import Register from './views/Register'
import Protected from './views/Protected'
import Contact from './views/Contact'
import RootLayout from './RootLayout'

function App() {
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/postPage' element={<PostPage/>} loader={PostLoader}/>
      <Route path='/contact' element={
        <Protected>
          <Contact/>
        </Protected>
      }/>
      <Route path='/register' element={<Register/>}/>
    </Route>  
  )
)
  return (
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  )
}

export default App
