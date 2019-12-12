// var code= 0;

// while (code< 128) {
//     document.write(code + " " + String.fromCharCode(code));
//     document.write("<br>");
//     code++;
// }

// while (code< 1024) {
//     document.write(code + " " + String.fromCharCode(code));
//     document.write("<br>");
//     code++;
// }

for (var code= 0; code< 255; code++) {
    document.write(code + " " + String.fromCharCode(code));
    document.write("<br>");
}
// ASA ESTE MULT MAI COMPACT - SE GRUPEAZA TOATE INTR-O SINGURA LINIE. ESTE MULT MAI SIMPLU PENTRU CAND SUNT CAZURI IN CARE STII VARIABILA, DE CATE ORI SA SE REPETE (IN ACEST CAZ, 255)
    
// for ( ; ; ) {
//     console.log ("HELLO");
// }
