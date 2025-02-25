"use client"

import { useRouter } from "next/navigation"
import { register } from "../component/auth"
import { useActionState, useEffect } from "react"
import Button from "../component/Button"

export default function Register (){
    const [state,formAction] = useActionState(register,{})
    const router = useRouter()
    useEffect(()=>{
        if(state?.success){
            router.push("/")
        }
    },[state])
    return(
        <div>
            
            <form action={formAction} className="col-12 col-lg-6 mx-auto px-2">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input name="name" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    
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
                    <label htmlFor="exampleInputPassword1" className="form-label">confirmpassword</label>
                    <input type="password" name="confirmpassword" className="form-control" id="exampleInputPassword1"/>
                </div>
                
                <Button name ="login"/>

                <p>{state?.error}</p>
                <p>{state?.success}</p>
            </form> 
        </div>
    )
}