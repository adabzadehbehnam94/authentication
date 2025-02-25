const fetchpost = async ()=>{
    const result = await fetch("http://localhost:8000/api/posts",{
        method: "GET",
        cache : "no-store"
    })
    const data = await result.json()
   if(result.ok){
    return await data.posts
   }else {
    return new Error(result.status)
   }
}


export default async function Post (){
    const post = await fetchpost() 
    return(
        <div className="container">
            {post.map((item)=>(
                <div className="px-2"  key={item.id} style={{border : "1px solid black",marginBottom : "10px"}}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>
    )
}