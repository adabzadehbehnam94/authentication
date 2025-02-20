"use client"

export default function Error({error},{reset}){
    return (
        <>
            <h3>some things whent wrong {error.message}</h3>
            <button type="button" onClick={()=> reset()}>try again</button>
        </>
    )
        
        
}