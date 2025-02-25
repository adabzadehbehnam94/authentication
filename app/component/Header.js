"use client"

import Link from "next/link"
import { useContext } from "react"
import TestContext from "../context/AppContext"
import { usePathname, useRouter } from "next/navigation"
import { logout } from "./auth"
import styles from "./header.module.css"


export default function Header(){
    const {user,logo} = useContext(TestContext)
    const router = useRouter()
    const pathname = usePathname()

    
    return(
        // <div className= {`${styles.bgHeader} align-items-center`}>
        //     <div className="container">
                
        //         <div className="row justify-content-between">
        //             {user ? (<>
        //                 <h1 className="col-10">Store Test</h1>
        //                 <div className="row col-2  justify-content-around align-items-center">
        //                     <h4 className="col-6">{user.name}</h4>
        //                     <button onClick={async()=>{
        //                         await logout()
        //                         logo()
        //                         router.push("/register")
        //                     }} className="col-6">logout</button>
        //                 </div>
        //                     </>) :(
                        
        //                 <>
        //                     <h1 className="col-10">Store Test</h1>
        //                     <div className={`row col-2  justify-content-around align-items-center ${styles.Link}`}>
        //                         <Link className="col-4" href={"/login"}>login</Link>
        //                         <Link className="col-4" href={"/register"}>register</Link>
        //                         <Link className="col-4" href={"/post"}>post</Link>
        //                     </div>
        //                 </>
                        
        //             )}
        //         </div>
        //     </div>
        // </div>
        <div className={`bg-primary ${styles.bgheader}`}>
            <div className="container">
                <nav className="navbar bg-primary  navbar-expand-lg  mb-3" data-bs-theme="dark">
                    <div className="container-fluid">
                    <Link className="navbar-brand" href="/">Authentication</Link>
                    <button className={`navbar-toggler ${styles.btMobile}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 mb-lg-0 ">
                            {user ? 
                                <>
                                    <li className={`nav-item ${styles.name}`}>
                                        <h3 >{user.name}</h3>
                                    </li>
                                    <li className="nav-item">
                                    <button className="btn btn-light" onClick={async()=>{
                                            await logout()
                                            logo()
                                            router. push("/register")
                                            }} >logout
                                        
                                    </button>
                                    </li>
                                </> :

                                <>
                                    <li className="nav-item">
                                        <Link className={`nav-link ${pathname == "/" ? styles.activeLink : ""}`} aria-current="page" href="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link ${pathname == "/login" ? styles.activeLink : ""}`} aria-current="page" href="/login">login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link ${pathname == "/register" ? styles.activeLink : ""}`}  href="/register">signUp</Link>
                                    </li>
                                </>
                            }
                        
                        </ul>
                        
                    </div>
                    </div>
                </nav>
            </div>
        </div>
        
        
        
        
    )
}