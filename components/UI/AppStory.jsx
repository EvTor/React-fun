import { x } from "@xstyled/emotion";
import AppTag from "./AppTag";
import AppA from "./AppA";
const AppStory = ({ content, ...props }) => {

    return (
        <x.div mx="auto" my={5} w="350px" p={6} {...props}>


            <x.h3 color={{ hover: "white" }} my={10}>{content.title}</x.h3>
            <AppTag children={"Tag / Badge"} />
            <x.p my={10}>{content.content}</x.p>
            <AppA children={"Story detail"} refer={"/objevuj"} />


        </x.div >
    )
};
export default AppStory;