let rodar = true;
let contadorTempo =  null;
let segundo = 0;
let minuto = 0;
let temporizador = document.getElementById("temporizador");
let iniciar = document.getElementById("iniciar");
export function timer(event){
    rodar = !rodar;
    if (rodar){
        iniciar.innerHTML = ("Parar");
        contadorTempo = setInterval(()=>{
        segundo++;
        if (segundo == 60){
            minuto++;
            segundo = 0;
        }
        if (segundo<10 && minuto == 0){
            temporizador.innerHTML = (`Tempo: 00:0${segundo}`);
        }else if (segundo<10 && minuto<10){
            temporizador.innerHTML = (`Tempo: 0${minuto}:0${minuto}`);
        }else if (segundo>=10 && minuto<10){
            temporizador.innerHTML = (`Tempo: 0${minuto}:${segundo}`);
        }else if (segundo<10 && minuto>=10){
            temporizador.innerHTML = (`Tempo: ${minuto}:0${segundo}`);
        }else{
            temporizador.innerHTML = (`Tempo: ${minuto}:${segundo}`);
        }
    },1000)
    }else{
        iniciar.innerHTML = ("Iniciar");
        clearInterval(contadorTempo);
        contadorTempo=null;
    }   
}