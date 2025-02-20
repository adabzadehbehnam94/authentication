"use client"

import { useActionState, useContext, useEffect } from "react"
import { login } from "../component/auth"
import { useRouter } from "next/navigation"
import Button from "../component/Button"
import TestContext from "../context/AppContext"



export default function Login(){
    const [state,formAction] = useActionState(login,{})
    const router = useRouter()
    const {handleuser} = useContext(TestContext)
   useEffect(()=>{
    if(state?.success){
        handleuser(state?.user)
        router.push("/")
    }
   },[state])


    return(
        <>
            <form action={formAction}>
                <label>email</label>
                <input name="email" type="text" />
                <br/>
                <label>password</label>
                <input name="password" type="text" />
                <Button name ="login"/>
                <br/>
                <p>{state?.error}</p>
                <p>{state?.success}</p>
            </form>
        </>
    )
}