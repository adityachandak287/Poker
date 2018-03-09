function findBestHand(player)  {
    //this.bestHand = [];
    this.handIndices = [];
    if(player === 0)    {
        this.handIndices = [2,3,4,5,6,7,8];
    }
    else if(player ===1)    {
        this.handIndices = [0,1,4,5,6,7,8];
    }
    this.playerHands = [];
    for(var i =0;i<7;i++)
    {
        this.playerHands.push(hand.cards[this.handIndices[i]]);
        //console.log(hand.cards[this.handIndices[i]]);
    }

    this.playerHands = subsetHands(this.playerHands , 5);
    for(var i = 0; i< this.playerHands.length; i++) {
        this.playerHands[i] = new POKER.Hand(this.playerHands[i]);
    }
    this.handStrength = new Result();

    this.winners = POKER.getWinners(this.playerHands);
    this.details = this.winners[0].getHandDetails();
    this.handStrength.value = this.details.name;

    return this;

}