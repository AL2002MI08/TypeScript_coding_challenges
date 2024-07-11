function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
// let num : string
console.log(getRandomElement<number>([2,3]))