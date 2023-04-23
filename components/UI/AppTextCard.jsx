import { x } from "@xstyled/emotion";
const AppTextCard = ({ title, content }) => {
    return (
        <x.div >
            <x.h3 color={{ hover: "white" }} my={10}>{title}</x.h3>
            <x.p my={10}>{content}</x.p>
        </x.div>
    )
};

export default AppTextCard;