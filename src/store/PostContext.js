import { createContext, useState } from "react";

 export const PostContext=createContext(null)


export default function Post({children}){
    const[postDetails,setPost]=useState()

    return(
        <PostContext.Provider value={{postDetails,setPost}}>
            {children}
        </PostContext.Provider>)
}