function carregar() {
    
    var  msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12) {
        img.src = 'foto-p.png'
        //BOM DIA!
    } else if (hora < 18) {
        img.src = 'foto-m.png'
        //Boa Tarde!
    } else {
        //Boa Noite!!
    }

} 