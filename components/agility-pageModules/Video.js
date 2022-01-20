import React from "react"
import {renderHTML} from "@agility/nextjs";

const Video = ({module}) => {
    const {fields} = module;
    let bgGradient = {
        background:`linear-gradient(#F2F5FF 50%, #FFFFFF 50%)`
    }
    return(
        <div className={"flex max-w-full justify-center py-12"} style={bgGradient}>
            <div className={"rounded-2xl"} dangerouslySetInnerHTML={renderHTML(fields.video)}/>
        </div>
    );

}
export default Video