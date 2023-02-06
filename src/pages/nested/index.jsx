import Link from "next/link";

const Nested = () => {
    return (
        <div className=" bg-blue-800 text-3xl  m-4 p-4 text-center">
            <h3>nested root page </h3>

            <Link href='/nested/fisrtNested'>
                <p>go to fisrtNested page </p>
            </Link>
        </div>
    )
}

export default Nested;