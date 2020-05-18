const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom"
];

const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

let result = [];

//Filter

console.log("Print out an array of the inventors whose name starts with 'A'");
result = inventors.filter(blah => blah.startsWith('A'));
console.log(result)

console.log("Print out an array of the inventors whose name contains 'n'");
result = inventors.filter(blah => blah.includes('n'));
console.log(result)

console.log("Print out an array of the inventors whose name has the same letter twice in a row(e.g.nn or mm)");
result = inventors.filter(blah => {
    let eachLetters = blah.split("");
    for (let i = 0; i < eachLetters.length; i++) {
        if (eachLetters[i] == eachLetters[i + 1])
            return blah;
    }
});
console.log(result);

console.log("Print out an array of the numbers which are odd");
result = numbers.filter(blah => blah % 2 == 1);
console.log(result);

console.log("Print out an array of the numbers that have two digits");
result = numbers.filter(blah => (blah >= 10 && blah <= 99));
console.log(result);

console.log("Print out an array of the numbers which are prime");
result = numbers.filter(blah => {
    if (blah == 1) {
        return false;
    }
    else if (blah == 2) {
        return true;
    } else {
        for (let i = 2; i < blah; i++) {
            if (blah % i == 0) {
                return false;
            }
        }
        return true;
    }
})
console.log(result);

//Map

console.log("Print out the first name of each inventor");
result = inventors.map(blah => blah.split(" ", 1));
console.log(result);

console.log("Print out the length of every inventor's full name");
result = inventors.map(blah => blah.length);
console.log(result);

console.log("Print out all the inventors' names in uppercase");
result = inventors.map(blah => blah.toUpperCase());
console.log(result);

console.log("Print out initials of all inventors(e.g. A.E., I.N., ...");
//wtf

console.log("Print out an array of every number multiplied by 100");
result = numbers.map(blah => blah*100);
console.log(result);

//Sort

console.log("Sort all the inventors in alphabetical order, A-Z");
result = inventors.sort((a,b) => {
    if(a < b) return -1
    else if(b < a) return 1
    else return 0
})
console.log(result);

console.log("Sort all the inventors in reverse alphabetical order, Z-A. Do not use the reverse method");
result = inventors.sort((a,b) => {
    if(a < b) return 1
    else if(b < a) return -1
    else return 0
})
console.log(result);

console.log("Sort all the inventors by length of name, shortest name first");
result = inventors.sort((a, b) => {
    if(a.length < b.length) return -1
    else if(b.length < a.length) return 1
    else return 0
})
console.log(result);

console.log("Sort all the inventors by length of name, longest name first. Do not use the reverse method");
result = inventors.sort((a, b) => {
    if(a.length < b.length) return 1
    else if(b.length < a.length) return -1
    else return 0
})
console.log(result);

//Reduce

console.log("Find the sum of all the numbers");
console.log("Find the sum of all the even numbers");
console.log("Create a string that has the first name of every inventor");

//Some & Every

console.log("Does any inventor have the letter 'y' in their name?");
console.log("Does every inventor have the letter 'e' in their name?");
console.log("Does every inventor have first name that's longer than 4 characters?");

//Find & FindIndex

console.log("Find the inventor that has a middle name");
console.log("Bonus: Return a new array, that only has inventors without a middle name. (Hint: think about splice, if you use findIndex. But you may also use another of the methods you've learned about above)");

console.log("Find the number divisible by 7");

console.log("Bonus: Return a new array, that only has the numbers that are not divisible by 7");

//Rocket
/*The numbers in the numeric array weren't randomly chosen! Every number is the sum of the two previous numbers. Create a function, fib(n) that gives you the nth entry, where n is any number. For example, fib(14) should return 377. This isn't related to the problem at hand - you won't need to use map or find or anything like that, but it's a fun exercise and a very common interview problem.*/