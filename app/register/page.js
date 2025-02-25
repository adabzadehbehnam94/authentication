"use client"

import { useRouter } from "next/navigation"
import { register } from "../component/auth"
import { useActionState, useEffect } from "react"
import Button from "../component/Button"
import { toast } from "react-toastify"

export default function Register (){
    const [state,formAction] = useActionState(register,{})
    const router = useRouter()
    useEffect(()=>{
        if(state?.success){
            toast.success(state?.success)
            router.push("/")

        }else{
            toast.error(state?.error)
        }
    },[state])
    return(
        <div>
            
            <form action={formAction} className="col-12 col-md-6 mx-auto px-2">
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Name</label>
                    <input name="name" type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp"/>
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputCPassword" className="form-label">confirmpassword</label>
                    <input type="password" name="confirmpassword" className="form-control" id="exampleInputCPassword"/>
                </div>
                
                <Button name ="login"/>

                <p>{state?.error}</p>
                <p>{state?.success}</p>
            </form> 
        </div>
    )
}