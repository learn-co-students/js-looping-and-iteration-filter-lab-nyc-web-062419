// Code your solution in this file
let test = ["grumpy angel", "little bob", "poopsie"]
function findMatching(drivers, name) {
    return drivers.filter(val => val.toUpperCase() === name.toUpperCase())
}
function fuzzyMatch(drivers, string) {
    return drivers.filter(val => val.indexOf(string) === 0)
}
function matchName(drivers, string) {
    return drivers.filter(val => val.name === string)
}



console.log(fuzzyMatch(test, "grum"));
