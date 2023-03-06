function code(code) {
    setTimeout(code)
}

window.onload = function() {
    document.body.innerHTML += poly.html.body
    document.head.innerHTML += poly.html.head
    document.head.innerHTML += "<style id='style'></style>"
    document.getElementById("style").innerHTML += poly.style
}
