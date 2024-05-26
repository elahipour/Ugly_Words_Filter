const wrapper = document.querySelector("#wrapper")
const bad = document.querySelector("#bad");
const container = document.querySelector("#container")
const badsList = document.querySelector("#badsList");
let bads = [];
let badsInText = [];
let noRepeated = [];
const Save = () => {

    bads.push(bad.value);
    const li = document.createElement('li');
    li.innerHTML = bad.value;
    badsList.appendChild(li);
    noRepeated = new Set(bads)
    bad.value='';
    bad.focus();

}
let splited = '';
let stars = '';
const text = document.querySelector("#text");
const checkString = (e) => {
    container.innerHTML = text.value;
    splited = container.innerHTML.split(" ");
    console.log(splited)
    bads = [...noRepeated];
    badsInText = [];

    for (let badWord of bads) {
        for (let i of splited) {
            if (badWord === i) {
                badsInText.push(i);
                for (let j = 0; j < i.length; j++) {
                    stars += '*'
                    //😲
                }
                const result = container.innerText.replace(i, stars)
                container.innerHTML = result;
                stars = '';
            }
        }
    }
}

window.addEventListener("load", function () {
    wrapper.style.opacity = "1";
})






