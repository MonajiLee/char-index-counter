function countLetters(string){
    var noSpaces = string.split(" ").join("").toLowerCase();
    var letters = noSpaces.split("");
    var uniqueCounterObj = {}
    for (var i = 0 ; i < letters.length ; i++){
// records the number of repeats     
        if (uniqueCounterObj[letters[i]] == undefined){
            uniqueCounterObj[letters[i]] = [i];
        } else {
            uniqueCounterObj[letters[i]].push(i);
        }
// record the indices of any repeating letters
    }
    return uniqueCounterObj;
}

console.log(countLetters("hello"))

// var uniqueCounterObj = {
//     l: {[1, [array]},  
//          indices: [array] i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }