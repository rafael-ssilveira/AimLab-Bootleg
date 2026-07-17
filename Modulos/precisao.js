let acertos = 0;
let erros = 0;
let precisaoMenu = document.getElementById("precisaoMenu");
export function precisao(event){
    if (event.target.closest("#menu")){
        return 0;
    }else if (event.target.closest("#alvo")){
        acertos++;
    }else if (event.target.closest("#tela")){
        erros++;
    }
    let disparosTotais = acertos+erros;
    let mediaPrecisao = (acertos/disparosTotais)*100;
    if (disparosTotais == 0 || acertos == disparosTotais){
        precisaoMenu.innerHTML = ("Precisão: 100%");
    }else{
        precisaoMenu.innerHTML = (`Precisão: ${mediaPrecisao.toFixed(1)}%`);
    }
}