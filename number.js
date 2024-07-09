var element = document.querySelector('.item');
var reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
];
function display(a) {
    if (element) {
        element.innerHTML = a.toString();
        return a.toString()
    }
    throw new Error('not valid');
}
console.log(display(reviews.length))
