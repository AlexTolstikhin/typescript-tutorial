function additionCombinable(a: string, b:string): string
function additionCombinable(a: number, b:number): number
function additionCombinable(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = additionCombinable('Max', 'Shwarz');
result.split(' ');