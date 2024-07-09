//String Types mini-challenge
// Write a function that will display the most recent reviewers name next to the review total,
// making sure to assign a type to the parameter, to prevent unwanted behaviour.
// : string
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
function displayLastViewer(name: string, loyal: boolean) {
   const check = loyal? 'loyal user indeed' : 'not a loyal user'
        if(element){
            return element.innerHTML = `${name} is ${check}`
         }
  
    
}
displayLastViewer(reviews[0].name,reviews[1].loyaltyUser)
type chars = string | number;
let message: chars;
message = 'hi'
message = 11
// type alphanumeric = string | number;
// let input: alphanumeric;
// input = 100;
// input = 'Hi'
let click : 'click'
click = "click"
