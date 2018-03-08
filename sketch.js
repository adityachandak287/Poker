value = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
suit = ["Diamonds","Hearts","Clubs","Spades"];
const cw = 80;
const ch = 100;
pocket = [];
board = [];
deck = [];
shuffled = [];
var counter = 0;
var handStrength;
var icons = [];

function preload()  {
    hearts = loadImage('data/hearts.png');
    diamonds = loadImage('data/diamonds.png');
    clubs = loadImage('data/clubs.png');
    spades = loadImage('data/spades.png');
    icons.push(hearts);
    icons.push(diamonds);
    icons.push(clubs);
    icons.push(spades);
}

function mousePressed() {
    if(counter<=5)
        counter++;
    switch(counter)
    {
        case 1:
            pocket[0].visible=true;
            pocket[1].visible=true
            break;
        case 2:
            for(var i=0;i<3;i++)
            {
                board[i].visible=true;
            }
            break;
        case 3:
            board[3].visible=true;
            break;
        case 4:
            board[4].visible=true;
            break;
        case 5:
            handStrength.visible = true;
            break;
    }

}

function setup()    {

    createCanvas(800,600);

    deck = new POKER.Deck(),
    deck.shuffle();


    var hand = new POKER.Hand(deck.deal(7));
    var handcopy = hand.cards;

    // console.log("Hand");
    // console.log(hand.cards);
    // console.log(handcopy);

    pocket[0] = new CardDisp(hand.cards[0].getSuit(),hand.cards[0].getRank());
    pocket[1] = new CardDisp(hand.cards[1].getSuit(),hand.cards[1].getRank());
    var ind=2;
    for (var i=0;i<5;i++)
    {
        board.push(new CardDisp(hand.cards[ind].getSuit(),hand.cards[ind].getRank()));
        ind++;
    }

    var hands = subsetHands(handcopy , 5);

    for(var i = 0; i< hands.length; i++) {
        hands[i] = new POKER.Hand(hands[i]);
    }

    //console.log(hands);
    handStrength = new Result();

    var winners = POKER.getWinners(hands);
    var details = winners[0].getHandDetails();
    //console.log(details.name);
    handStrength.value = details.name;




    // pocket[0] = shuffled.pop();
    // pocket[1] = shuffled.pop();
    // for (let i=0;i<5;i++)
    // {
    //     board.push(shuffled.pop());
    // }

}
function draw() {
    background(0,78,0);

    pocket[0].show(width/2-cw/2,height-ch/2-200);
    pocket[1].show(width/2+cw/2,height-ch/2-200);

    var spacing = floor((width - 5 * cw) / 6.0 );
    var startX = spacing;

    for(let i=0;i<board.length;i++)
    {
        board[i].show( startX * (i+1) + (i * cw) + cw/2, 150);
    }

    handStrength.show();



}