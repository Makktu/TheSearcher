const locationData = require('./../data/locations.json');

export default function searchData(userInput) {
  userInput = userInput.toUpperCase();

  let newResults = [];

  for (let k = 1; k < 5963; k++) {
    let thisRoom = locationData[0][k + '']['Room Num'];
    let thisDescription = locationData[0][k + '']['Description'];
    let thisDepartment = locationData[0][k + '']['Department'];
    if (
      (thisRoom?.includes(userInput) ||
        thisDescription?.includes(userInput) ||
        thisDepartment?.includes(userInput)) &&
      newResults.length < 30
    ) {
      newResults.push(locationData[0][k + '']);
    }
  }

  if (userInput == 'JOHN') {
    return 'THE CREATOR';
  }

  return newResults;
}
