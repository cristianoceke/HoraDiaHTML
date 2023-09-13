function carregar(){
    var msg = window.document.getElementById('msg') //pega o arquivo do html pelo ID
    var img = window.document.getElementById('imagem') //pega o arquivo do html pelo ID 
    var data = new Date() // data de hoje
    var hora = data.getHours() // hora automatica
    var hora =  //--> altera a hora manualmente
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0&& hora <12){
        //BOM DIA!
        img.src = 'manha.png'
        document.body.style.background = '#f0c68c'
    } else if (hora >=12 && hora <= 18){
        //BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#9b5e59'
    } else {
        //BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#18171c'
    }
}
