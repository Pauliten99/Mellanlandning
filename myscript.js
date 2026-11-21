
// En variabel som håller reda på vilket läge sidan ska ha.
// true och false används för att växla mellan de två lägena.
is_changed = true;

// Funktionen körs när man klickar på knappen Dark mode.
function myFunction() {

    // if kontrollerar om variabeln is_changed är true.
    if (is_changed == true) {

        // Hittar elementet med id "demo" och ändrar bakgrundsfärgen.
        document.getElementById("demo").style.backgroundColor = "rgb(247, 243, 234)";

        // Ändrar textfärgen till svart.
        document.getElementById("demo").style.color = "black";

        // Ändrar variabeln så att nästa klick går till else-delen.
        is_changed = false;
    }

    // else körs när is_changed inte längre är true.
    else {

        // Ändrar bakgrunden till en mörk färg.
        document.getElementById("demo").style.backgroundColor = "rgb(14, 3, 6)";

        // Ändrar textfärgen till vit.
        document.getElementById("demo").style.color = "white";

        // Ändrar tillbaka variabeln så att nästa klick går till if-delen.
        is_changed = true;
    }
}
