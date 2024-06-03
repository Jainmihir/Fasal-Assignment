import React from "react";
import {Link,NavLink} from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="https://fasal.co/" className="flex items-center">
                            <img
                                src="https://ci3.googleusercontent.com/meips/ADKq_NbMW1LSoSwG-FBx5i5IeHYeRIjk-xu9OJMG8FY46wlTDTB60x3JhBBSUQ2_crIZHR2VGPzUTqWmkFRCYo7uMiFQHffISX04qoAwqpIZ_3bZgr6cGK940Y94DQOuqX1LuFToo62hwOCiVU9scTBuMZWF=s0-d-e1-ft#https://img.mysignature.io/p/d/3/0/d30d9df2-ebf0-59d7-ab4f-6649c7c90846.png?time=1589696993"
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                            Grow More,Grow Better
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link to="" className="hover:underline">
                                        About
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/Jainmihir"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                {/* <li>
                                    <Link to="/" className="hover:underline">
                                        Discord
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                        {/* <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
