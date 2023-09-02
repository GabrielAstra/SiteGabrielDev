window.onload = function() {
    var meuPopup = document.getElementById("meuPopup");
    meuPopup.style.display = "block";

    setTimeout(function() {
        meuPopup.style.display = "none";
    }, 5000); 
}
