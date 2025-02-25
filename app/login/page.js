"use client"

import { useActionState, useContext, useEffect } from "react"
import { login } from "../component/auth"
import { useRouter } from "next/navigation"
import Button from "../component/Button"
import TestContext from "../context/AppContext"
import { toast } from "react-toastify"




export default function Login(){
    const [state,formAction] = useActionState(login,{})
    const router = useRouter()
    const {handleuser} = useContext(TestContext)
   useEffect(()=>{
    if(state?.success){
        handleuser(state?.user)
        toast.success(state?.success)
        router.push("/")
    }else{
        toast.error(state?.error)
    }
   },[state])


    return(
        <div className="container">
            
             <form action={formAction} className="col-12 col-md-6 mx-auto">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                
                <Button name ="login"/>

                {/* <p>{state?.error}</p>
                <p>{state?.success}</p> */}
             </form> 
        </div>
    )
}