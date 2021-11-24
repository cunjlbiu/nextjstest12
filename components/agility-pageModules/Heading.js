import React from "react";
import Link from "next/link";

const Heading = ({ module }) => {
  const { fields } = module;

    const isUrlAbsolute = (url) =>
        url.indexOf("://") > 0 || url.indexOf("//") === 0;

    const generateLink = (url, target, text) => {
        // if relative link, use next/link
        if (isUrlAbsolute(url) === false) {
            return (
                <Link href={url} title={text} target={target}>
                    <a className="inline-block mt-8 md:mt-8 px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-500 hover:bg-primary-700 focus:outline-none focus:border-primary-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
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
  //mx-auto my-12 md:mt-18 lg:mt-32 h-56
  return (
    <div className="relative px-8 bg-gray-500 h=56">
      <div className="max-w-screen-xl mx-auto py-32 ">
        <h1 className="font-display text-secondary-500 text-4xl font-black tracking-widest">
          {fields.title}
        </h1>
        <h2 className="font-display text-xl w-auto md:w-2/5 mt-10">
            {fields.buttontext}
        </h2>
          {!fields.buttonvisible ? "true":(generateLink(fields.buttonUrl.url, fields.buttonUrl.target, fields.buttonUrl.text ))}
      </div>
    </div>
  );
};

export default Heading;
