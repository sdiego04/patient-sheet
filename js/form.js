var botaoAdd=document.querySelector("#adicionar-paciente");

//sempre que clicar no botão essa função sera ativada
botaoAdd.addEventListener('click',function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");//seleciona o form apos o click do botão, e pega as info do mesmo

    var paciente = obtemPaciente(form);//retorna um obj com os dados do paciente
    
    var pacientesTr=montaTr(paciente);//retorna um <tr> pronta com os dados do paciente

    if(!validaPaciente(paciente)){
        return;
    }
    
    var tabela = document.querySelector('#tabela-pacientes');//adiciona uma classse css a tabela
    tabela.appendChild(pacientesTr);//adiciona as tag <td> para a tag pai <tr>

    //limpa os dados do input apos inserir
    form.reset();
    
});

//somente obtem os valores do form e cria um objeto
function obtemPaciente(form){

    var paciente={
        nome:form.nome.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value,
        imc:calcularImc(form.peso.value,form.altura.value)
    }

    return paciente;
}
//monta a tag tr
function montaTr(paciente){
    var pacientesTr=document.createElement("tr");//cria a tag <tr>

    pacientesTr.classList.add("paciente");//adiciona uma classe a tag <tr>
    //valida os parametros
    var erros = validaPaciente(paciente);
    if(erros.length > 0){
        exibeMensagensErro(erros);//busca as mesangens de erro

        return;
    }
;
    //recebe os valores ja com as tag <td> e a classe pronta
    var nomeTd=montaTd(paciente.nome, 'info-nome');
    var pesoTd=montaTd(paciente.peso, 'info-peso');
    var alturaTd=montaTd(paciente.altura, 'info-altura');
    var gorduraTd=montaTd(paciente.gordura, 'info-gordura');
    var imcTd=montaTd(paciente.imc, 'info-imc');
    //add a tag <td> para tag pai <tr>
    pacientesTr.appendChild(nomeTd);
    pacientesTr.appendChild(pesoTd);
    pacientesTr.appendChild(alturaTd);
    pacientesTr.appendChild(gorduraTd);
    pacientesTr.appendChild(imcTd);
    
    return pacientesTr;
}

//metodo que cria uma td, set o valor e uma classe css
function montaTd(dado,classe){
    var td= document.createElement("td");
    td.textContent=dado;
    td.classList.add(classe);

    return td;
}
//metodo que retorna apenas a mensagem de erro
function validaPaciente(paciente){
    
    var erros=[];
    if(!validaPeso(paciente.peso)){
        erros.push("O peso é invalido");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("altura vazia o invalida");
    }
    if(!validaNome(paciente.nome)){
        erros.push("nome invalido ou fazio");
    }
    if(!validaGordura(paciente.gordura)){
        erros.push("gordura invalida");
    }
    return erros;
}
//cria uma tag <ul> e adiona uma lista com os erros
function exibeMensagensErro(erros){  
 var ul = document.querySelector('#mensagens-erro');
 ul.innerHTML="";//inicializa um tag com o valor desejado
 erros.forEach(function(erro) {
     var li = document.createElement("li");
     li.textContent= erro;
     li.classList.add('mensagem-de-erro');
     ul.appendChild(li);
 });

 
}