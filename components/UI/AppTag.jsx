import { x } from "@xstyled/emotion";

const AppTag = ({ children, ...props }) => {

    return (
        <x.div {...props}
            p={1}
            fontWeight="bold"
            backgroundImage="gradient-to-r"
            gradientFrom="#00D8FF"
            gradientTo="#00FF94"
            textAlign="center"
            h="30px"
            w="100px"
            bg="green">
            {children}
        </x.div>
    )
};

export default AppTag;