import { createContext , useContext, useState } from "react";
type AuthType = {
    user : string;
    setUser : React.Dispatch<React.SetStateAction<string>>;
    login : (data : string)=>void;
    logout : ()=>void
}

const AuthContext = createContext({} as AuthType);
export const AuthProvider = ({children} : {children:React.ReactNode})=>{
    const [user,setUser] = useState<string>('');
    const login = (data:string)=>{
        setUser(data);
    }
    const logout = ()=>{
        setUser('');
    }
    return (
        <AuthContext.Provider value={{ user,setUser,login,logout }}>{children}</AuthContext.Provider>
    )
}

export const useAuth = ()=>{
    return useContext(AuthContext);
}