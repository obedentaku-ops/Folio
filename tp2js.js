function calcul_moyenne() {
    var n1 = prompt("Donnner la première note sur 20 :");
    var n2 = prompt("Donnner la deuxième note sur 20 :");
    var n3 = prompt("Donnner la troisième note sur 20 :");

    var somme = Number(n1) + Number(n2) + Number(n3);

    document.write("Voici la somme : " + somme + "<br>");
    var moyenne = somme/3;

    document.write("Voici la moyenne : " + moyenne + "<br>");
    
    if (moyenne < 10) {
        document.write("Redoublant.");
        document.write(" <br> ");
        document.write(" <br> ");
        document.write("<a href='tp2js.html'>Retour</a");
    }
    else if (moyenne < 12) {
        document.write("Admis - Passable.");
        document.write(" <br> ");
        document.write(" <br> ");
        document.write("<a href='tp2js.html'>Retour</a");
    }
    else if  (moyenne < 14) {
        document.write("Admis - Bien.");
        document.write(" <br> ");
        document.write(" <br> ");
        document.write("<a href='tp2js.html'>Retour</a");
    }

    else { 
       document.write("Admis - Très bien."); 
       document.write(" <br> ");
       document.write(" <br> ");
       document.write("<a href='tp2js.html'>Retour</a");
    }
    
}

    function temp() {
    let température = prompt("Saississez une température (en °C).");
    if (température < 10) {
        document.write("Température froide.");
        document.bgColor="turquoise"
        document.write(" <br> ");
        document.write(" <br> ");
        document.write("<a href='tp2js.html'>Retour</a");
    }
    else if (température < 25) {
        document.write("Température normale.");
        document.bgColor="ciel"
        document.write(" <br> ");
        document.write(" <br> ");
        document.write("<a href='tp2js.html'>Retour</a");
     }
   
    else {
       document.write("Température chaude.");
        document.bgColor="orange" 
        document.write(" <br> ");
        document.write(" <br> ");
        document.write("<a href='tp2js.html'>Retour</a");
        
    }

}

function comp() {
    var n1 = prompt("Donnez un nombre.");
    var n2 = prompt("Donnez un autre nombre.");

    if (Number(n1) < Number(n2)) {
        document.write(Number(n2) + "Est le plus grand." + "<br>" + Number(n1) + "Est le plius petit")
        document.write(" <br> ");
        document.write(" <br> ");
        document.write(" <br> ");
        document.write("<a href='tp2js.html'>Retour</a");
    }

    else { 
        document.write(Number(n1) + "Est le plus grand." + "<br>" + Number(n2) + "Est le plius petit")
        document.write(" <br> ");
        document.write(" <br> ");
        document.write(" <br> ");
        document.write("<a href='tp2js.html'>Retour</a");
    }
}
