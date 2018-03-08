function CardDisp(s, v)    {

    this.suitInt = s;
    s = POKER.suitToString[s];
    v = POKER.rankToString[v];

    this.suit= s.toUpperCase();
    this.value= v;

    this.visible = false;
    this.show = function(x,y)  {
        //rectMode(CENTER);
        push();
        var w = cw;
        var h = ch;
        fill(255);
        stroke(0);
        strokeWeight(1);
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
            text(this.value, 0 -20, 0, w, h);
            imageMode(CENTER);
            image(icons[this.suitInt],0+20,0 , 40,40);
        }
        pop();
    }
}