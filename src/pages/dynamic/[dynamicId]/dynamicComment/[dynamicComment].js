import { useRouter } from "next/router";
import React from "react";


const CommentDetails =() => {

    const router = useRouter();
    
    const { dynamicId, dynamicComment } = router.query;

    
    console.log("dynamiceid", dynamicId , "dynamiceComment", dynamicComment);
    return(
        <div className="bg-cyan-500 w-96 p-3 m-auto rounded-xl  border-solid  border-red-600"> 
            <h1 className="font-bold text-3xl text-white py-4">Nested Dynamic Routers is here  </h1>
            <h2 className="font-bold text-2xl text-cyan-200 text-center mt-4"> dynamicId : {dynamicId} dynamicComment {dynamicComment}</h2>
        </div>
    )
}

export default CommentDetails;