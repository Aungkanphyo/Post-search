import { Outlet } from "react-router-dom"
import NavBar from "./views/NavBar/NavBar"

const RootLayout = () => {
  return (
    <>
      <NavBar/>
      <Outlet/>
    </>
  )
}

export default RootLayout
