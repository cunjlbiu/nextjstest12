import React from "react"
import {renderHTML} from "@agility/nextjs";

const TitleWithText = ({module}) => {
    const {fields} = module;

    return(
        <div className={"max-w-full bg-soft-purple py-14"}>
            <div className={"max-w-screen-lg mx-auto text-center space-y-5"}>
                <h1>{fields.title}</h1>
                <div className={"b1 max-w-screen-lg mx-auto text-center"} dangerouslySetInnerHTML={renderHTML(fields.text)}/>
            </div>
        </div>
    );
}

export default TitleWithText