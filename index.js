// Code your solution in this file
function findMatching(drivers, string) {
    return drivers.filter(function (name) {
        return string.toLowerCase() === name.toLowerCase()
    });
}

function fuzzyMatch(drivers, string) {
    const partOfName = string.length;
    return drivers.filter(function (name) {
        return name.slice(0, partOfName) === string
    });
}




function matchName (drivers, name) {
    return drivers.filter(function (match) {
      return match.name.toLowerCase() === name.toLowerCase();
    });
  }
