function CardDisp(s, v)    {

    this.suitInt = s;
    this.rankInt = v;
    this.winner = false;
    this.x;
    this.y;

    this.suit= POKER.suitToString[this.suitInt].toUpperCase();
    this.value= POKER.rankToString[this.rankInt];

    this.visible = false;
    this.show = function(x,y)  {
        //rectMode(CENTER);
        push();
        this.x = x;
        this.y=y;
        var w = cw;
        var h = ch;
        fill(255);
        if(this.winner === false) {
            stroke(0);
        }
        else {
            stroke(255,255,0);
        }
        strokeWeight(2);
        translate(x , y);
        fill(255,100);
        rectMode(CENTER);
        rect(0, 0, w, h);
        if(this.visible) {
            textAlign(CENTER, CENTER);
            textSize(40);
            if(this.suit === 'H' || this.suit === 'D')
                fill(255,0,0);
            else
                fill(0);
            //text((this.value + this.suit), 0, 0, w, h);
            noStroke();
            text(this.value, -w/5, 0, w/2+10, h/2);

            imageMode(CENTER);
            image(icons[this.suitInt],16,0 , 40, 40);
        }
        pop();
    }
}