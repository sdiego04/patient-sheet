var pacientes = document.querySelectorAll(".paciente");
var tabela =document.querySelector("#tabela-pacientes");

tabela.addEventListener('dblclick',function(event){
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode;//TR = paciente = remover
    paiDoAlvo.classList.add("fadeOut");

    //essa funcão criar um timer para  quando apagar uma linha, ela ir desaparecendo pouco a pouco
    setTimeout(function(){
        paiDoAlvo.remove();
    }, 500);
   

    //event.target.parentNode.remove();  se fizer assim é a mesma coisa
});


/*metodo percorre todas as tag <tr>
pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick",function(){//atraves do double click ele ira remover
        this.remove();// para excluir o indice que foi clicado tem que usar this
    });
});*/