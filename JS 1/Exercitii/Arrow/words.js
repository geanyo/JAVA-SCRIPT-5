const words = ["engine", "Linked In", "Login", "hello", "Java Script", "Amsterdam", "123" ];

var text= words.sort()
     .filter(word => word.charAt(0) >= "A" && word.charAt(0) <= "Z")
     .join("<br/>");

document.getElementById("words").innerHTML= text;

    //  ; se pune doar la sfarsit caci sunt mai multe sortari. Sortarile trebuie sa le pui una sub alta, sa fie mai usor de citit.
    