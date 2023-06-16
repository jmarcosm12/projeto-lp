var setaDireita = document.getElementById('seta-direita')
var setaEsquerda = document.getElementById('seta-esquerda')
var leonardo = document.getElementById('leonardo')
var samanta = document.getElementById('samanta')
var bruna = document.getElementById('bruna')

function direita(){
    leonardo.style ="display:none"
    bruna.style="display:flex"
    setaEsquerda.style="display:flex";"margin-top:105px"
    setaDireita.style="display:none"
}

function esquerda(){
    leonardo.style ="display:flex"
    bruna.style="display:none"
    setaEsquerda.style="display:none"
    setaDireita.style="display:flex";"margin-top:105px"
}