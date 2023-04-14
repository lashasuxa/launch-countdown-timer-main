const btn = document.querySelector("button");
const sec = document.querySelector("#sec");

// const myTimeout = setInterval(foo, 1000);
function foo() {
  let secondsNow = Number(sec.innerHTML);
  changedSec = secondsNow - 1;
  console.log(changedSec);
  sec.innerHTML = changedSec;
  if (changedSec == 0) {
    clearInterval(myTimeout);
  }
}
