// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old.  Happy birthday to me!`)
    
}


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);
*/
function writeCards(recipients, event) {
    const cards = []
    for (let i=0; i < recipients.length; i++) {
        let entry = `Thank you, ${recipients[i]}, for the wonderful ${event} gift!`
        cards.push(entry)
    }
    return cards;
}
writeCards(["hello", "goodbye","these are names"], "party");

let counting;
function countDown(counting) {
    while (counting >= 0) {
    console.log(counting--);
    }
    
}
countDown(8);