let count1 = 0;
let count2 = 0;

document.getElementById("test").innerHTML = "Tere tulemast!"
document.getElementById("nupp1").onclick = vajutusteArvX;
document.getElementById("nupp2").onclick = vajutusteArvY;
document.getElementById("sisestus").onclick = sisestaVastus;



function sisestaVastus(){
    const vastus = document.getElementById("küsimus")
    let sisend = vastus.value;

    document.getElementById("vastus").innerHTML = "Kas sulle meeldib " + sisend + "?"
}
function vajutusteArvX(){
    count1 += 1
    document.getElementById("tekst1").innerHTML = count1;
}
function vajutusteArvY(){
    count2 += 1
    document.getElementById("tekst2").innerHTML = count2;
}

