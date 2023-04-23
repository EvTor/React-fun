import { x } from "@xstyled/emotion";
import AppLinkNav from "./AppLinkNav";



const NavBar = () => {

    const navLinks = [
        { id: 1, ref: "/objevuj", title: "Objevuj" },
        { id: 2, ref: "/", title: "Nauč se" },
        { id: 3, ref: "/", title: "Otestuj se" },
        { id: 4, ref: "/", title: "Pracuj" }];

    return (

        <x.nav display="flex" flexDirection="row" justifyContent="center" alignItems="center">

            <x.ul display="flex" flexDirection="row" >
                {navLinks.map(item =>
                    <AppLinkNav linkData={item} key={item.id} />
                )}
            </x.ul>

        </x.nav>

    )
};
export default NavBar;
