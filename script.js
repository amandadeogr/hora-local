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

   //com operador ternário
    dados.getHours() > 6 && dados.getHours() < 12 ? document.body.style.backgroundImage = "url(https://i.pinimg.com/originals/48/11/8a/48118af7ff6b767a4aab266527d81b6e.jpg)": dados.getHours() > 12 && dados.getHours() < 18 ? document.body.style.backgroundImage = "url(https://www.xmple.com/wallpaper/brown-orange-gradient-linear-1920x1080-c2-800000-ff8c00-a-90-f-14.svg)" : document.body.style.backgroundImage = "url(https://wallpapercave.com/wp/HeYmP7w.png)";




}
