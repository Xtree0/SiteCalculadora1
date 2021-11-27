function Converter() {
  var valorElemento1 = parseFloat(document.getElementById("nota1b").value);

  var valorElemento2 = parseFloat(document.getElementById("nota2b").value);

  var valorElemento3 = parseFloat(document.getElementById("nota3b").value);

  var valorElemento4 = parseFloat(document.getElementById("nota4b").value);

  var notaFinal =
    (valorElemento1 + valorElemento2 + valorElemento3 + valorElemento4) / 4;

  var elementoNotaCalculada = document.getElementById("notaCalculada");
  var notaCalculada = "Sua média final é: " + notaFinal;
  elementoNotaCalculada.innerHTML = notaCalculada;

  var elementoSituacao = document.getElementById("situacao");
  var elementoImagem = document.getElementById("emote-situacao");

  if (notaFinal >= 5) {
    var situacao = "Aprovado!";
    var imagem = "https://cdn.frankerfacez.com/emoticon/185890/4";
  } else {
    var situacao = "Reprovado";
    var imagem = "https://cdn.frankerfacez.com/emoticon/536927/4";
  }
  elementoSituacao.innerHTML = situacao;
  elementoImagem.src = imagem;
}
