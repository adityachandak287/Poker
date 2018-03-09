function Result(){
    this.visible = false;
    this.value = "";
    this.winner = false;
    this.show = function(x,y)  {
        if(this.visible == true) {
            var spacing = floor((width - 5 * cw) / 6.0 );

            fill(255,100);
            //noFill();
            stroke(0);
            strokeWeight(2);
            rectMode(CENTER);
            rect(x, y, width - spacing*2, 50 );

            textSize(40);
            //noStroke();
            strokeWeight(2);
            if(this.winner === true) {
                fill(255,255,0);
            }
            else
            {
                fill(255);
            }
            // imageMode(CENTER);
            // image(icons[0],x,y,40,40);
            textAlign(CENTER,CENTER);
            text(this.value, x, y ,width - spacing*2, 50);
            //console.log(this.value);
        }
    }
    return this;


}