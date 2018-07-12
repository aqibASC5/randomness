const alphabet = "abcdefghijklmnopqrstuvwxyz";
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];

function randomNumber(){
    let x = Math.random();
    randomNumber = x*22;
    console.log(randomNumber);
}
randomNumber();


function randomLetter(){
    let x = Math.random();
    let randomNumber = x*27;
    randomNumber = Math.floor(randomNumber);
    console.log(alphabet[randomNumber]);
}
randomLetter();

function randomFoods(){
    let x = Math.random();
    let randomNumber = x*6;
    randomNumber = Math.floor(randomNumber);
    console.log(foods[randomNumber]);
}
randomFoods();

function randomStudents(){
    let x = Math.random();
    let randomNumber = x*7;
    randomNumber = Math.floor(randomNumber);
    console.log(students[randomNumber]);
}
randomStudents();


randomGroup - should console.log three random students from the “students” array
Hint: feel free to call another function within this one!
Note: it’s OK if the students in the group are not unique (For example: the same student can show up twice)
*/

