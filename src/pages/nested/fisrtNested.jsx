import Link from "next/link";
const Frist = () => {
    return(
        <div className="bg-red-700">
            <h2>nested page 1 </h2>
            <Link href='/nested'>
                goToNested
            </Link>
        </div>
    )
}
export default Frist;