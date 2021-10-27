var campoFiltro = document.querySelector("#filtrar-tabela");

//função que pega o que foi digitado no input de filtro
campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");
    nomeInput=this.value;
    if(this.value.length > 0){
        pacientes.forEach(function(paciente){
        
        var expressao= new RegExp(nomeInput, "i");// expressão regular usada para realizar uma busca de letra por letra dentra da string
        var nomePaciente=paciente.querySelector(".info-nome").textContent;
        if(! expressao.test(nomePaciente)){// metodo test() faz a comparação
            paciente.classList.add("invisivel");
        }else{
            paciente.classList.remove("invisivel");
        }
    });

    }else{
        pacientes.forEach(function(paciente){
            paciente.classList.remove('invisivel');
        });
    }
    
});