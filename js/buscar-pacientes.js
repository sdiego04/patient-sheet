var botaoBusca = document.querySelector("#buscar-pacientes");

// metodo para realizar uma requisição de uma api
botaoBusca.addEventListener('click',function(){
    console.log("buscando paciente");
    var https='https://api-pacientes.herokuapp.com/pacientes';

    var xhr = new XMLHttpRequest();

    xhr.open("GET",https);//objeto que abre uma conexão com a api, tem que passar 2 paramentros 1 - o tipo, 2 - url
    xhr.addEventListener("load",function(){
        console.log(xhr.responseText);//responseText é um metodo que imprime o valor de uma requisição
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);// faz a leitura do objeto json
        //percorre todos os atributos do json e passa para um objeto
        pacientes.forEach(function(paciente) { 
            if(xhr.status == 200){
                var pacienteAdd={
                    nome:paciente.nome,
                    peso:paciente.peso,
                    altura:paciente.altura,
                    gordura:paciente.gordura,
                    imc:paciente.imc
    
                }
                
                var pacienteTr=montaTr(pacienteAdd);//usa um metodo para montar a tag <tr>
                var tabela = document.querySelector("#tabela-pacientes");//seleciona a tag pai
                tabela.appendChild(pacienteTr);//add junto a tag pai como filho
            }else{
                console.log(xhr.status);
                console.log("erro ao tentar fazer uma requisição");
                var erro = document.querySelector('#erro-ajax');
                erro.classList.remove("invisivel");
            }
            
    
        });

    });
    xhr.send();
});