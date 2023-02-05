import { useRouter } from "next/router";


const params = () => {

    const router = useRouter();
    // const params = router.query.params
    // params = [] mean save to time error
    const {params = []} = router.query

    // params.length control for doc with two chile like doc/shop/feature 
    if(params.length === 2 ){
    return(
        <div className=" bg-cyan-300 w-96 m-auto mt-8">
            <h1 className="text-cyan-500 text-2xl font-bold"> this is home page {params [0]} and concept {params[1]} </h1>
          <p className="text-xl  p-5 mt-6 font-thin"> this is catch all routes </p> 
        </div> 
    )
    }
    // doc with one like doc/shop
    else if (params.length === 1){
        return (
            <div>
                <h2> view doc for concept {params[0]}</h2>
            </div>
        )
    }
    return(
        // doc with like doc/shop/concept/load/etc then it will show the docs home 
        <h1>docs home page here </h1>
    )
}

export default params;