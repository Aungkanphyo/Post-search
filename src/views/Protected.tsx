import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"

const Protected = ({children} : {children : React.ReactNode}) => {
  const {user} = useAuth();
  return (<div>{user ? children : <Navigate to="/register"/>}</div>)
}

export default Protected
