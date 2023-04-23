import { x } from "@xstyled/emotion";
import AppText from "./AppText";
import AppH1 from "./AppH1";
import AppH2 from "./AppH2";
const AppTitleText = ({ content, ...props }) => {
    return (

        < x.div {...props}>
            {
                content.typeOfTitle === "h1"
                    ? <AppH1 title={content.title} />
                    : <AppH2 title={content.title} />
            }
            < AppText text={content.content} />
        </x.div >

    )
};
export default AppTitleText;