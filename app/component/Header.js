"use client"

import Link from "next/link"
import { useContext } from "react"
import TestContext from "../context/AppContext"
import { useRouter } from "next/navigation"
import { logout } from "./auth"


export default function Header(){
    const {user,logo} = useContext(TestContext)
    const router = useRouter()
    // console.log(user);
    
    return(
        <div className="row justify-content-between">
            {user ? (<>
                <h1 className="col-10">Store Test</h1>
                <div className="row col-2  justify-content-around">
                    <h4 className="col-6">{user.name}</h4>
                    <button onClick={async()=>{
                        await logout()
                        logo()
                        router.push("/register")
                    }} className="col-6">logout</button>
                </div>
                    </>) :(
                
                <>
                <h1 className="col-10">Store Test</h1>
                <div className="row col-2  justify-content-around">
                    <Link className="col-4" href={"/login"}>login</Link>
                    <Link className="col-4" href={"/register"}>register</Link>
                    <Link className="col-4" href={"/post"}>post</Link>
                </div>
                </>
            )}
        </div>
    )
}