// Instructions:

// You are tasked with organizing a gift exchange among friends; every member of the group has to both give, and receive, a gift from among the others.
 
// The only rule is that one can not receive a gift from the same person to whom they give a gift.
 
// Write a solution for the above requirements for groups of varying sizes using Javascript. Remember to account for edge cases that would make the above rules impossible to follow.

// example input:
// ['Susan', 'Beth', 'Abe', 'Ardi', 'Quan']
 
// example output:
// Abe gives a gift to Quan
// Ardi gives a gift to Beth
// Susan gives a gift to Abe
// Quan gives a gift to Ardi
// Beth gives a gift to Susan


// A function to randomly shuffle the given array
function shuffleInput(arr) {
    let start = arr.length - 1
    for(let i = start; i > 0; i--){
      const j = Math.floor(Math.random() * i);
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr;
}

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

function giftExchange(arr) {
    // filter any item in the list which is not of string type and convert the string to lowercase to eliminate duplicates fro eg: ['Susan', 'Beth', 'Abe', 'Ardi', 'Quan', 'susan', 1]
    let lowerCaseList = arr.filter((item) => typeof(item) === 'string').map((item) => {
        if(typeof(item) === 'string') {
            return item.toLowerCase();
        }
    });

    let uniqueList = [...new Set(lowerCaseList)]; // To make sure the names in the list are unique as a person cannot gift himself/herself
    let numOfInvalidInputType = arr.length - lowerCaseList.length;
    if(numOfInvalidInputType > 0) {
       console.log(numOfInvalidInputType + " invalid input found"); 
    }

    let numOfDuplicates = lowerCaseList.length - uniqueList.length;
    if(numOfDuplicates > 0) {
       console.log(numOfDuplicates + " duplicate name/s were found. You might consider entering their surnames instead to differentiate."); 
    }
    
    let shuffledArray = shuffleInput(uniqueList); // To randomly shuffle the people in the list so we do not get same pairs every time

    let numOfPeople = shuffledArray.length;

    if(numOfPeople < 3) {
        console.log("There should be at least 3 people in the list to satisfy the gift exchange rules");
    }
    else {
        shuffledArray.forEach((person, i) => {
            if(i === (numOfPeople - 1)) {
                console.log(person.capitalize() + " gives a gift to " + shuffledArray[0].capitalize());
            }
            else {
                console.log(person.capitalize() + " gives a gift to " + shuffledArray[i+1].capitalize());
            }
        });
    }
}

giftExchange(['Susan', 'Beth', 'Abe', 'Ardi', 'Quan', 'susan', 1]);
