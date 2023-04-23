import { x } from "@xstyled/emotion";
const AppH1 = ({ title }) => {
    return (
        <x.div py={10} px={5} m="auto" maxW="800px">
            <x.h1 textAlign="center">
                {title}
            </x.h1>
        </x.div>
    )
};
export default AppH1;