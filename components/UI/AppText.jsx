import { x } from "@xstyled/emotion";
const AppText = ({ text }) => {

    return (
        <x.div py={10} px={30} maxW="800px" m="auto">
            <x.h4 textAlign="center">
                {text}
            </x.h4>
        </x.div>
    )
};
export default AppText;