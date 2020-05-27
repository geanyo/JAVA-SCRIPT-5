// CAND ESTE INDEPLINITA PROMISIUNEA
new Promise((resolve, reject) => {
  setTimeout(() => resolve("unu"), 2000)
}).then(result => {
    addDiv(result)
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("doi"), 3000)
    })
}).then(result => {
    addDiv(result)
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("trei"), 1000)
    })
}).then(result => {
    addDiv(result)
})

function addDiv(text) {
  let div = document.createElement("div")
  div.innerText = text
  document.querySelector("body").appendChild(div)
}

//  .catch(error => alert(error))

// myPromise.then(
//     result => alert(result),
//     error => alert(error)
// )

// CAND NU ESTE INDEPLINITA PROMISIUNEA

// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => reject('could not keep my promise!'), 2000)
// });

// myPromise.then(
//     result => alert(result),
//     error => alert(error)
// )

// de asemenea, mai putem scrie si asa:
// myPromise.then(result => alert(result))
//     .catch(error => alert(error))
