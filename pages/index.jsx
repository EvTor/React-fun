import AppHeader from "../components/AppHeader";
import HeroComponent from "../components/HeroComponent";
import AppCardStories from "../components/AppCardStories";
import AppTextStories from "../components/AppTextStories"
import content from "../service/content"
import React, { useState, useEffect } from "react";


const Index = () => {

    function fetchContentHeroComponent() {
        const data = content.text.filter((item) => {
            if (item.purpose === "HeroComponent") { return item }
        });
        return data;
    };

    function fetchContentAppCardStories() {
        const data = content.text.filter((item) => {
            if (item.purpose === "AppCardStories") { return item }
        })
        return data;
    };
    function fetchCardContentAppCardStories() {
        const data = content.cards.filter((item) => {
            if (item.purpose === "AppCardStories") { return item }
        });
        return data;
    };



    function fetchContentAppTextStories() {
        const data = content.text.filter((item) => {
            if (item.purpose === "AppTextStories") { return item }
        })
        return data;
    };
    function fetchStoryCotentAppTextStories() {
        const data = content.stories.filter((item) => {
            if (item.purpose === "AppTextStories") { return item }
        });
        return data;
    };


    useEffect(() => {
        const contentHero = fetchContentHeroComponent();
        setContentHeroComponent(contentHero);
        const contentAppCard = fetchContentAppCardStories();
        setContentAppCardStories(contentAppCard);
        const cardContentAppCard = fetchCardContentAppCardStories();
        setCardContentAppCardStories(cardContentAppCard);
        const cotentAppText = fetchContentAppTextStories();
        setContentAppTextStories(cotentAppText);
        const storyCotentAppText = fetchStoryCotentAppTextStories();
        setStoryContentAppTextStories(storyCotentAppText);

    }, []);

    const [contentHeroComponent, setContentHeroComponent] = useState([{}]);
    const [contentAppCardStories, setContentAppCardStories] = useState([{}]);
    const [cardCotentAppCardStories, setCardContentAppCardStories] = useState([{}]);
    const [cotentAppTextStories, setContentAppTextStories] = useState([{}]);
    const [storyCotentAppTextStories, setStoryContentAppTextStories] = useState([{}]);

    return (
        <div>

            <AppHeader />
            <HeroComponent content={contentHeroComponent} id={1} />
            <AppCardStories content={contentAppCardStories} cardContent={cardCotentAppCardStories} id={1} />
            <AppTextStories content={cotentAppTextStories} storyContent={storyCotentAppTextStories} id={1} />
        </div >
    );
};

export default Index;
