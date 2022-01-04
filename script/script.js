let interval;
let n = 0;
let play = false; // to prevent that interval gets faster when button start is clicked multiple times.

function startI() {
  if (!play) {
    interval = setInterval(update, 1000);
    play = true;
  }
}

function update() {
  let h1 = document.getElementsByTagName("h1")[0];
  h1.innerHTML = n;
  n++;
}

function stopI() {
  clearInterval(interval);
  play = false;
}
