const keys = event => {
    if (event.keyCode == 69) {
       model.trommer[0].play();
    }
    else if (event.keyCode == 82) {
       model.trommer[1].play();
    }
    else if (event.keyCode == 84) {
       model.trommer[2].play();
    }
    else if (event.keyCode == 68) {
       model.trommer[3].play();
    }
    else if(event.keyCode == 70) {
       model.trommer[4].play();
    }
    else if(event.keyCode == 71) {
       model.trommer[5].play();
    }
    else if(event.keyCode == 67) {
       model.trommer[6].play();
    }
    else if(event.keyCode == 86) {
       model.trommer[7].play();
    }
    else if(event.keyCode == 66) {
       model.trommer[8].play();
    }
    else {
       return;
    }
 };
 function lydListe() {
    for (let i = 0; i < model.lyder.length; i++) {
      model.trommer.push(new Audio(`${model.lyder[i].link}`))
    };
 };
