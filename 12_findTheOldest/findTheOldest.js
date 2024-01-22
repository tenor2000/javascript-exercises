const findTheOldest = function(arrPeople) {
    return arrPeople.reduce((oldest, curr) => {
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let currAge = getAge(curr.yearOfBirth, curr.yearOfDeath);
        return oldestAge < currAge ? curr : oldest;
        })
};

function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}
// Do not edit below this line
module.exports = findTheOldest;
