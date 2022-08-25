function onclickaction(item){
    var allElements = document.getElementsByClassName("list-item");
    for(var i = 0; i < allElements.length; i++ ){
        var elements = allElements[i];
        elements.removeAttribute("style");
    }
    item.style.fontWeight = "bold";
    alert(item.textContent.trim());
}