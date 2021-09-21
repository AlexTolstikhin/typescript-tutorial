let userInput: unknown;
let userName: string;

// userName = userInput;

if (typeof userInput === 'string') {
    userName = userInput;
}


function generateError(message: string, code: number): never {
    throw { message, errorCode: code }; 
}


const res = generateError('An error occured', 500);

console.log(res);