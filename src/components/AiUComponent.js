import { useState, React } from 'react';
import NavbarComponent from './NavbarComponent'
import { Flowbite } from 'flowbite-react';
import { addAPI } from '../DataService';

function AiUComponent() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [output, setOut] = useState('');

    const getOutput = async () => {
        const response = await addAPI(num1, num2);
        setOut(response);
    }

    return (
        <>
            <div className='bgStuff'>
                <NavbarComponent />
                <div class="w-full flex justify-center pt-64">
                    <div class="bg-grey h-fit w-fit flex justify-center p-5">
                        <div class="w-full text-[48px] text-center text-white p-4">
                            <form class="flex flex-col justify-center items-center">
                                <h1><label for="input1" class="p-5">Input:</label>
                                    <input onChange={(e) => { setNum1(e.target.value) }} type="text" className='text-black' id="input1" name="input1" placeholder="your first number" />
                                </h1>
                                <h1><label for="input2" class="p-5">Input:</label>
                                    <input onChange={(e) => { setNum2(e.target.value) }} type="text" className='text-black' id="input2" name="input2" placeholder="your second number" />
                                </h1>
                            </form>

                            <h1 className='flex'>Output: <span id="output">{output}</span></h1>
                        </div>
                    </div>

                </div>
                <div class="buttonDiv flex justify-center items-center pt-32">
                    <button id="btn" onClick={() => getOutput()} class="border-2 border-gray-900 bg-gray-100 w-48 h-20 hover:brightness-50">
                        <i class="text-gray-900 p-2 text-2xl text-5xl">enter</i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default AiUComponent;
