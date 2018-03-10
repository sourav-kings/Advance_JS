var loadSelctedContent;

(function () {

    let menuItems = [];
    let getmenuItems = function () {
        var xhttp = new XMLHttpRequest();
        var dataUrl = "/test/menuItemList.json"
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                menuItems = JSON.parse(this.responseText);
                console.log(menuItems);
            }
        };
        xhttp.open("GET", dataUrl, true);
        xhttp.send();
    }
    getmenuItems();

    let createMenus = function () {

    }

    loadSelectedContent = function (value) {
        var xhttp = new XMLHttpRequest();
        var dataUrl = value;
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("home_content").innerHTML =
                    this.responseText;
                executeInlineScripts();
            }
        };
        xhttp.open("GET", dataUrl, true);
        xhttp.send();
    }

    function executeInlineScripts() {

        var newScript = document.createElement("script");
        newScript.src = "https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js";
        document.getElementById("home_content").appendChild(newScript);

        //reference -- https://www.danielcrabtree.com/blog/25/gotchas-with-dynamically-adding-script-tags-to-html
    }


    loadSelectedContent("/test/main.html");
})()