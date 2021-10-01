// const names: Array<string> = ['Max', 'Manuel'];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Done')
//     }, 2000)
// })


function merge<T extends object, U extends object>(a: T, b: U) {
    
    return Object.assign(a, b);
}

const mergedObj = merge({name: "Max"}, {age: 10})

interface Lengthy {
    length: number;
}

function countAndPrint <T extends Lengthy>( el: T): [T, string] {
    let descriptionText = 'Got no value';
    if (el.length) {
        descriptionText = `Got ${el.length} elements`;
    }
    return [el, descriptionText]
}

console.log(countAndPrint('hi there'));
console.log(countAndPrint(['1','2']));


function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}


class DataStorage<T extends string | number> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();

textStorage.addItem('test');
// textStorage.addItem(123); will cause errors

const numberStorage = new DataStorage<number>();

numberStorage.addItem(1);

// const objStorage = new DataStorage<object>();

// objStorage.addItem({ name: 'Alex'});
// objStorage.addItem({ name: 'Alex2'});
// objStorage.addItem({ name: 'Alex3'});
// objStorage.removeItem({ name: 'Alex' })
// console.log(objStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}


function createCourseGoal(title: string, descr: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = descr;
    courseGoal.completeUntil = date;

    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Alex'];
// names.push('Bob');
// names.pop();