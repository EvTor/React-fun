import { x } from "@xstyled/emotion";
import AppTag from "./AppTag";
import AppA from "./AppA";
import AppTextCard from "./AppTextCard"
const AppCard = ({ content, ...props }) => {

    return (
        <x.div mx="auto" my={5} w="350px" p={6} borderWidth="3px" borderColor={{
            _: "#141B31", hover: "white"
        }} boxShadow={"16px 32px #141B3140"} {...props}>
            <AppTag children={"Tag / Badge"} />
            <AppTextCard title={content.cardTitle} content={content.cardContent} />
            <AppA children={"Story detail"} refer={"/objevuj"} />
        </x.div >
    )
};
export default AppCard;
