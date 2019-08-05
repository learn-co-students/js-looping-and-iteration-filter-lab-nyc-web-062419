// Code your solution in this file
function findMatching(arr, name) {
  return arr.filter(function(driver) {
    return driver.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(arr, name) {
  return arr.filter(function(driver) {
    return driver[0].toLowerCase() === name[0].toLowerCase();
  });
}

function matchName(arr, name) {
  return arr.filter(function(driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
