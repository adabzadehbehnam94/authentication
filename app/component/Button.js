"use client"
import { useFormStatus } from "react-dom"

export default function Button(props){
    const{pending} = useFormStatus()
    return(
        <>
            <button type="submit" disabled = {pending}>{props.name}
                {pending && <span className="spinner-border"></span>}
            </button>
            
        </>
    )
}