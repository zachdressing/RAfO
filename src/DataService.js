const helloAPI = async (input) => {
    const promise = await fetch(`https://fooaproject8allforone.azurewebsites.net/Hello/${input}`);
    const response = await promise.text();
    console.log(response)
    return response;
}

const addAPI = async (input1, input2) => {
    const promise = await fetch(`https://fooaproject8allforone.azurewebsites.net/AddNumbers/${input1}/${input2}`);
    const response = await promise.text();
    console.log(response)
    return response;
}

const wakeAPI = async (input1, input2) => {
    const promise = await fetch(`https://fooaproject8allforone.azurewebsites.net/TwoQuestions/${input1}/${input2}`);
    const response = await promise.text();
    console.log(response)
    return response;
}

const glAPI = async (input1, input2) => {
    const promise = await fetch(`https://fooaproject8allforone.azurewebsites.net/CompareNumbers/${input1}/${input2}`);
    const response = await promise.text();
    console.log(response)
    return response;
}

const madAPI = async (input1, input2, input3, input4) => {
    const promise = await fetch(`https://fooaproject8allforone.azurewebsites.net/MadLib/${input1}/${input2}/${input3}/${input4}/${input4}/${input4}/${input4}/${input4}/${input4}?adverb=Huridly`);
    const response = await promise.text();
    console.log(response)
    return response;
}

const oeAPI = async (input1) => {
    const promise = await fetch(`https://fooaproject8allforone.azurewebsites.net/OddOrEven/${input1}`);
    const response = await promise.text();
    console.log(response)
    return response;
}

const raAPI = async (input1) => {
    const promise = await fetch(`https://fooaproject8allforone.azurewebsites.net/ReverseItWord/${input1}`);
    const response = await promise.text();
    console.log(response)
    return response;
}

const rnAPI = async (input1) => {
    const promise = await fetch(`https://fooaproject8allforone.azurewebsites.net/ReverseItNum/${input1}`);
    const response = await promise.text();
    console.log(response)
    return response;
}

const ballAPI = async (input1) => {
    const promise = await fetch(`https://fooaproject8allforone.azurewebsites.net/8Ball/${input1}`);
    const response = await promise.text();
    console.log(response)
    return response;
}

const restAPI = async (input1) => {
    const promise = await fetch(`https://fooaproject8allforone.azurewebsites.net/RestaurantPicker/FastFoodSitDownTakeOut/${input1}`);
    const response = await promise.text();
    console.log(response)
    return response;
}

export {addAPI, helloAPI, wakeAPI, glAPI, madAPI, oeAPI, raAPI, rnAPI,ballAPI, restAPI};