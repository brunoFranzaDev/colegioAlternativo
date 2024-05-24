alert("ok")
(function() {
    console.log("Verificando a largura da janela: " + window.innerWidth);
    if (window.innerWidth <= 800) {
        console.log("Redirecionando para index2.html");
        window.location.href = 'indexMobile.html';
    } else {
        console.log("Mantendo na página atual");
    }
})();