// Code your solution in this file
function findMatching (drivers, name) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase() === name.toLowerCase()
    })
}

function fuzzyMatch(drivers, letters){
    return drivers.filter(function(driver) {
        return driver.toLowerCase().split("")[0,1] === letters.toLowerCase().split("")[0,1];
    })
}

function matchName(drivers, name){
    return drivers.filter(function(driver){
        return driver.name.toLowerCase() === name.toLowerCase();
    })
}