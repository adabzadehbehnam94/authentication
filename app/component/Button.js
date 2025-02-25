"use client"
import { useFormStatus } from "react-dom"

export default function Button(props){
    const{pending} = useFormStatus()
    return(
        <>
            <button type="submit" className="btn btn-primary" disabled = {pending}>{props.name} 
                {pending && <span className="spinner-border spinner-border-sm"></span>}
            </button>
            
        </>
    )
}