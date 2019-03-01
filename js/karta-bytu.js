var byt = window.location.search.substr(1);

console.log(byt);

var dataJson;

var imageHolder = document.getElementById("podorys-detail");
var poschodie = document.getElementById("poschodieKarta");
var pocetIzieb = document.getElementById("pocetIzieb");
var rozlohaBytu = document.getElementById("rozlohaBytu");
var rozlohaBalkonu = document.getElementById("rozlohaBalkonu");
var rozlohaPivnice = document.getElementById("rozlohaPivnice");
var rozlohaSkladu = document.getElementById("rozlohaSkladu");
var rozlohaKomory = document.getElementById("rozlohaKomory");
var rozlohaTerasy = document.getElementById("rozlohaTerasy");
var rozlohaSpolu = document.getElementById("rozlohaSpolu");
var cenaHolobyt = document.getElementById("cenaHolobyt");
var cenaStandard = document.getElementById("cenaStandard");

$(document).ready(function(e) {
  var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        dataJson = JSON.parse(this.responseText);
        fillData();
      }
    };
    xmlhttp.open("GET", "../data.json", true);
    xmlhttp.send();      
});

function fillData(data){
    for(var i = 0; i < dataJson.flats.length; i++){
      if(dataJson.flats[i].path == byt){
        imageHolder.src = dataJson.flats[i].imgPath;
        poschodie.innerHTML = dataJson.flats[i].floor;
        nazovBytu.innerHTML = dataJson.flats[i].name;
        pocetIzieb.innerHTML = "&nbsp;" + dataJson.flats[i].izby;
        rozlohaBytu.innerHTML = "&nbsp;" +  dataJson.flats[i].rozloha;
        rozlohaBalkonu.innerHTML = "&nbsp;" +  dataJson.flats[i].balkon;
        rozlohaPivnice.innerHTML = "&nbsp;" +  dataJson.flats[i].pivnica;
        rozlohaSkladu.innerHTML = "&nbsp;" +  dataJson.flats[i].sklad;
        rozlohaKomory.innerHTML = "&nbsp;" +  dataJson.flats[i].komora;
        rozlohaTerasy.innerHTML = "&nbsp;" +  dataJson.flats[i].terasa;
        rozlohaSpolu.innerHTML = "&nbsp;" +  dataJson.flats[i].spolu;
        cenaHolobyt.innerHTML = "&nbsp;" +  dataJson.flats[i].cena;
        cenaStandard.innerHTML = "&nbsp;" +  dataJson.flats[i].cena2;
      }
    }
}

function goBack() {
  window.history.back();
}