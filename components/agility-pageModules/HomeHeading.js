import React from "react";
import Link from "next/link";

const HomeHeading  = ({module}) => {
    const {fields} = module;

    const isUrlAbsolute = (url) =>
        url.indexOf("://") > 0 || url.indexOf("//") === 0;

    const generateLink = (url, target, text) => {
        // if relative link, use next/link
        if (isUrlAbsolute(url) === false) {
            return (
                <Link href={url} title={text} target={target}>
                    <a className="inline-block mt-8 md:mt-8 px-8 py-3 border border-transparent text-base leading-6 font-medium text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:border-primary-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                        {text}
                    </a>
                </Link>
            );
        } else {
            // else use anchor tag
            return (
                <a
                    href={url}
                    title={text}
                    target={target}
                    className="inline-block mt-8 md:mt-8 px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-500 hover:bg-primary-700 focus:outline-none focus:border-primary-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                >
                    {text}
                </a>
            );
        }
    };
    return(
        <div className={"max-w-screen-xl mx-auto flex flex-row"}>
            <div className={"w-7/12"}>
               <caption className={"c3 text-primary-blue w-max"}>lets inspire healthcare together</caption>
                <h1>Let's inspire<br/>healthcare together.</h1>
                <p className={"b1 w-8/12 pl-12 border-primary-blue left-border my-6"}>CineMed is a global healthcare solutions company committed
                    to improving patient outcomes through innovative training
                    and customer engagement.</p>
                <div className={"flex flex-row items-center space-x-4 my-6"}>
                    <a className={"flex bttn1 w-44 h-14 items-center bg-primary-blue rounded-full"}><p className={"mx-auto text-primary-white"}>Create course</p></a>
                    <a className={"flex bttn1 w-44 h-14 items-center border-primary-blue rounded-full border-primary-blue border-2 text-primary-blue"}><p className={"mx-auto"}>Find a Course</p></a>
                </div>
            </div>
            <div>
                2
            </div>
        </div>
    )
};

export default HomeHeading;