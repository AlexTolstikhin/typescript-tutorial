
abstract class Department {
    // private id: string;
    // private name: string;
    // private employees: string[] = [];

    constructor(
        protected readonly id: string,
        public name: string,
        private employees: string [] = []
    ) {}

    static createEmployee(name: string) {
        return { name: name }
    }
 
    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployees() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    describe() {
        console.log("implement abstract method")
    }
}

const dep = new ITDepartment('id', ['Maxim']);
dep.addEmployee('Max');
dep.addEmployee('Bob');

const employeee = Department.createEmployee('Philip');
console.log(employeee.name);

console.log(dep);
dep.describe();
dep.printEmployees();


class AcountingDepartment extends Department {
    private lastReports: string
    private static instance: AcountingDepartment;
    get mostRecentReport() {
        if (this.lastReports) {
            return this.lastReports;
        }
        throw Error("no Report added");
    }

    set mostRecentReport(report) {
        this.addReports(report);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReports = reports[0];
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AcountingDepartment('id2', []);

        return this.instance;
    }

    addReports(report: string) {
        this.lastReports = report;
        this.reports.push(report);
    }

    printReports() {
        console.log(this.reports);
    }

    describe() {
        console.log("Accounting department id" + this.id);
    }

}
// const acc = new AcountingDepartment('Accounting', ['Some Reports']);
const acc = AcountingDepartment.getInstance();
const acc2 = AcountingDepartment.getInstance();
console.log(acc);
acc.addReports('some reports here');
acc.printReports();
acc.mostRecentReport = '2021 report'
console.log(acc.mostRecentReport);


// Math.PI;
// const accountingCopy = { name: 'test', describe: dep.describe }

// accountingCopy.describe();

console.log(acc.describe())
console.log(acc);
console.log(acc2);