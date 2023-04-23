import { x } from "@xstyled/emotion";
const AppH2 = ({ title }) => {
    return (
        <x.div py={10} px={30} m="auto" maxW="800px">
            <x.h2 textAlign="center">
                {title}
            </x.h2>
        </x.div>
    )
};
export default AppH2;