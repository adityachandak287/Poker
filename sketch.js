value = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
suit = ["Diamonds","Hearts","Clubs","Spades"];
cw = 80;
ch = 100;
pocket = [];
villian = [];
board = [];
var hand = [];
var deck;
shuffled = [];
var counter = 0;
var icons = [];
var winnerHand = [];
var villianBestHand,heroBestHand;
buttonVisible = false;
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
    if(counter<=6)
        counter++;
    switch(counter)
    {
        case 1:
            pocket[0].visible=true;
            pocket[1].visible=true;
            villian[0].visible=true;
            villian[1].visible=true;
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
            villianBestHand.handStrength.visible = true;
            heroBestHand.handStrength.visible = true;

            setTimeout(checkWinners,500);

            break;
    }

}



function checkWinners() {



    for(var i=0;i<winnerHand.length;i++)    {
        for(var j =0;j<winnerHand[i].length;j++)   {
            for(var k =0;k<2;k++) {
                if ((pocket[k].suitInt == winnerHand[i][j].getSuit()) && (pocket[k].rankInt == winnerHand[i][j].getRank())) {
                    pocket[k].winner = true;
                    heroBestHand.handStrength.winner = true;
                }
                if ((villian[k].suitInt == winnerHand[i][j].getSuit()) && (villian[k].rankInt == winnerHand[i][j].getRank())) {
                    villian[k].winner = true;
                    villianBestHand.handStrength.winner = true;
                }
            }
        }
    }
    for(var i=0;i<winnerHand.length;i++) {
        for (var j = 0; j < winnerHand[i].length; j++) {
            for (var k = 0; k < board.length; k++) {
                if ((board[k].suitInt === winnerHand[i][j].getSuit()) && (board[k].rankInt === winnerHand[i][j].getRank())) {
                    board[k].winner = true;
                }
            }
        }
    }

    buttonVisible = true;
}

function startHand(){



    hand = new POKER.Hand(deck.deal(9));
    var handcopy = hand.cards;

    // console.log("Hand");
    // console.log(hand.cards);
    // console.log(handcopy);
    pocket[0] = new CardDisp(hand.cards[0]._suit,hand.cards[0]._rank);
    pocket[1] = new CardDisp(hand.cards[1]._suit,hand.cards[1]._rank);

    villian[0] = new CardDisp(hand.cards[2]._suit,hand.cards[2]._rank);
    villian[1] = new CardDisp(hand.cards[3]._suit,hand.cards[3]._rank);

    var ind=4;
    for (var i=0;i<5;i++)
    {
        board[i] = new CardDisp(hand.cards[ind].getSuit(),hand.cards[ind].getRank());
        ind++;
    }

    villianBestHand = new findBestHand(0);
    heroBestHand = new findBestHand(1);
    var bestHands = [];
    bestHands.push(villianBestHand.winners[0].cards);
    bestHands.push(heroBestHand.winners[0].cards);
    for(var i = 0; i< bestHands.length; i++) {
        bestHands[i] = new POKER.Hand(bestHands[i]);
    }

    var winner = [];
    winner = POKER.getWinners(bestHands);
    winnerHand .push(winner[0].cards);

    for(var i =1;i<winner.length; i++)
    {
        if(winner[i].cards.details.name === winner[0].cards.details.name)   {
            winnerHand.push(winner[0].cards.winners[0].cards);
        }
    }
}

function drawStuff()    {
    pocket[0].show(width/2-cw/2,height-ch/2-25);
    pocket[1].show(width/2+cw/2,height-ch/2-25);

    villian[0].show(width/2-cw/2,ch/2+25);
    villian[1].show(width/2+cw/2,ch/2+25);

    var spacing = floor((width - 5 * cw) / 6.0 );
    var startX = spacing;

    for(var i=0;i<board.length;i++)
    {
        board[i].show( startX * (i+1) + (i * cw) + cw/2, height/2);
    }

    villianBestHand.handStrength.show(width/2 , 175);
    heroBestHand.handStrength.show(width/2, height -175);

}



function setup()    {

    createCanvas(windowWidth,windowHeight);
    //createCanvas(800,600);
    deck = new POKER.Deck();
    deck.shuffle();
    startHand();
}
function draw() {
    background(0,78,0);
    drawStuff();
    if(buttonVisible === true) {
        button = createButton('PLAY AGAIN');
        button.position(width - (pocket[1].x-cw/2)/2 - 10, height - 105);
        button.size(100, 60);
        button.mousePressed(function () {
            location.href = "index.html";
        });
    }

}