import { x } from "@xstyled/emotion";
const AppJobsButton = ({ children, ...props }) => {
    return (
        <x.button bg="#FF00C7" alignItems="center" {...props}   >
            {children}
        </x.button>
    )
}
export default AppJobsButton;