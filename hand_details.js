function Result(){
    this.visible = false;
    this.value = "";
    this.spacing = floor((width - 5 * cw) / 6.0 );
    this.show = function()  {
        push();
        //translate(width/2, height-100);
        fill(255,100);
        stroke(0);
        strokeWeight(4);
        rectMode(CENTER);
        rect(width/2, height-100, width - this.spacing*2, 200 - this.spacing );
        if(this.visible)
        {
            textAlign(CENTER,CENTER);
            textSize(56);
            noStroke();
            strokeWeight(1);
            fill(0);
            text(this.value , width/2, height-100, width - this.spacing*2, height - this.spacing);
        }
        pop();
    }


}