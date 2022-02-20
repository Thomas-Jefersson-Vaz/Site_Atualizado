window.onload = function() {
  let calcsimples = document.getElementById("calcsimples");
 calcsimples.addEventListener("keyup", function(event){
  if (event.key === 'Enter') {
    console.log("enter")
    calcsim();
  };
 });
};
function calcsim(){
  let pn = document.getElementById("input1").value;
  let sn = document.getElementById("input2").value;
  let pni = parseInt(pn);
  let sni = parseInt(sn);
  let chck = check();
  mostra("")
  switch(chck){
    case "+":
      var resultado = pni + sni
      mostra(`${pni} ${chck} ${sni} = ${resultado}`)
      break;
    case "-":
      var resultado = pni - sni
      mostra(`${pni} ${chck} ${sni} = ${resultado}`)
      break;
    case "*":
      var resultado = pni * sni
      mostra(`${pni} ${chck} ${sni} = ${resultado}`)
      break;
    case "/":
      var resultado = pni / sni
      mostra(`${pni} ${chck} ${sni} = ${resultado}`)
      break;
    default:
      mostra("Sinal inválido", "caixa");
      break;
  }
}
function limpar1(){
  var l1 = document.getElementById("input1");
  var l2 = document.getElementById("input2");
  $( s1 ).prop({checked: false});
  $( s2 ).prop({checked: false});
  $( s3 ).prop({checked: false});
  $( s4 ).prop({checked: false});
  l1.value = "";
  l2.value = "";
  mostra("")
}
function checkniver(){
  if($('#cb1').is(":checked")){
    var b = "Sim";
    return (b);
  }
  if($('#cb2').is(":checked")){
    var b = "Não";
    return (b);
  }
}
function check(){
  if($('#s1').is(":checked")){
    let sinal = "+";
    return (sinal);
  }
  if($('#s2').is(":checked")){
    let sinal = "-";
    return (sinal);
  }
  if($('#s3').is(":checked")){
    let sinal = "*";
    return (sinal);
  }
  if($('#s4').is(":checked")){
    let sinal = "/";
    return (sinal);
  }
}
function idade(){
  var x = document.getElementById("n1").value;
   var d = new Date();
   var ano = d.getFullYear();
  var idade = (ano-x);
  var texto = checkniver(); 
  var idade2 = (idade - 1);
  switch(texto){
    case "Sim":
      mostra("Você tem " + idade + " anos de idade" + "<br> Parabéns atrasado");
      break;
    case "Não":
      mostra("Você tem " + idade2 + " anos de idade" + "<br> Parabéns adiantado");
      break;
    default:
      mostra("responda a pergunta", "caixa2");
      break;}
}
