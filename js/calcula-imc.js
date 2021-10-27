var pacientes=document.querySelectorAll('.paciente');
var titulo=document.querySelector("#titulo");

/*
for(var i=0; i < pacientes.length; i++){
    
    var paciente=pacientes[i];

    var tdPeso=paciente.querySelector('.info-peso');
    var peso=tdPeso.textContent;
    var pesoValido=validaPeso(peso);

    var tdAltura=paciente.querySelector('.info-altura');
    var altura=tdAltura.textContent;
    var alturavalia=validaAltura(altura);

    if(!pesoValido){
        pesoValido=false;
        tdPeso.textContent="Peso invalido";
        paciente.classList.add('paciente-invalido');
        
    }
    if(!alturavalia){
        alturavalia=false;
        tdAltura.textContent="Altura invalida";
        paciente.classList.add('paciente-invalido');
        
    }

    if(pesoValido && alturavalia){
        var imc=calcularImc(peso,altura);
        var tdImc=paciente.querySelector('.info-imc');
        tdImc.textContent=imc

    }
    
}
*/
function validaPeso(peso){
    if(peso >= 0 && peso <1000){
        return true;
    }else{
        return false;
    }
}
function validaAltura(altura){
    if(altura >=0 && altura<=3.00){
        return true;
    }else{
        return false;
    }
}
function validaGordura(gordura){
    if(gordura.length <=0 || gordura >200 ){
        return false;
    }else{
        return true;
    }
}
function validaNome(nome){
    if(nome.length == 0){
        return false;
    }else{
        return true;
    }
}
//calcula o imc 
function calcularImc(peso,altura){
    var imc=0;
    imc=peso /(altura * altura);
    return imc.toFixed(2);//toFixed retorna somente 2 casas apos a virgula
}

