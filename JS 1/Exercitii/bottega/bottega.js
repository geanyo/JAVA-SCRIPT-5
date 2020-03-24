function spanTitle() {
    let title= document.querySelector('.title');
    let text= title.innerHTML;
    let letters= text.split('');
    let spans= letters.map(
        letter=> {
            let span= document.createElement('span');
            span.innerText= letter;
            return span;
        }
    );
    title.innerHTML= '';
    spans.forEach(span => {
        title.appendChild(span);
    });
    return spans;
}

let spans= spanTitle();
spans.sort( function() {return 0.5 - Math.random()});
let spansToAnimate= spans.slice(0, 6);
spansToAnimate.forEach(span=> span.classList.add('bounce'));










// let mySpan= spans[1];
// mySpan.classList.add('bounce');

// spanTitle();
// var spans= document.querySelector('.title').childNodes();
// let my span= spans[0];




















// function spanTitle() {
//     let title= document.querySelector('.title');
//     let text= title.innerHTML.trim();
//     let letters= text.split('');
//     let spans= letters.map(
//         function(letter) {
//             let elem= document.createElement("span");
//             elem.innerText= letter;
//             return elem;
//         }
//     );
//     title.innerHTML= '';
//     spans.forEach(span=> title.appendChild(span));
// }

// spanTitle();