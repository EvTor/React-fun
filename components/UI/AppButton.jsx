import { x } from "@xstyled/emotion";
const AppButton = ({ children, ...props }) => {
    return (
        <x.button {...props} bg="#00D8FF" textAlign="center" p={4} fontWeight="bold" display="block">
            {children}
        </x.button>
    )
}
export default AppButton;