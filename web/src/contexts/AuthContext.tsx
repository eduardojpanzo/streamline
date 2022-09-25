import { createContext, useEffect, useState } from "react";
import { parseCookies, setCookie, destroyCookie} from "nookies";
import { toast } from "react-toastify";
import { useHandleQuery } from "../hooks/useHandleQueryUser";

type KeepTokenProps ={
    token:string,
    user:User
}

type User = {
    id: string,
    name:string,
    email:string,
    avatar_img:string,
}

type AuthContextType = {
    user:User | null
    isAuthenticated: boolean;
    keepingToken:({token,user}:KeepTokenProps)=> Promise<void>;
    logout:()=> void;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({children}:{children:JSX.Element}) {
    const {recoverUserInformation} = useHandleQuery();

    const [user, setUser] = useState({} as User | null)    
    const isAuthenticated = !!user;

    useEffect(()=>{
        const {'SLine_token':token} = parseCookies();

        if (token) {
            recoverUserInformation(token).then(
                user=>setUser(user))
        }
    },[])

    async function keepingToken({token,user}:KeepTokenProps) {
        if (token) {
            setCookie(undefined,'SLine_token',token,{
                maxAge:60*60*24, //24 hour
            });

            setUser(user);
            return;
        }

        toast.error('Problema ao tentar logar..');
    }

    async function logout() {
        destroyCookie(undefined,'SLine_token');
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{user, isAuthenticated, keepingToken,logout}}>
            {children}
        </AuthContext.Provider>
    )
}