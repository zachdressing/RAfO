import { useState, React } from 'react';
import NavbarComponent from './NavbarComponent'
import { Flowbite } from 'flowbite-react';
import { rnAPI } from '../DataService';

function RiAComponent() {
    const [num1, setNum1] = useState(0);
    const [output, setOut] = useState('');

    const getOutput = async () => {
        const response = await rnAPI(num1);
        setOut(response);
    }
    return (
        <>
            <div className='bgStuff'>
                <NavbarComponent />
                <div className="w-full flex justify-center align-center pt-64">
                    <div className="bg-grey h-fit w-fot flex justify-center p-5">
                        <div className="w-full text-[48px] text-center text-white p-4">
                            <form className="flex flex-col items-center">
                                <h1><label for="input1" className="p-5">Input:</label><input type="text" onChange={(e) => { setNum1(e.target.value) }} id="input1" name="input1" placeholder="your number" className='text-black' /></h1>
                            </form>
                            <h1 id="outputLine" className='flex'>Output: <br /> <span id="output">{output}</span></h1>
                        </div>
                    </div>
                </div>
                    <div className="buttonDiv flex justify-center items-center pt-32">
                        <button id="btn" onClick={() => getOutput()} className="border-2 border-gray-900 bg-gray-100 w-48 h-20 hover:brightness-50">
                            <i className="text-gray-900 p-2 text-2xl text-5xl">
                                enter
                            </i>
                        </button>
                    </div>
                </div>
            </>
            )
}

            export default RiAComponent;
