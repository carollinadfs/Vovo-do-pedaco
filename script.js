//Menu hamburguer
let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")
let sombra = document.getElementById("sombra")

function abreFechaMenu(){
    //Se o menu está fechado
    if(window.getComputedStyle(menu).right == "-210px"){
        //Abrir o menu
        menu.style.right = 0

        //mostrar o icone x
        iconeX.style.display = "inline"

        //Esconde icone barras
        iconeBarras.style.display = "none"

        sombra.style.right = "0"
    }else{
        //Fechar o menu
        menu.style.right = "-210"

        //Esconder icone X
        menu.style.display = "none"

        //Mostrar o icone barras
        iconeBarras.style.display = "inline"
    }
}

onresize = () =>{
    if(window.getComputedStyle(menu).right == "-210"){
        //Mostra Icone X
        iconeX.style.display = "none"

    }else{
        //Esconde Icone barra
        iconeBarras.styke.display = "inline"
    }
}