// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(d => d.toLowerCase() === name.toLowerCase());
}
function fuzzyMatch(drivers, input) {
  return drivers.filter(d => d.startsWith(input));
}
function matchName(drivers, name) {
  return drivers.filter(d => d.name === name);
}
