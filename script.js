function carregar(){
    var data = new Date()
    var hora = data.getHours()
    var msg = document.getElementById('msg')
    var hora = 8
    if(hora >= 0 && hora < 12){
        msg.innerHTML = `Bom dia`
        document.body.style.background = 'pink'
    }else if(hora >= 12 && hora < 18){
        msg.innerHTML = `Boa tarde`
        document.body.style.background = 'orange'
        img.src = 'Sem-Título-2.png'
    }else{
        msg.innerHTML = `Boa noite`
        document.body.style.background = 'darkblue'
        img.src = 'noite.png.png'
    }
}