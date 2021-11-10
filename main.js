let state = {
  top: 0,
  bottom: 0,
  hair: 2,
  hat: 0,
  shoes: 0,
  accessory: 0,
  face: 0,
};
nexthair();
nexttop();
nextface();

//function to change dress
function nexttop() {
  let top = document.querySelector("#top");
  if (state.top < 17) {
    state.top++;
    top.setAttribute("class", `top${state.top}`);
    console.log("top changed");
  } else if (state.top === 17) {
    state.top = 2;
    top.setAttribute("class", `top${state.top}`);
  }
}

function nextbottom() {
  let bottom = document.querySelector("#bottom");
  if (state.bottom < 15) {
    state.bottom++;
    bottom.setAttribute("class", `bottom${state.bottom}`); 
    console.log("bottom changed");
  } else if (state.bottom === 15) {
    state.bottom = 1;
    bottom.setAttribute("class", `bottom${state.bottom}`);
  }
}

function nextshoes() {
  let shoes = document.querySelector("#shoes");
  if (state.shoes < 3) {
    state.shoes++;
    shoes.setAttribute("class", `shoes${state.shoes}`);
  } else if (state.shoes === 3) {
    state.shoes = 0;
    shoes.setAttribute("class", `shoes${state.shoes}`);
  }
}
function nexthair() {
  let hair = document.querySelector("#hair");
  if (state.hair < 8) {
    state.hair++;
    hair.setAttribute("class", `hair${state.hair}`);
  } else if (state.hair === 8) {
    state.hair = 1;
    hair.setAttribute("class", `hair${state.hair}`);
  }
}

function nexthat() {
  let hat = document.querySelector("#hat");
  if (state.hat < 4) {
    state.hat++;
    hat.setAttribute("class", `hat${state.hat}`);
  } else if (state.hat === 4) {
    state.hat = 0;
    hat.setAttribute("class", `hat${state.hat}`);
  }
}

function nextface() {
  let face = document.querySelector("#face");
  if (state.face < 2) {
    state.face++;
    face.setAttribute("class", `face${state.face}`);
  } else if (state.face === 2) {
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
