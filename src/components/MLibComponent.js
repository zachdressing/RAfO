import React from 'react'
import NavbarComponent from './NavbarComponent'
import { Flowbite } from 'flowbite-react';

function MLibComponent() {
    return (
        <>
            <div className='bgStuff'>
                <NavbarComponent />
                <div className="w-full flex justify-center align-center pt-32">
                    <div className="bg-grey h-fit w-fot flex justify-center p-5">
                        <div className="w-full text-[48px] text-center text-white p-4">
                            <form>
                                <h1><label for="input1">Input: Word</label><input type="text" id="input1" className='text-black align-middle' name="input1" placeholder="your first word"/></h1>
                                <h1><label for="input2">Input: Word</label><input type="text" id="input2" className='text-black align-middle' name="input2" placeholder="your second word"/></h1>
                                <h1><label for="input3">Input: Word</label><input type="text" id="input3" className='text-black align-middle' name="input3" placeholder="your third word"/></h1>
                                <h1><label for="input4">Input: Word</label><input type="text" id="input4" className='text-black align-middle' name="input4" placeholder="your fourth word"/></h1>
                            </form>
                            <h1 id="outputLine" className='flex'>Output: <br /> <span id="output"></span></h1>
                        </div>
                    </div>
                </div>
                <div className="buttonDiv flex justify-center items-center pt-32">
                    <button id="btn" className="border-2 border-gray-900 bg-gray-100 w-48 h-20 hover:brightness-50">
                        <i className="text-gray-900 p-2 text-2xl text-5xl">
                            enter
                        </i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default MLibComponent;
