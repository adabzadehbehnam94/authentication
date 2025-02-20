"use client"

import { createContext, useEffect, useState } from "react"
import { logout, me } from "../component/auth"


const TestContext = createContext()

export const AppContext = ({children})=>{
    const[user,setuser] = useState(null)
    
    const handleuser = (user)=>{
        setuser(user)
    }

    const logo = ()=>{
        setuser(null)
    }
    
    useEffect(()=>{
        const checktoken = async ()=>{
            const data = await me()
            if(data?.error){
                return data?.error
            }else if(data?.user){
                setuser(data?.user)
            }
            
            
        }
        checktoken()
    },[])

    
    return(
        <TestContext.Provider value={{user,handleuser,logo}}>
            {children}
        </TestContext.Provider>
    )
}

export default TestContext

