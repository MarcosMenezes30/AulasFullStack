let temperatura = 2;

if(temperatura > 30){
    document.getElementById('resposta').innerHTML = "Está quente!";
}
else if(temperatura == 28){
    document.getElementById('resposta').innerHTML = "Está na temperatura ideal!";
}
else{
    document.getElementById('resposta').innerHTML = "Está frio!";
}