const container = document.querySelector("#container");
const bad = document.querySelector("#bad-word");
const result = document.querySelector("#container>div:last-child");
const badsList = document.querySelector("#badsList");

let bads = [];
let badsInText = [];
let noRepeated = [];

const Save = () => {
  const isFind = bads.find((word) => word === bad.value);
  if (isFind) return;
  bads.push(bad.value);
  const li = document.createElement("li");
  li.innerHTML = bad.value;
  badsList.appendChild(li);
  noRepeated = new Set(bads);
  bad.value = "";
  bad.focus();
};
let splited = "";
let stars = "";
const text = document.querySelector("#text");
const checkString = (e) => {
  result.innerHTML = text.value;
  splited = result.innerHTML.split(" ");
  bads = [...noRepeated];
  badsInText = [];

  for (let badWord of bads) {
    for (let i of splited) {
      if (i.includes(badWord)) {
        badsInText.push(i);
        for (let j = 0; j < i.length; j++) {
          stars += "*";
          //😲
        }
        const res = result.innerText.replace(i, stars);
        result.innerHTML = res;
        stars = "";
      }
    }
  }
};

window.addEventListener("load", function () {
  container.style.opacity = "1";
});
