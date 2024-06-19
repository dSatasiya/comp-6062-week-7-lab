/*const car = {
    make: 'Ford',
    year: 2023,
    doors: 4,
    used: true,
    color: '#000',
    features : [
        'Power Streering',
        'TVs',
        'Cool breaks',
        'automatic',
        'climate control',
        'ABS',
        '4 wheel drive',
        // 'hybrid'
    ]
};

console.log(car);

// Setting the car price object key value pair after initial object creation
car.price = 15000;
console.log(car.price);

// Modify the features to all lowercase and add the string "reduced pricing"
const updatedFeatures = car.features.map(value => {
    return value.toLowerCase();
}).map(value => {
    return `${value} reduced pricing`;
});
console.log(updatedFeatures);

// Printing our car information to the page
document.querySelector('#make').innerHTML = car.make;
document.querySelector('#year').innerHTML = car.year;
document.querySelector('#features').innerHTML = car.features;

const inputNumber = document.querySelector('#numberInput');
inputNumber.addEventListener('change', function(event) {
    console.log('fruitName: ', event.target.value);
});

// Combine all features as a single comma separated string
const combinedString = car.features.join(', ');
console.log(combinedString);

// loop over each car feature and print to the console
car.features.forEach(value => {
    console.log(value);
});*/

//document.addEventListener('DOMContentLoaded', (event) => {  // attaches an event handeler to the document.
const inputElement = document.querySelector('#numberInput');
    
inputElement.addEventListener('input', function(event) {
    const numberValue = parseInt(event.target.value, 10);   // integer parsed with parseInt function , 10 = decimal 
    if (numberValue <= -10 || numberValue >= 10) {
        alert('The number should be between -10 and 10');
    }
});

 const fruit = {
    name: 'Apple',
    color: 'Red',
    taste: 'Sweet'
};

document.querySelector('#fruitName').innerHTML = `Name: ${fruit.name}`;
document.querySelector('#fruitColor').innerHTML = `Color: ${fruit.color}`;
document.querySelector('#fruitTaste').innerHTML = `Taste: ${fruit.taste}`;
//});
