    // callback
    // function() {.....informatia}    -----  SE MAI POATE SCRIE SI ASA un arrow function
    // PIRAMID OF DOOM
    setTimeout(
    () => {
        // callback
        addDiv('unu')
        setTimeout(
            () => {
                // callback in callback
                addDiv('doi')
                setTimeout(
                    () => {
                        // callback in callback
                        addDiv('trei')
                    },
                    1000
                )
            },
            2000
        )
    },
    3000
)

function addDiv(text) {
    let div = document.createElement('div')
    div.innerText = text
    document.querySelector('body').appendChild(div)
}
// addDiv ----->>>> am selectat   
// let div = document.createElement('div')
// div.innerText = 'doi'
// document.querySelector('body').appendChild(div)
// --------> am refactorizat-o in scop global ----- select Text, click dreapta refactor