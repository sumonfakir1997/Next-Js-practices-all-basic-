import { useRouter } from "next/router";

const DynamicRouterId = () => {

    const router = useRouter() ;
    const dynamicId = router.query.dynamicId;
    
    // console.log(dynamicId);
    return(
        <div className="bg-gray-400 text-center p-3">
            <h1 className="text-2xl font-thin text-green-300"> this is dynamic router <span className="font-bold text-3xl text-white
            ">Id: {dynamicId}</span> </h1>
        </div>
    )
}
export default DynamicRouterId;