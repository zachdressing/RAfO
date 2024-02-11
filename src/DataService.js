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

export {addAPI, helloAPI};