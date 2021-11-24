import React from "react";
import {AgilityImage} from "@agility/nextjs";

const TwoColumnTextWithImage = ({module}) =>{
    const {fields} = module;

    return (
        <div className="relative max-w-screen-xl py-8 mx-auto">
            <div>
                <h2 className="font-display text-4xl font-black text-secondary-500 md:text-3xl lg:text-5xl tracking-wide text-center mt-4 lg:leading-tight ml-auto md:text-left">
                    {fields.title}
                </h2>
                <p className="two-column-text mt-4 pr-8 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-200 ml-auto">
                    {fields.text}
                </p>
            </div>
            <div className="my-6">
                <AgilityImage src={fields.image.url} width="1280" height="768" className="rounded-lg"></AgilityImage>
            </div>
        </div>
    );
}
export default TwoColumnTextWithImage;