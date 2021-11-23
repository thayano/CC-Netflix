/*var nome = "thayano";
var idade =27;
var idade2 =27;


//alert(nome + " tem "+ idade + "anos");
alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(nome.toUpperCase(nome));


*/

//var lista = ["maça", "banana", "manga"];
//lista.push("uva");
//lista.pop();

//console.log(lista.reverse());
//console.log(lista[0]);
////console.log(lista.toString());
//console.log(lista.join(" "));
//var frutas = {nome: "banana", cor:"amarela"};
//console.log(frutas.join(" | "));

//var fruta = [{nome:"maça", cor: "vermelho"}, {nome: "banana", cor:"roza"}]
//console.log(fruta);
//alert(fruta[1].nome);
//var idade = prompt("qual sua idade?");
//var idade = 17;
//if(idade >= 18){

//    alert("maior de idade");

//}else {
  //  alert("menor de idade");

//};

//var count =0;

//while (count <= 5){
    //console.log(count);
  //  count++; 
//}
/*
var count;
for (count=0; count <= 5 ; count++){
    alert(count);
}
*/

//var d = new Date();
//alert(d.getMonth());
/*function soma(n1, n2){

  return n1 + n2;
}
alert (soma(5 , 5));

function setReplace(frase, name, nome_nome ){
  return frase.replace(name, nome_nome)
}
alert(setReplace("vai japão", "japão", "brasil"));




function soma(n1, n2){
  return n1 + n2;
}

function validaidade(idade){
  var validade;

  if(idade >=18){
    validade = true;
  }
  else{
    validade = false;
  }
  return validade;
}

var idade = prompt("qual sua idade");
console.log(validaidade(idade));


function clicou(){

 // alert("Obrigado por clicar");
 document.getElementById("obg").innerHTML = "oBRIGADO";

 //console.log( document.getElementById("obg"));
}
function redirecionar(){

  window.open("https://google.com.br");
}
function trocar(elemento){
  //alert("trocar textp");
  //document.getElementById("mouse").innerHTML = "oBRIGADO";
  elemento.innerHTML =  "oBRIGADO";
}

function voltar(elemento){
  //alert("trocar textp");
  //document.getElementById("mouse").innerHTML = "passe o mause aqui";
  elemento.innerHTML = "passe o mause aqui";
  }
function mudar(elemento){
  console.log(elemento.value);


}

*/

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:12,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})



































