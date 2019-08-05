// Code your solution in this file
function findMatching(drivers, name) {
    let matching = [];
    matching = drivers.filter(function (driver) { return driver.toLowerCase() == name.toLowerCase()});
    return matching;

}

function fuzzyMatch(drivers, name) {
    let matching = [];
    matching = drivers.filter(function (driver) { return driver[0].toLowerCase() == name[0].toLowerCase()});
    return matching;

}

function matchName(drivers, name) {
    let matching = [];
    matching = drivers.filter(function (driver) { return driver.name.toLowerCase() == name.toLowerCase()});
    return matching;

}
