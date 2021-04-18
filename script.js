function iniciar() {

  //cria uma variável onde será armazenados os dados da data e hora local
    let dados = new Date()


  //realiza a captura da hora e dos minutos
    let hora = [
      `${dados.getHours()}:${dados.getMinutes()}`
    ]

  //realiza a captura do dia, mes e ano
    let data = [
      `${dados.getDate()}/${dados.getMonth()+1}/${dados.getFullYear()}`
    ]

  //realiza a captura da temperatura local
  //let clima = 

  //exiibição das informações
    let exibirHora = document.getElementById('hAtual');
    exibirHora.innerHTML = `Agora são ${hora}`;

    let exibirData = document.getElementById('dAtual')
    exibirData.innerHTML = `${data}`

    //dados.getHours < 12 ? alert("menor que 12"): dados.getHours < 18 ? alert("menor que 18") : alert("maior que 18")

    dados.getHours < 12 ? alert("menor que 12"): dados.getHours < 18 ? alert("menor que 18") : alert("maior que 18")

console.log(exibirData)


}

