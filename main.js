// const firstName = 'Bob';
// const lastName = 'Baxter';
// // console.log(firstName + ' ' + lastName);
// // console.log(`${firstName} ${lastName}`);

// const namePrinter = (firstName, lastName) => {
//     console.log(`${firstName} ${lastName}`)
// }

// namePrinter('Bob', 'Baxter');
// namePrinter('John', 'Doe');


const nuggetizer = (animal) => {
    return `processed ${animal}`;
}

// console.log(nuggetizer('pig'));

const dogBreed = (breed) => {
    return `my favorite dog breed is ${breed}`;
};

// console.log(dogBreed('border collie'));

// const dogBreedDiv = document.getElementById('dog-breeds');
// dogBreedDiv.innerHTML = dogBreed('bichon');
// console.log('dogBreedDiv', dogBreedDiv);

// const nuggetizerDiv = document.getElementById('nuggets');
// nuggetizerDiv.innerHTML = nuggetizer('bear');
// nuggetizerDiv.innerHTML += nuggetizer('kitten');

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
};

// printToDom('dog-breeds', dogBreed('lab'));
// printToDom('nuggets', 'YUMMY');



let bandNumber = 1;
const addBand = (bandName) => {
    // do stuff
    const listItem = `${bandNumber}. ${bandName}<br>`;
    bandNumber++;
    printToDom('band-list', listItem);
}

addBand('Metallica'); // 1. Metallica
addBand('Slayer'); // 2. Slayer
addBand('King Diamond');