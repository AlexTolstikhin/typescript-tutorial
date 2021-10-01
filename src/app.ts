function Logger(logString: string) {
    return function(constructor: Function) {
        console.log("Logging1...."); 
        console.log(logString);
    }
}

function withTemplate(template: string, hookId: string) {
    return function  (originalConstructor: any) {
        return class extends originalConstructor {
            constructor() {
                super();
                console.log("Logging2...."); 
                const element = document.getElementById(hookId);
                const p = new originalConstructor();
                if (element) {
                    element.innerHTML = template;
                    element.querySelector('h1')!.textContent = this.name;
                }
            }
        }
    }
}

@Logger('withTemplate')
class PersonNext {
    name = "Max";

    constructor() {
        console.log("creating person")
    }
}


const pers = new PersonNext();

console.log(pers);

function Log(target: any, propertyName: string | Symbol) {
    console.log("Log decorator");
    console.log(target)
    console.log(propertyName);
}

function Log2(target:any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(descriptor);
    console.log(name);
}

function Log3(target: any, name: string | Symbol, descr: PropertyDescriptor) {
    console.log('Method decorator!');
    console.log(target);
    console.log(descr);
    console.log(name);
}

function Log4(target: any, name: string | Symbol, position: number) {
    console.log("Parameter decorator");
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string
    private _price: number

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            console.log("Invalid price")
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}