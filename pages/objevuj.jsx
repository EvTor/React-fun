import AppHeader from "../components/AppHeader";
import HeroComponent from "../components/HeroComponent";
import React, { useState, useEffect } from "react";
import content from "../service/content"
const objevuj = () => {


    function fetchContentHeroComponent() {
        const data = content.text.filter((item) => {
            if (item.purpose === "HeroComponent") { return item }
        });
        return data;
    };

    useEffect(() => {
        const contentHero = fetchContentHeroComponent();
        setContentHeroComponent(contentHero);
    }, []);

    const [contentHeroComponent, setContentHeroComponent] = useState([{}]);

    return (
        <div>
            <AppHeader />
            <HeroComponent content={contentHeroComponent} id={1} />

        </div>
    )
};

export default objevuj;