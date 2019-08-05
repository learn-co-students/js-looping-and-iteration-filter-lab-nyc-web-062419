// Code your solution in this file
function findMatching(array, name) {
    return array.filter(function (n) { if (n.toLowerCase() === name.toLowerCase()) {
        return n
    } });
    
}

function fuzzyMatch(array, name) {
    return array.filter(function (n) { if (n.substring(0, 2) === name) {
        return n
    } });
}

function matchName(array, name) {
    return array.filter(x => x.name === name)
}