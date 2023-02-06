import Link from "next/link";

const EarnSkill = () => {
    return (
        <div className="bg-green-400 m-auto p-4 w-[400px] mt-8 rounded-xl">
          <h1 className="text-4xl font-bolder text-red-400  m-8" >  how to earn various skill in js </h1>
            <Link href='/'>
             <p className="bg-red-900 text-white font-bold text-2xl m-auto px-8">goToHome </p> 
            </Link>
        </div> 
    )
}

export default EarnSkill;

