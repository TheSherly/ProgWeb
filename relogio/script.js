/*
 *  Script com a lógica do relógio digital.
 *  Modifique este arquivo o quanto for necessário.
 *
 *  DICAS GERAIS:
 *
 *  Você pode implementar a lógica de um relógio utilizando o método Date() do javaScript
 *  para retorna um objeto de data com a hora, os minutos e os segundos atuais.
 *
 *  Depois de computar os valores de hora, minutos e segundos,
 *  atualize o DOM do documento HTML por meio do método atualizarRelogio(). Para isso,
 *  você deve atualizar o texto dos elementos HTML que representam a hora, os minutos e os segundos.
 *
 *  Essa atualização pode ser feita usando o método 'setInterval' do javaScript com intervalos
 *  de 1000ms (1 segundo).
 */

function atualizarRelogio() {
  // TODO (implementar) ...
  var hora = new Date
  var horas = hora.getHours();
  var minutos = hora.getMinutes();
  var segundos = hora.getSeconds();
  document.getElementById("horas").textContent = formatZero(horas);
  document.getElementById("minutos").textContent = formatZero(minutos);
  document.getElementById("segundos").textContent = formatZero(segundos);
  
}

function formatZero(Valor){
    if(Valor <= 9) return "0" + Valor;
    
    else return Valor;
}
setInterval(atualizarRelogio, 1000);

/** Chamada da função de atualziarRelogio para funcionar o relógio usando o método 'setInterval'*/
// TODO (implementar) ...
