
$('input').click(changeButton);
// alternativa, cu javascript nativ, js.vannila
// document.querySelector('input').addEventListener('click', changeButton);

function changeButton() {
    $('div').toggle();
    // $('div').is(':visible'); ----- ALTERNATIVA SA VERIFICAM DACA UN BUTON ESTE VIZIBIL SAU NU
    // alternativa, cu javascript nativ, js.vannila
    // document.querySelector('div').style.visibility= = 'hidden';
    // $('div').text('You clicked me!');
    let newElem = $('<span>Hello world!</span>');
    $('div').html(newElem);
}