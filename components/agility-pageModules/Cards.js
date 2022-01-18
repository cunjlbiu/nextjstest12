import React from "react";
import {AgilityImage} from "@agility/nextjs";
import {FaCheck, FaEye, FaAward, FaBookmark, FaCertificate, FaHeart, FaUserAlt} from "react-icons/fa";


const Cards = ({module}) =>{
    const {fields} = module;

    return(
        <div className={"max-w-full justify-between py-6 "}>
            <div className="max-w-screen-xl my-8 mx-auto grid grid-cols-2 justify-center space-y-5">
                <div className={"grid grid-cols-2"}>
                    <div className={"space-y-8"}>
                        <div className={"border-2 border-agility w-80 h-48 card p-4 space-y-3"}>
                            <FaEye className={"bg-soft-blue w-8 h-8"}></FaEye>
                            <p className={"bttn1"}>Virtual</p>
                            <p className={"b3 text-justify"}>Some text about this feature.<br/>
                                Maybe it could be in two rows.</p>
                        </div>
                        <div className={"border-2 border-agility w-80 h-48 card p-4 space-y-3"}>
                            <FaBookmark className={"bg-soft-blue w-8 h-8"}></FaBookmark>
                            <p className={"bttn1"}>CME or Non-CME</p>
                            <p className={"b3 text-justify"}>Some text about this feature.<br/>
                                Maybe it could be in two rows.</p>
                        </div>
                        <div className={"border-2 border-agility w-80 h-48 card p-4 space-y-3"}>
                            <FaAward className={"bg-soft-blue w-8 h-8"}></FaAward>
                            <p className={"bttn1"}>Specialities</p>
                            <p className={"b3 text-justify"}>Some text about this feature.<br/>
                                Maybe it could be in two rows.</p>
                        </div>
                    </div>
                    <div className={"transform translate-y-6 space-y-8"}>
                        <div className={"border-2 border-agility w-80 h-48 card p-4 space-y-3"}>
                            <FaUserAlt className={"bg-soft-blue w-8 h-8"}></FaUserAlt>
                            <p className={"bttn1"}>In-Person</p>
                            <p className={"b3 text-justify"}>Some text about this feature.<br/>
                                Maybe it could be in two rows.</p>
                        </div>
                        <div className={"border-2 border-agility w-80 h-48 card p-4 space-y-3"}>
                            <FaCertificate className={"bg-soft-blue w-8 h-8"}></FaCertificate>
                            <p className={"bttn1"}>Topics</p>
                            <p className={"b3 text-justify"}>Some text about this feature.<br/>
                                Maybe it could be in two rows.</p>
                        </div>
                        <div className={"border-2 border-agility w-80 h-48 card p-4 space-y-3"}>
                            <FaHeart className={"bg-soft-blue w-8 h-8"}></FaHeart>
                            <p className={"bttn1"}>And many more...</p>
                            <p className={"b3 text-justify"}>Some text about this feature.<br/>
                                Maybe it could be in two rows.</p>
                        </div>
                    </div>
                </div>
                <div className={"space-y-5 mx-auto py-28"}>
                    <h3 >Interested in<br/>
                        creating your course?</h3>
                    <p className={"b1"}>We support you in updating and gaining notoriety<br/>
                        for your medical events and courses. </p>
                    <div className={"flex flex-auto space-x-6"}>
                        <div><FaCheck className={"text-primary-blue"}></FaCheck></div>
                        <div><p className={"b2"}>Create custom courses;</p></div>
                    </div>
                    <div className={"flex flex-auto space-x-6"}>
                        <div><FaCheck className={"text-primary-blue"}></FaCheck></div>
                        <div><p className={"b2"}>Train your audience effectively;</p></div>
                    </div>
                    <div className={"flex flex-auto space-x-6"}>
                        <div><FaCheck className={"text-primary-blue"}></FaCheck></div>
                        <div><p className={"b2"}>We cover logistics and publish your course.</p></div>
                    </div>
                    <a className={"flex bttn1 w-36 h-12 items-center bg-primary-blue rounded-full"}><p className={"mx-auto text-primary-white"}>Create course</p></a>

                </div>
            </div>
        </div>
    );
};
export default  Cards