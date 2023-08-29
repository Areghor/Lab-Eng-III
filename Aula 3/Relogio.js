function atualizarRelogio() {
    const relogio = document.getElementById("relogio");
    const agora = new Date();
    const hora = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();
    
    const horaFormatada = `${hora}:${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
    
    relogio.textContent = horaFormatada;
    
    setTimeout(atualizarRelogio, 1000); //
}

atualizarRelogio(); 