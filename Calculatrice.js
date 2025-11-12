function somme()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) + Number(b);
    document.getElementById("résultat").value = c;
}

function multiplication()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) * Number(b);
    document.getElementById("résultat").value = c;
}

function division()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) / Number(b);
    document.getElementById("résultat").value = c;
}

function parité()
{
    var a = document.getElementById("t1").value;
    if (a % 2 === 0) {
        document.getElementById("parité").value = "Pair";
    } else {
        document.getElementById("parité").value = "Impair";
    }
}

function permuter()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = document.getElementById("t1").value;
    var a = document.getElementById("t2").value;
    document.getElementById("t1").value = a;
    document.getElementById("t2").value = c;
}

function effacer()
{
    t1.value = "";
    t2.value = "";
    résultat.value = "";
    parite.value = "";
}