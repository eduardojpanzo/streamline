import { createContext, useEffect, useState } from "react";
import { parseCookies, setCookie, destroyCookie} from "nookies";
import { useHandleQuery } from "../hooks/useHandleQueryUser";
import {UserAuthDTO} from '../types/dto';

type User = {
    id: string,
    name:string,
    email:string,
    avatar_img:string,
}

type AuthContextType = {
    user:User | null
    isAuthenticated: boolean;
    signIn:({email,password}:UserAuthDTO)=> Promise<any>;
    logout:()=> void;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({children}:{children:JSX.Element}) {
    const {handleRecoveryUserInformation,handleAutheticate} = useHandleQuery();

    const [user, setUser] = useState<User | null>(null);    
    const isAuthenticated = !!user;

    useEffect(()=>{
        const {'SLine_token':token} = parseCookies();

        if (token) {
            handleRecoveryUserInformation(token)
            .then(user=>setUser(user))
            .catch(()=>setUser(null))
        }
    },[])

    const signIn = async({email,password}:UserAuthDTO) =>{
        const {token, user} = await handleAutheticate({email,password});

        if (!token) {
            throw new Error("Not Existis user");
        }

        setCookie(undefined,'SLine_token',token,{
            maxAge:60*60*24, //24 hour
        });

        setUser(user);
        return;
    }

    async function logout() {
        destroyCookie(undefined,'SLine_token');
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{
            user,
            isAuthenticated,
            signIn,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}