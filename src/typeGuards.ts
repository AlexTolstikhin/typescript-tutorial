type Combinable2 = string | number;


function addingAll(a:Combinable2, b: Combinable2) {
    // type guard
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmpl(emp: UnknownEmployee) {
    if ('privileges' in emp) {
        console.log('Privilage: ' + emp.privileges);
    }

    console.log('Name: ' + emp.name);

}


printEmpl({ name: 'Alex', startDate: new Date() })


class Car {
    drive() {
        console.log('Drive carr')
    }
}

class Truck {
    drive() {
        console.log('Drive truck')
    }

    loadCargo(amount: number) {
        console.log('Loading cargo ' + amount);
    }
}


type Vehicle = Car | Truck;


const v1 = new Car();
const v2 = new Truck();


function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if ('loadCargo' in vehicle) {
        vehicle.loadCargo(1999);
    }
}
// OR
function useVehicle2(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1999);
    }
}
