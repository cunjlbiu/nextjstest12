import React from "react";

const SingleTitle = ({module}) =>{
    const {fields} = module;

    return(

        <div className="max-w-screen-xl mx-auto my-8 text-6xl font-bold">
            {fields.title}
        </div>
);
}
export default SingleTitle