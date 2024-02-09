import React from 'react'
import { Link } from 'react-router-dom';
import NavbarComp from './NavbarComp'

function HellowComponent() {
    return (
        <>
            <div className='bgStuff'>
                <NavbarComp />
                <div className="main w-full flex justify-center align-center pt-64">
                    <div className="bg-grey h-fit w-fot flex justify-center">
                        <div className="w-full text-[48px] text-center text-white p-4">
                            <form className="flex flex-col justify-center items-center">
                                <h1><label for="input1" className="p-5">Input:</label>
                                    <input type="text" id="input1" name="input1" placeholder="your first number" className='text-black'/>
                                </h1>
                            </form>
                            <h1 id="outputLine">Output: <br /> <span id="output"></span></h1>
                        </div>
                    </div>
                </div>
                <div className="buttonDiv flex justify-center items-center pt-32">
                    <button id="btn" className="border-2 border-gray-900 bg-gray-100 w-48 h-20"><i className="text-gray-900 p-2 text-2xl text-5xl">enter</i></button>
                </div>
            </div>
        </>
    )
}

export default HellowComponent;
