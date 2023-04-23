import { x } from "@xstyled/emotion";
import AppCard from "./UI/AppCard";
import AppTitleText from "./UI/AppTitleText";
import AppButton from "./UI/AppButton";
const AppCardStories = ({ content, cardContent, id }) => {

    const contentComponent = content[id - 1];
    return (
        <x.article w="100%" bg="#111624">

            <x.div m="auto" maxW="1400px" py={20} display="grid" gridTemplateColumns={{ lg: 3, md: 2, sm: 1 }}>


                <AppTitleText gridColumn={{ lg: 'span 3 / span 1', md: 'span 2 / span 1', sm: 'span 1 / span1 ' }} textAlign="center" content={contentComponent} />

                {cardContent.map(item =>
                    <AppCard key={item.id} content={item} />)}

                <AppButton mx={{ _: 6, md: 16 }} gridColumn={{ lg: 'span 3 / span 1', md: 'span 2 / span 1', sm: 'span 1 / span1 ' }} w="200px" h="50px" children={"Show more C2A"} onClick={() => location.href = "https://en.m.wikipedia.org/wiki/Main_Page"} />

            </x.div>
        </x.article>
    )
};

export default AppCardStories;