function contarVogais(){
    const texto = document.getElementById("texto").value.toLowerCase();
    const vogais = texto.match(/[aeiouáéíóúãõâêîôû]/g);
    alert("Quantidade de vogais: " + (vogais ? vogais.length : 0));
}

function contarConsoantes() {
    const texto = document.getElementById("texto").value.toLowerCase();
    const consoantes = texto.match(/[bcdfghjklmnpqrstvwxyz]/g);
    alert("Quantidade de consoantes: " + (consoantes ? consoantes.length : 0));
  }