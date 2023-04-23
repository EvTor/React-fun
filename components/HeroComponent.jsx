import { x } from "@xstyled/emotion"
import AppButton from "./UI/AppButton";
import AppTitleText from "./UI/AppTitleText";



const HeroComponent = ({ content, id }) => {
    const contentComponent = content[id - 1];
    return (
        <x.article w="100%" pt={40} pb={20} bg="#141B31" display="block">

            <AppTitleText content={contentComponent} />
            <AppButton mt={6} mx="auto" fontSize="2rem" children={"C2A Fun Academy"} />

        </x.article>
    )
};

export default HeroComponent;
