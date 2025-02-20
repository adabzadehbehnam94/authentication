"use server"

import { cookies } from "next/headers"

const handleError = (message)=>{
    const res = []
    Object.keys(message).map(key =>{
        message[key].map(item => res.push(item))
        
    })

    return res.join()
}

const handleLogin = (msg)=>{
    const logs = []
        Object.keys(msg).map((item)=>{
            msg[item].map((i)=>{
                logs.push(i)
            })
        })
        return logs.join()
}


const register = async(state,formdata)=>{
    const name = formdata.get("name")
    const email = formdata.get("email")
    const password = formdata.get("password")
    const confirmpassword = formdata.get("confirmpassword")

    // if(name == ""||email == "" || password == "" ){
    //     return{
    //         error : "name or email or password field is empty"
    //     }
    // }

    // if(password != confirmpassword){
    //     return{
    //         p_error : "password not match with confirmpassword"
    //     }
    // }

    const data = await fetch("http://localhost:8000/api/register",{
        method : "POST",
        cache : "no-store",
        headers:{"content-type": "application/json"},
        body :JSON.stringify({
            name : name,
            email : email,
            password:password,
            c_password : confirmpassword
        })
    })

    const result = await data.json()
    

    if(data.ok){
        return {
            success : "you are registred"
        }
    }else{
        return {
            error: handleError(result)
        }
    }

}

const login = async (state , formdata)=>{
    const email = formdata.get("email")
    const password = formdata.get("password")
    const data = await fetch("http://localhost:8000/api/login",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        cache:"no-store",
        body:JSON.stringify({
            email : email,
            password : password
        })
    })
    const result = await data.json()

    if(data.ok){
        const cook = await cookies()
        cook.set({
            name : "token",
            value : result.token,
            httpOnly : true
        })
        return{
            success :"you are logged in",
            user : result.user
        }
        
        
    }else{
        return{
            error : handleLogin(result)
        }
    }
    

}

const me = async ()=>{
    const cookt = await cookies()
    const dat = cookt.get("token")
    if (!dat){
        return {
            error : "token not found"
        }
    }
    const result = await fetch("http://localhost:8000/api/me",{
        method : "GET",
        cache : "no-store",
        headers : {
            "Authorization" : `Bearer ${dat.value}`,
            "Accept" : "application/json"
        }
    })
    const data = await result.json()
    
    if(result.ok){
        return{
            user : data.user
        }
    }else{
        return {
            error : "user not safe"
        }
    }
    
    
    
}

const logout = async()=>{
    const cook = await cookies()
    const cookdata = cook.get("token")
    const result = await fetch("http://localhost:8000/api/logout",{
        method : "POST",
        cache : "no-store",
        headers : {
            "Authorization" : `Bearer ${cookdata.value}`,
            "Accept" : "application/json"
        }
    })
    const data = await result.json()

    if (result.ok){
        cook.delete("token")
        return{
            success : "user logouted"
        }
    }else{
        return{
            error : handleError(data)
        }
    }
}
export {register , login , me , logout}