class Form{
    constructor() {

this.titlexc = createElement('h2',"Budget Optimizer");

this.monthinstruction = createElement('h3',"What is your monthly income?")
this.taxinstruction = createElement('h3',"What is your cumulative income tax rate?")
this.familyinstruction = createElement('h3',"What is your family size?")


this.monthinput = createInput("");
this.taxinput = createInput("");
this.familyinput = createInput("");

this.button = createButton('Submit');



    }

    display() {

        this.titlexc.position(430, 50);
        this.monthinput.position(430,160);
        this.taxinput.position(430,260);
        this.familyinput.position(430,360);
        this.monthinstruction.position(430,100)
        this.taxinstruction.position(430,200)
        this.familyinstruction.position(430,300)
        this.button.position(450,200)

    this.button.mousePressed(() => {
    
    player.monthlyincome = this.monthinput.value();
    player.taxes = this.taxinput.value();
    player.familysize = this.familyinput.value();
    playerCount +=1;
    player.index = playerCount;
     player.update();
    player.updateCount(playerCount);
   
    
});

}

}