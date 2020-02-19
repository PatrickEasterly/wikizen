// // const food = document.querySelector('body');
// // const fart = document.createElement('h1');
// // fart.textContent = 'f';
// // food.appendChild(
// //     fart
// // )
// // console.log('f')
// const root = document.getElementById('root');
// const proxyURL = 'https://cors-anywhere.herokuapp.com/';
// let test;
// let sectionArr = [];



// // fetch the object (see egypt.json to see it)
// let egypt = fetch(proxyURL + 'https://en.wikipedia.org/api/rest_v1/page/mobile-sections/Egyptian_pyramids')
// // turn the object into json
//             .then((r)=>r = r.json())
// // set the object to egypt
//             .then((r)=>egypt = r)
// // map over egypt.remaining.sections; push those into an array that have an ID and the raw HTML as text
//             .then((egypt)=> (
//                 egypt["remaining"]["sections"].map((section)=>sectionArr.push(`<div id=${section['id']}>${section["text"]}</div>`))
//             ))
//             // .then((r)=>console.log(sectionArr))
//             // append each of them to the root
//             .then((r)=>sectionArr.map((section)=> {
//                 item = document.createElement('html')
//                 hr = document.createElement('hr');
//                 item.innerHTML = section;
//                 root.appendChild
//                 root.appendChild(item);
//                 root.appendChild(hr)
//             }
//             ))





// // given a string, search that shit
// // https://en.wikipedia.org/w/api.php?format=json&action=opensearch&search=CHANGE***ME&limit=1&namespace=0
// // gives you ["pet",["Pet"],[""],["https://en.wikipedia.org/wiki/Pet"]]

// // given the title, use https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exlimit=1&explaintext&titles=CHAMGE***ME
// // to get a raw text version of the page


// // async function egyptGet() {
// //     egypt = await fetch(proxyURL + 'https://en.wikipedia.org/api/rest_v1/page/mobile-sections/Egyptian_pyramids')
// //     .then((r)=>r = r.json())
// //     .then((r)=>egypt = r)
// //     .then((egypt)=> test = egypt.remaining.sections[0].text);
// // }

////////////////////////////////////////////////////////////////

let sectionZero = {
    "id": 1,
    "text": "\n<figure class=\"mw-default-size mw-halign-right\"><a href=\"/wiki/File:Mastaba-faraoun-3.jpg\" class=\"image\"><img src=\"//upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Mastaba-faraoun-3.jpg/220px-Mastaba-faraoun-3.jpg\" data-file-width=\"667\" data-file-height=\"500\" data-file-type=\"bitmap\" height=\"165\" width=\"220\" srcset=\"//upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Mastaba-faraoun-3.jpg/440px-Mastaba-faraoun-3.jpg 2x, //upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Mastaba-faraoun-3.jpg/330px-Mastaba-faraoun-3.jpg 1.5x\"></a><figcaption>The <a href=\"/wiki/Mastabat_al-Fir’aun\" title=\"Mastabat al-Fir’aun\" class=\"mw-redirect\">Mastabat al-Fir’aun</a> at <a href=\"/wiki/Saqqara\" title=\"Saqqara\">Saqqara</a></figcaption></figure>\n\n<p>By the time of the <a href=\"/wiki/Early_Dynastic_Period_(Egypt)\" title=\"Early Dynastic Period (Egypt)\">Early Dynastic Period</a>, those with sufficient means were buried in bench-like structures known as <a href=\"/wiki/Mastaba\" title=\"Mastaba\">mastabas</a>.<span class=\"mw-ref\" id=\"cite_ref-9\"><a href=\"#cite_note-9\" style=\"counter-reset: mw-Ref 9;\"><span class=\"mw-reflink-text\">[9]</span></a></span><span class=\"mw-ref\" id=\"cite_ref-10\"><a href=\"#cite_note-10\" style=\"counter-reset: mw-Ref 10;\"><span class=\"mw-reflink-text\">[10]</span></a></span></p>\n\n<p>The second historically-documented Egyptian pyramid is attributed to the architect <a href=\"/wiki/Imhotep\" title=\"Imhotep\">Imhotep</a>, who planned what Egyptologists believe to be a tomb for the pharaoh <a href=\"/wiki/Djoser\" title=\"Djoser\">Djoser</a>. Imhotep is credited with being the first to conceive the notion of stacking mastabas on top of each other, creating an edifice composed of a number of \"steps\" that decreased in size towards its apex. The result was the <a href=\"/wiki/Pyramid_of_Djoser\" title=\"Pyramid of Djoser\">Pyramid of Djoser</a>, which was designed to serve as a gigantic stairway by which the soul of the deceased pharaoh could ascend to the heavens. Such was the importance of Imhotep's achievement that he was deified by later Egyptians.<span class=\"mw-ref\" id=\"cite_ref-11\"><a href=\"#cite_note-11\" style=\"counter-reset: mw-Ref 11;\"><span class=\"mw-reflink-text\">[11]</span></a></span></p>\n\n<p>The most prolific pyramid-building phase coincided with the greatest degree of absolutist rule. It was during this time of the <a href=\"/wiki/Old_Kingdom_of_Egypt\" title=\"Old Kingdom of Egypt\">Old Kingdom of Egypt</a> that the most famous pyramids, the <a href=\"/wiki/Giza_pyramid_complex\" title=\"Giza pyramid complex\">Giza pyramid complex</a>, were built. Over time, as authority became less centralized, the ability and willingness to harness the resources required for <a href=\"/wiki/Egyptian_pyramid_construction_techniques\" title=\"Egyptian pyramid construction techniques\">construction on this massive scale</a> decreased, and later pyramids were smaller, less well-built and often hastily constructed.</p>\n\n<p>Long after the end of Egypt's own pyramid-building period, a burst of pyramid building occurred in what is present-day <a href=\"/wiki/Sudan\" title=\"Sudan\">Sudan</a>, after much of Egypt came under the rule of the <a href=\"/wiki/Kingdom_of_Kush\" title=\"Kingdom of Kush\">Kingdom of Kush</a>, which was then based at <a href=\"/wiki/Napata\" title=\"Napata\">Napata</a>. Napatan rule, known as the 25th Dynasty, lasted from 750 BCE to 664 BCE, and during that time Egyptian culture made an indelible impression on the Kushites. The Meroitic period of Kushite history, when the kingdom was centered on <a href=\"/wiki/Meroë\" title=\"Meroë\">Meroë</a>, (approximately in the period between 300 BCE and 300 CE), experienced a full-blown <a href=\"/wiki/Nubian_pyramids\" title=\"Nubian pyramids\">pyramid-building revival</a>, which saw more than two hundred Egyptian-inspired indigenous royal pyramid-tombs constructed in the vicinity of the kingdom's capital cities.</p>\n\n<p><a href=\"/wiki/Al-Aziz_Uthman\" title=\"Al-Aziz Uthman\">Al-Aziz Uthman</a> (1171–1198), the second Ayyubid Sultan of Egypt, tried to destroy the Giza pyramid complex. He gave up after only damaging the <a href=\"/wiki/Pyramid_of_Menkaure\" title=\"Pyramid of Menkaure\">Pyramid of Menkaure</a> because the task proved too large.<span class=\"mw-ref\" id=\"cite_ref-12\"><a href=\"#cite_note-12\" style=\"counter-reset: mw-Ref 12;\"><span class=\"mw-reflink-text\">[12]</span></a></span></p>\n\n",
    "toclevel": 1,
    "line": "Historical development",
    "anchor": "Historical_development"
}
sectionZero = {...sectionZero, text: sectionZero.text.replace(/href=\"\/wiki/g, 'href=\"https://en.wikipedia.org/wiki')}
let root = document.getElementById('root');
let divy = document.createElement('html');
divy.innerHTML=sectionZero['text'];
root.appendChild(divy)
