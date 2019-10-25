function iniciaJogo() {
    var url= window.location.search;
    var nivel_jogo = url.replace("?", "");
    alert(nivel_jogo);

    var tempo_segundos = 0;

    if(nivel_jogo == 1) { //1 fácil -> 120 segundos
        tempo_segundos = 120;
    }

    if(nivel_jogo == 2) { //2 normal -> 60 segundos
        tempo_segundos = 60;
    }

    if(nivel_jogo == 3) {  //3 difícil -> 30 segundos
        tempo_segundos = 30;
    }

    //inserindo segundos no span
    document.getElementById('cronometro').innerHTML = tempo_segundos;
    
    //quantidades de balões
    var qntd_baloes = 20;
    cria_baloes(qntd_baloes);

    //imprimir qntd baloes inteiros
    document.getElementById('baloes_inteiros').innerHTML = qntd_baloes;
    document.getElementById('baloes_estourados').innerHTML = 0;
 }

 function cria_baloes(qntd_baloes) {
    for (var i = 1; i <= qntd_baloes; i++) {

        var balao = document.createElement("img");
        balao.src = 'imagens/balao_azul_pequeno.png';
        balao.style.margin = '12px';

        document.getElementById('cenario').appendChild(balao);

    }
 }