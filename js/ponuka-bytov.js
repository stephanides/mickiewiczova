var dataJson;

$(document).ready(function(e) {
  var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
	    dataJson = JSON.parse(this.responseText);
        console.log("spustam");
        fillData();
	  }
	};
	xmlhttp.open("GET", "../data.json", true);
	xmlhttp.send();      
});

var volne = 0;
var bytyA = 0;
var bytyB = 0;
function fillData(data){
    for(var i = 0; i < dataJson.flats.length; i++){

        if(dataJson.flats[i].object == "A"){
          bytyA++;
        }
        else if(dataJson.flats[i].object == "B"){
          bytyB++;
        }

        if(dataJson.flats[i].status == "V"){
            volne++;
        }
        else if(dataJson.flats[i].status == "R"){
        }
        else if(dataJson.flats[i].status == "P"){
        }
    }
}



function getData(budova, poschodie){
  var dvojIzbove = 0;
var trojIzbove = 0;
var stvorIzbove = 0;
  for(var i = 0; i < dataJson.flats.length; i++){
    if(dataJson.flats[i].object == budova){
      if(dataJson.flats[i].floor == poschodie){
        if(dataJson.flats[i].izby == "2"){
          dvojIzbove++;
          document.getElementById("dvojizboveA").innerHTML = "2-izbové byty " + dvojIzbove;
        }
        else if(dataJson.flats[i].izby == "3"){
          trojIzbove++;
          document.getElementById("trojizboveA").innerHTML = "3-izbové byty " + trojIzbove;
        }
        else if(dataJson.flats[i].izby == "4"){
          stvorIzbove++;
          document.getElementById("stvorizboveA").innerHTML = "4-izbové byty " + stvorIzbove;
        }
      }
      else{
        document.getElementById("dvojizboveA").innerHTML = "2-izbové byty " + dvojIzbove;
        document.getElementById("trojizboveA").innerHTML = "3-izbové byty " + trojIzbove;
        document.getElementById("stvorizboveA").innerHTML = "4-izbové byty " + stvorIzbove;
      }
    }
  }
  if(poschodie == "1.NP")
  document.getElementById("infoPodlazieA").innerHTML = "1. podlažie";
if(poschodie == "2.NP")
  document.getElementById("infoPodlazieA").innerHTML = "2. podlažie";
if(poschodie == "3.NP")
  document.getElementById("infoPodlazieA").innerHTML = "3. podlažie";
if(poschodie == "4.NP")
  document.getElementById("infoPodlazieA").innerHTML = "4. podlažie";
if(poschodie == "5.NP")
  document.getElementById("infoPodlazieA").innerHTML = "5. podlažie";
if(poschodie == "6.NP")
  document.getElementById("infoPodlazieA").innerHTML = "6. podlažie";
if(poschodie == "7.NP")
  document.getElementById("infoPodlazieA").innerHTML = "7. podlažie";
document.getElementById("infoPanelA").style.display = "block";
}

function hideInfoPanel() {
  document.getElementById("infoPanelA").style.display = "none";
  //document.getElementById("infoPanelB").style.display = none;
}

function showNP(arg) {

  if(arg == 2){
    document.getElementById("NP2").style.display = "block";
    document.getElementById("NP3").style.display = "none";
    document.getElementById("NP4").style.display = "none";
    document.getElementById("NP5").style.display = "none";
    document.getElementById("NP6").style.display = "none";
    document.getElementById("NP7").style.display = "none";
  }
  if(arg == 3){
    document.getElementById("NP3").style.display = "block";
    document.getElementById("NP2").style.display = "none";
    document.getElementById("NP4").style.display = "none";
    document.getElementById("NP5").style.display = "none";
    document.getElementById("NP6").style.display = "none";
    document.getElementById("NP7").style.display = "none";
  }
  if(arg == 4){
    document.getElementById("NP4").style.display = "block";
    document.getElementById("NP2").style.display = "none";
    document.getElementById("NP3").style.display = "none";
    document.getElementById("NP5").style.display = "none";
    document.getElementById("NP6").style.display = "none";
    document.getElementById("NP7").style.display = "none";
  }
  if(arg == 5){
    document.getElementById("NP5").style.display = "block";
    document.getElementById("NP4").style.display = "none";
    document.getElementById("NP2").style.display = "none";
    document.getElementById("NP3").style.display = "none";
    document.getElementById("NP6").style.display = "none";
    document.getElementById("NP7").style.display = "none";
  }
  if(arg == 6){
    document.getElementById("NP6").style.display = "block";
    document.getElementById("NP5").style.display = "none";
    document.getElementById("NP4").style.display = "none";
    document.getElementById("NP2").style.display = "none";
    document.getElementById("NP3").style.display = "none";
    document.getElementById("NP7").style.display = "none";
  }
  if(arg == 7){
    document.getElementById("NP6").style.display = "none";
    document.getElementById("NP5").style.display = "none";
    document.getElementById("NP4").style.display = "none";
    document.getElementById("NP2").style.display = "none";
    document.getElementById("NP3").style.display = "none";
    document.getElementById("NP7").style.display = "block";
  }
  if(arg ==8){
    document.getElementById("NP1B").style.display = "block";
    document.getElementById("NP2B").style.display = "none";
  }
  if(arg ==9){
    document.getElementById("NP2B").style.display = "block";
    document.getElementById("NP1B").style.display = "none";
  }
  runHiglight();

}

runHiglight();
      function runHiglight(){
        $('.budova1').maphilight({
          fillColor: 'f5a623',
          fillOpacity: 0.5,
          strokeColor: 'f5a623',
          strokeWidth: 3,
        });
        $('.budova2').maphilight({
          fillColor: 'f5a623',
          fillOpacity: 0.5,
          strokeColor: 'f5a623',
          strokeWidth: 3,
        });
        $('.budova3').maphilight({
          fillColor: 'f5a623',
          fillOpacity: 0.5,
          strokeColor: 'f5a623',
          strokeWidth: 3,
        });
        $('.budova4').maphilight({
          fillColor: 'f5a623',
          fillOpacity: 0.5,
          strokeColor: 'f5a623',
          strokeWidth: 3,
        });
        $('.2NP-1140').maphilight({
          fillColor: 'f5a623',
          fillOpacity: 0.5,
          strokeColor: 'f5a623',
          strokeWidth: 3,
        });
        $('.2NP-768').maphilight({
          fillColor: 'f5a623',
          fillOpacity: 0.5,
          strokeColor: 'f5a623',
          strokeWidth: 3,
        });
        $('.3NP-1140').maphilight({
          fillColor: 'f5a623',
          fillOpacity: 0.5,
          strokeColor: 'f5a623',
          strokeWidth: 3,
        });
        $('.3NP-768').maphilight({
          fillColor: 'f5a623',
          fillOpacity: 0.5,
          strokeColor: 'f5a623',
          strokeWidth: 3,
        });
        $('.4NP-1140').maphilight({
          fillColor: 'f5a623',
          fillOpacity: 0.5,
          strokeColor: 'f5a623',
          strokeWidth: 3,
        });
        $('.4NP-768').maphilight({
          fillColor: 'f5a623',
          fillOpacity: 0.5,
          strokeColor: 'f5a623',
          strokeWidth: 3,
        });
        $('.5NP-1140').maphilight({
          fillColor: 'f5a623',
          fillOpacity: 0.5,
          strokeColor: 'f5a623',
          strokeWidth: 3,
        });
        $('.5NP-768').maphilight({
          fillColor: 'f5a623',
          fillOpacity: 0.5,
          strokeColor: 'f5a623',
          strokeWidth: 3,
        });
        $('.6NP-1140').maphilight({
          fillColor: 'f5a623',
          fillOpacity: 0.5,
          strokeColor: 'f5a623',
          strokeWidth: 3,
        });
        $('.6NP-768').maphilight({
          fillColor: 'f5a623',
          fillOpacity: 0.5,
          strokeColor: 'f5a623',
          strokeWidth: 3,
        });
        $('.7NP-1140').maphilight({
          fillColor: 'f5a623',
          fillOpacity: 0.5,
          strokeColor: 'f5a623',
          strokeWidth: 3,
        });
        $('.7NP-768').maphilight({
          fillColor: 'f5a623',
          fillOpacity: 0.5,
          strokeColor: 'f5a623',
          strokeWidth: 3,
        });
        $('.1NPB-1140').maphilight({
          fillColor: 'f5a623',
          fillOpacity: 0.5,
          strokeColor: 'f5a623',
          strokeWidth: 3,
        });
        $('.1NPB-768').maphilight({
          fillColor: 'f5a623',
          fillOpacity: 0.5,
          strokeColor: 'f5a623',
          strokeWidth: 3,
        });
        $('.2NPB-1140').maphilight({
          fillColor: 'f5a623',
          fillOpacity: 0.5,
          strokeColor: 'f5a623',
          strokeWidth: 3,
        });
        $('.2NPB-768').maphilight({
          fillColor: 'f5a623',
          fillOpacity: 0.5,
          strokeColor: 'f5a623',
          strokeWidth: 3,
        });
      }
      function refreshMap(){
        setTimeout(function(){ runHiglight()}, 500);
      }
      window.addEventListener("resize", runHiglight);


var poschodie2 = document.getElementById("mobile2NP");
var poschodie3 = document.getElementById("mobile3NP");
var poschodie4 = document.getElementById("mobile4NP");
var poschodie5 = document.getElementById("mobile5NP");
var poschodie6 = document.getElementById("mobile6NP");
var poschodie7 = document.getElementById("mobile7NP");
var poschodie8 = document.getElementById("mobile1NPB");
var poschodie9 = document.getElementById("mobile2NPB");

function showFlats(param){
console.log(poschodie2.style.display);
  if(param == 2){
    if(poschodie2.classList.contains("hide")){
      poschodie2.classList.add("show");
      poschodie2.classList.remove("hide");
    }
    else{
      poschodie2.classList.add("hide");
      poschodie2.classList.remove("show");
    }
  }
  if(param == 3){
    if(poschodie3.classList.contains("hide")){
      poschodie3.classList.add("show");
      poschodie3.classList.remove("hide");
    }
    else{
      poschodie3.classList.add("hide");
      poschodie3.classList.remove("show");
    }
  }
  if(param == 4){
    if(poschodie4.classList.contains("hide")){
      poschodie4.classList.add("show");
      poschodie4.classList.remove("hide");
    }
    else{
      poschodie4.classList.add("hide");
      poschodie4.classList.remove("show");
    }
  }
  if(param == 5){
    if(poschodie5.classList.contains("hide")){
      poschodie5.classList.add("show");
      poschodie5.classList.remove("hide");
    }
    else{
      poschodie5.classList.add("hide");
      poschodie5.classList.remove("show");
    }
  }
  if(param == 6){
    if(poschodie6.classList.contains("hide")){
      poschodie6.classList.add("show");
      poschodie6.classList.remove("hide");
    }
    else{
      poschodie6.classList.add("hide");
      poschodie6.classList.remove("show");
    }
  }
  if(param == 7){
    if(poschodie7.classList.contains("hide")){
      poschodie7.classList.add("show");
      poschodie7.classList.remove("hide");
    }
    else{
      poschodie7.classList.add("hide");
      poschodie7.classList.remove("show");
    }
  }
  if(param == 8){
    if(poschodie8.classList.contains("hide")){
      poschodie8.classList.add("show");
      poschodie8.classList.remove("hide");
    }
    else{
      poschodie8.classList.add("hide");
      poschodie8.classList.remove("show");
    }
  }
  if(param == 9){
    if(poschodie9.classList.contains("hide")){
      poschodie9.classList.add("show");
      poschodie9.classList.remove("hide");
    }
    else{
      poschodie9.classList.add("hide");
      poschodie9.classList.remove("show");
    }
  }
}

function tabA(){
  document.getElementById("flatPickerB").style.display = "none";
  document.getElementById("flatPickerA").style.display = "block";
}
function tabB(){
  document.getElementById("flatPickerA").style.display = "none";
  document.getElementById("flatPickerB").style.display = "block";
}