function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio); //Parametro será um ID do HTML

    if (elemento != null || elemento.localName === 'audio') { 
        elemento.play();
    } else {
        console.log("elemento não encontrado"); //elemento sendo uma tecla invalida (sem ser espaço ou entender)
    }


}

const listaDeTeclas = document.querySelectorAll(".tecla");

for (let i = 0; i < listaDeTeclas.length; i++) {
  const tecla = listaDeTeclas[i];
  const instrumento = tecla.classList[1]; //.classList retorna uma lista com as classes do nosso elemento, 1° sendo tecla e 2° o especifico (de acordo com nosso html)
  //Como queremos o especifico, pegamos o 2° elemento da classList, indice 1.
  const idAudio = `#som_${instrumento}`; //Dado a construção no html dos nossos <audio>, vemos que no id tem o #som_ antes da tecla que é igual a nossa classe especifica

  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  tecla.onkeydown = function (evento) {
    if (evento.code === 'Space' || evento.code === 'Enter') {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
