// Set new equasion
function setEquasion(operation, difficulty) {
    // Set min and max values based on choosen difficulty
    let minInt;
    let maxInt;
    //The maximum is exclusive and the minimum is inclusive in function to get random integer
    if (difficulty === "easy") {
        minInt = 0;
        maxInt = 10; 
    } else {
        minInt = 10;
        maxInt = 100;
    }

    // Find random integers one digit or two digit
    if (operation === "addition") {
            let a = getRandomInt(minInt, maxInt);
            let b = getRandomInt(minInt, maxInt);

            return {"firstInteger" : a, "secondInteger" : b}
    } 

    // Find random integers for which a - b is not negative number
    if (operation === "subtraction") {
            let a = getRandomInt(minInt, maxInt);
            let b = getRandomInt(minInt, maxInt);

            while (a - b < 0) { 
                let firstInteger = getRandomInt(minInt, maxInt);
                let secondInteger = getRandomInt(minInt, maxInt);
                a = firstInteger;
                b = secondInteger;
            }
            return {"firstInteger" : a, "secondInteger" : b}
    }

    // Find random integers one digit or two digit
    if (operation === "multiplication") {
        let a = getRandomInt(minInt, maxInt);
        let b = getRandomInt(minInt, maxInt);
    
        return {"firstInteger" : a, "secondInteger" : b}
    } 

    // Division has only easy option. 
    // Find random integers for which result in whole number and exclude divisions with 0
    if (operation === "division") {
        let a = getRandomInt(1, maxInt);
        let b = getRandomInt(1, maxInt);

        while (a % b > 0) { 
            let firstInteger = getRandomInt(1, maxInt);
            let secondInteger = getRandomInt(1, maxInt);
            a = firstInteger;
            b = secondInteger;
        }
        return {"firstInteger" : a, "secondInteger" : b}
    } 
}

// Random integers for eqasion
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export default setEquasion;