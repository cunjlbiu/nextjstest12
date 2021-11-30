import React from "react";

const resttest = ({module}) =>{
    const {fields} = module;

    return(
        <div className={"bg-gray-900 h-52"}>
            <div className="flex flex-col max-w-screen-xl mx-auto">
                <div className={"text-6xl font-bold text-gray-100 mt-10 mb-3"}>{fields.text}</div>
                <div className={"text-xl text-gray-100"}>{fields.text}</div>

            </div>
        </div>
    );
}
export default resttest;