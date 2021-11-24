import React from "react";
import Link from "next/link";
import { AgilityImage } from "@agility/nextjs"

const GoalsListing = ({module}) =>{
    const {fields} = module;

    return(
        <div className="">
            {fields.goals.reverse().map((goal, index)=>(
                <div>{goal.fields.title} </div>
            ))}
        </div>
    );

}
export default GoalsListing;