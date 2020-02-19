// const food = document.querySelector('body');
// const fart = document.createElement('h1');
// fart.textContent = 'f';
// food.appendChild(
//     fart
// )
// console.log('f')
const root = document.getElementById('root');
const proxyURL = 'https://cors-anywhere.herokuapp.com/';
let test;
let sectionArr = [];



// fetch the object (see egypt.json to see it)
let egypt = fetch(proxyURL + 'https://en.wikipedia.org/api/rest_v1/page/mobile-sections/Egyptian_pyramids')
// turn the object into json
            .then((r)=>r = r.json())
// set the object to egypt
            .then((r)=>egypt = r)
// map over egypt.remaining.sections; push those into an array that have an ID and the raw HTML as text
            .then((egypt)=> (
                egypt["remaining"]["sections"].map((section)=>sectionArr.push(`<div id=${section['id']}>${section["text"]}</div>`))
            ))
            // .then((r)=>console.log(sectionArr))
            // append each of them to the root
            .then((r)=>sectionArr.map((section)=> {
                item = document.createElement('html')
                hr = document.createElement('hr');
                item.innerHTML = section;
                root.appendChild
                root.appendChild(item);
                root.appendChild(hr)
            }
            ))







// async function egyptGet() {
//     egypt = await fetch(proxyURL + 'https://en.wikipedia.org/api/rest_v1/page/mobile-sections/Egyptian_pyramids')
//     .then((r)=>r = r.json())
//     .then((r)=>egypt = r)
//     .then((egypt)=> test = egypt.remaining.sections[0].text);
// }