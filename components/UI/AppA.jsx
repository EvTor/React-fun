import { x } from "@xstyled/emotion";
import Link from "next/link";
const AppA = ({ children, refer }) => {

    return (

        <Link href={refer} >
            <x.a cursor="pointer" textDecoration="underline" color={{ _: "#00D8FF", hover: "white" }}>
                {children}
            </x.a>
        </Link>
    )
}

export default AppA;