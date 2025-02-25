// import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

export function  middleware (req){
    const tok = req.cookies.get("token")
    // console.log(token);
    
  
    if(!tok){
        return NextResponse.redirect(new URL("/",req.url))
    }
   
}

export const config ={
    matcher : "/post"
}