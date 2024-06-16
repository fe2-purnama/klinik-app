import React from 'react';

const ProfileCard = ({ image, name, position, email, instagram, github }) => {
    return (
        <div className="flex flex-col justify-center w-full p-4 mx-2 my-4 text-center rounded-md bg-[color:var(--secondary)] dark:bg-gray-800">
            <img alt="" className="self-center flex-shrink-0 w-20 h-20 -mt-10 bg-center bg-cover rounded-full dark:bg-gray-500" src={image} />
            <div className="flex-1 my-4">
                <p className="text-xs md:text:base lg:text-lg font-semibold leading-snug">{name}</p>
                <p className="text-[10px] md:text-sm">{position}</p>
            </div>
            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                <a rel="noopener noreferrer" href={"mailto:" + email} title={email} target='blank_' className="dark:text-gray-50 hover:dark:text-violet-600">
                    <i className="hover:scale-150 transform transition-all duration-200 text-lg md:text-xl fa-solid fa-envelope"></i>
                </a>
                <a rel="noopener noreferrer" href={"https://www.instagram.com/" + instagram} title={instagram} target='blank_' className="dark:text-gray-50 hover:dark:text-violet-600">
                    <i className="hover:scale-150 transform transition-all duration-200 text-lg md:text-xl fa-brands fa-instagram"></i>
                </a>
                <a rel="noopener noreferrer" href={"https://github.com/" + github} title={github} target='blank_' className="dark:text-gray-50 hover:dark:text-violet-600">
                    <i className="hover:scale-150 transform transition-all duration-200 text-lg md:text-xl fa-brands fa-github"></i>
                </a>
            </div>
        </div>
    );
};

export default ProfileCard;
