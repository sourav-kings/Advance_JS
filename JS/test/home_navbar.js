    (function loadDoc() {
        var xhttp = new XMLHttpRequest();
        var dataUrl = "/test/NavbarMenu.html"
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("home_navbar").innerHTML =
                    this.responseText;
            }
        };
        xhttp.open("GET", dataUrl, true);
        xhttp.send();
    })();