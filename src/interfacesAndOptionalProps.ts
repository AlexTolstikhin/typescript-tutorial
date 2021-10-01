// interface Person {
//     name: string;
//     age: number;

//     greet(phrase: string): void;
// }

// let user1: Person;

// user1 = {
//     name: 'Alex',
//     age: 32,
//     greet(phrase: string) {
//         console.log(phrase + ' ' + this.name);
//     }
// };

// user1.greet('Hi there I am');

interface AddFunc {
    (a: number, b:number): number;
};

// type AddFn = (a: number, b: number) => number;

let addition: AddFunc;

addition = (n1: number, n2: number) => {
    return n1 + n2;
}

interface Named {
    readonly name: string,
    outputName?: string
}

interface Greetable extends Named {
    greet(phrase: string): void;
}


class Person implements Greetable {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}


const user2: Greetable = new Person('Alex');

// user2.name = 'Test';

user2.greet("Hello there");