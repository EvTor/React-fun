import { x } from "@xstyled/emotion";
import AppLogo from "./UI/AppLogo";
import NavBar from "./UI/NavBar";
import AppJobsButton from "./UI/AppJobsButton"
import AppBurger from "./UI/AppBurger"
const AppHeader = () => {
    return (
        <x.header position="fixed" w="100%" bg="#111624" display="flex" justifyContent="center" >
            <x.div maxW="1400px" display="flex" justifyContent="space-between" alignItems="center" w={{ _: "100%", md: "80%" }} h="64px">
                <AppLogo flex="none" h="32px" viewBox="0 0 795 192" fill="none" xmlns="http://www.w3.org/2000/svg" />
                <NavBar />
                <AppJobsButton children={"Pracuj v Reactu"} h="100%" />
                <AppBurger />
            </x.div>
        </x.header>
    )
};
export default AppHeader;