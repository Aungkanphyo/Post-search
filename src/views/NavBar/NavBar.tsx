import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/postPage">PostPage</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/register">Register</NavLink>
    </div>
  )
}

export default NavBar
