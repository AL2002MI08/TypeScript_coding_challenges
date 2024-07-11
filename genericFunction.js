function getRandomElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
// let num : string
console.log(getRandomElement([2, 3]));
