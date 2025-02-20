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
            <form action= {formAction}>
                <label>name</label>
                <input name="name"/>
                
                <br/>
                <label>email</label>
                <input name="email"/>
                
                <br/>

                <label>password</label>
                <input name="password"/>
                
                <br/>

                <label>confirmpassword</label>
                <input name="confirmpassword"/>
                <br/>

                <Button name ="register"/>

                <br/>
                <br/>
                <p>{state?.success}</p>

                <p>{state?.error}</p>
            </form>
        </div>
    )
}