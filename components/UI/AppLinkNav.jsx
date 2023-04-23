import { x } from "@xstyled/emotion";
import Link from "next/link";
const AppLinkNav = ({ linkData }) => {

    return (
        <x.li mx={4} cursor="pointer">
            <Link href={linkData.ref}>
                <x.a color={{ _: "#00D8FF", hover: "white" }}>
                    {linkData.title}
                </x.a>
            </Link>
        </x.li>
    )
}

export default AppLinkNav;