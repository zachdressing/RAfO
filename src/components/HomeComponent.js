import React from 'react'
import { Link } from 'react-router-dom';
import NavbarComp from './NavbarComp';

function HomeComponent() {
    return (
        <>
            <div className='bgStuff'>
                <NavbarComp />
                <div className=' ]w-full flex justify-center align-center pt-64'>
                    <div className="bg-grey text-center text-white p-4 lg:w-3/4 px-32 text-[48px]">
                        <h1>Welcome to Zachary Dressel’s Mini Challenges.<br />
                            Please pick a page from the navbar above to start.<br />
                            Press the<span className="p-2">
                                <button className="border-2 border-gray-900 bg-white w-48">
                                    <i className="text-gray-900 p-2">
                                        enter
                                    </i>
                                </button>
                            </span>button to start the program</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeComponent;
