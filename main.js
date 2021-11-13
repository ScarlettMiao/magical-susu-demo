let state = {
  top: 1,
  bottom: 0,
  hair: 2,
  hat: 0,
  shoes: 0,
  coat:0,
  accessory: 0,
  face: 0,
};
nexthair();

//function to change dress
function nexttop() {
  let top = document.querySelector("#top");
  if (state.top < 18) {
    state.top++;
    top.setAttribute("class", `top${state.top}`);
    console.log("top changed");
  } else if (state.top === 18) {
    state.top = 1;
    top.setAttribute("class", `top${state.top}`);
  }
}

function nextbottom() {
  let bottom = document.querySelector("#bottom");
  let bottomout = document.querySelector("#bottom-out");
  if (state.bottom < 15) {
    state.bottom++;
    if(state.bottom === 2 || state.bottom === 5 || state.bottom ===6){
      bottomout.setAttribute("class", `bottom-out${state.bottom}`); 
      bottom.setAttribute("class", `bottom0`); 
      console.log("bottomout changed");
    }else{
      bottom.setAttribute("class", `bottom${state.bottom}`); 
      bottomout.setAttribute("class", `bottom-out0`); 
      console.log("bottom changed");
    }
    
  } else if (state.bottom === 15) {
    state.bottom = 1;
    bottom.setAttribute("class", `bottom${state.bottom}`);
  }
}

function nextcoat() {
  let coat = document.querySelector("#coat");
  console.log(coat);
  if (state.coat < 8) {
    state.coat++;
    coat.setAttribute("class", `coat${state.coat}`); 
    console.log("coat changed");
  } else if (state.coat === 8) {
    state.coat = 0;
    coat.setAttribute("class", `coat${state.coat}`);
  }
}

function nextshoes() {
  let shoes = document.querySelector("#shoes");
  if (state.shoes < 8) {
    state.shoes++;
    shoes.setAttribute("class", `shoes${state.shoes}`);
  } else if (state.shoes === 8) {
    state.shoes = 0;
    shoes.setAttribute("class", `shoes${state.shoes}`);
  }
}

function nexthair() {
  let hair = document.querySelector("#hair");
  if (state.hair < 7) {
    state.hair++;
    hair.setAttribute("class", `hair${state.hair}`);
  } else if (state.hair === 7) {
    state.hair = 1;
    hair.setAttribute("class", `hair${state.hair}`);
  }
}

function nexthat() {
  let hat = document.querySelector("#hat");
  let hatin = document.querySelector("#hat-in");
  if (state.hat < 22) {
    state.hat++;
    if(state.hat === 16 || state.hat === 17){
      hatin.setAttribute("class", `hat-in${state.hat}`)
      hat.setAttribute("class", `hat0`);
    }else{
      hatin.setAttribute("class", `hat0`)
      hat.setAttribute("class", `hat${state.hat}`);
    }

  } else if (state.hat === 22) {
    state.hat = 0;
    hat.setAttribute("class", `hat${state.hat}`);
  }
}

function nextface() {
  let face = document.querySelector("#face");
  if (state.face < 5) {
    state.face++;
    face.setAttribute("class", `face${state.face}`);
  } else if (state.face === 5) {
    state.face = 0;
    face.setAttribute("class", `face${state.face}`);
  }
}

// function nextdrop() {
//   console.log("drop");
//   let drop = document.querySelector("#drop");
//   drop.setAttribute("draggable", true);
//   if (state.drop < 1) {
//     state.drop++;
//     drop.setAttribute("class", `drop${state.drop}`);
//     console.log("setting", state);
//   } else if (state.drop === 1) {
//     state.drop = 0;
//     drop.setAttribute("class", `drop${state.drop}`);
//     console.log(state);
//   }
// }
