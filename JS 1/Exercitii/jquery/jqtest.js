<<<<<<< HEAD
$('input').click(changeButton);

function changeButton() {
    $('div').hide();
}












// $('input.first').click(changeButton);
// $('input.second').click(styleButton);


// // document.querySelector('.input').addEventListener('click', changeButton); ----- IN JAVA SCRIPT NATIVE

// function changeButton() {
//     let newElem= $('<span>Hello world!</span>')
//     $('div').slideToggle()
//             .html(newElem);

//     // $('div').text('You clicked!');  
//     // document.querySelector('div').style.visibility='hidden';
// }
// function styleButton() {
//     $('div').css({
//         'background-color': 'lime',
//         'top': '30vh'
//     });
// }
// document.querySelector('div').style.backgroundColor='lime';

// function changeButton() {
//     let newElem= $('<span>Hello world!</span>')
//     $('div').toggle()
//             .html(newElem);

//     // $('div').text('You clicked!');  
//     // document.querySelector('div').style.visibility='hidden';
// }
=======

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
>>>>>>> 6c42e707b7d91b5aa08be05aac84e92c888e215b
