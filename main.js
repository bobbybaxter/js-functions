const firstName = 'Bob';
const lastName = 'Baxter';
// console.log(firstName + ' ' + lastName);
// console.log(`${firstName} ${lastName}`);

const namePrinter = (firstName, lastName) => {
    console.log(`${firstName} ${lastName}`)
}

namePrinter('Bob', 'Baxter');
namePrinter('John', 'Doe');


const nuggetizer = (animal) => {
    return `processed ${animal}`;
}

console.log(nuggetizer('pig'));

const dogBreed = (breed) => {
    return `my favorite dog breed is ${breed}`;
}

console.log(dogBreed('border collie'));