/* point - the point value of the card: a number between 1 and 13.
   suit - the suit of the card: one of diamonds, clubs, hearts and spades.*/

function Card (point, suit){
    this.point = point;
    this.suit = suit;
}

var myCard = new Card(5, 'diamonds');
console.log(myCard.point);
console.log(myCard.suit);

// push url element into the Card object
// var getImage = {};
// getImage.push(Card);

Card.prototype.getImage = function(){
    return('cards/' + this.point + '_of_' + this.suit + '.png');
}

console.log(myCard.getImage(myCard));
