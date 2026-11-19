is_changed = true

function myFunction() {
    if (is_changed == true)
    {
        is_changed = false
        document.getElementById("demo").style.backgroundColor = "rgb(247, 243, 234)";
        document.getElementById("demo").style.color = "rgb(37, 34, 31)";
    }
    else
    {
        is_changed = true
        document.getElementById("demo").style.backgroundColor = "rgb(14, 3, 6)";
        document.getElementById("demo").style.color = "white";
    }
}
