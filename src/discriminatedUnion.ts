interface Bird {
    type: 'bird';
    flyingSpeed: number;
}


interface Horse {
    type: 'horse';
    runnningSpeed: number;
}


type Animal = Bird | Horse;


function moveAnimal(animal: Animal) {
    let speed;
    switch(animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runnningSpeed;
            break;
    }


    console.log('Moving with speed: ' + speed);
}

const h1: Horse = {
    type: 'horse',
    runnningSpeed: 100
}

const b1: Animal = {
    type: 'bird',
    flyingSpeed: 200
}


moveAnimal(h1);
moveAnimal(b1);