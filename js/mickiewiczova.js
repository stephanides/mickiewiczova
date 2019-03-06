
$(".carousel").carousel('pause');


function sendEmail(e) {
  e.preventDefault();
  console.log("Odosielam");
  var data = {
    name: $("#meno").val(),
    surname: $("#priezvisko").val(),
    number: $("#telefon").val(),
    email: $("#email").val(),
    message: $("#message").val(),
  };
  $.ajax({
    type: "POST",
    url: "contact_us.php",
    data: data,
    success: function(){
        console.log("uspesne poslane");
    }
});
}




function about(){
  $('html, body').animate({scrollTop:$("#about").position().top}, 'slow');
}
function ponuka(){
  $('html, body').animate({scrollTop:$("#ponuka").position().top}, 'slow');
}
function map(){
  $('html, body').animate({scrollTop:$("#location").position().top}, 'slow');
}
function gallery(){
  $('html, body').animate({scrollTop:$("#gallery").position().top}, 'slow');
}
function contact(){
  $('html, body').animate({scrollTop:$("#contact").position().top}, 'slow');
}

$(function(){
  $(".fancybox").fancybox({
        'cyclic': true,
        arrows : true,
        infobar: true,
        protect: true,
        loop: true,
        animationEffect:"zoom-in-out"
    });
    $(".zoom").hover(function(){
    $(this).addClass('transition');
  }, function(){
    $(this).removeClass('transition');
  });
});



function filterText()
	{  
		var rex = new RegExp($('#filterText').val());
    console.log(rex);
		if(rex =="/vsetko/"){clearFilter()}else{
			$('.content').hide();
			$('.content').filter(function() {
			return rex.test($(this).text());
			}).show();
	}
	}
	
function clearFilter()
	{
		$('.filterText').val('');
		$('.content').show();
	}


function filterTextB()
  {  
    var rex = new RegExp($('#filterTextB').val());
    console.log(rex);
    if(rex =="/vsetko/"){clearFilterB()}else{
      $('.contentB').hide();
      $('.contentB').filter(function() {
      return rex.test($(this).text());
      }).show();
  }
  }
  
function clearFilterB()
  {
    $('.filterTextB').val('');
    $('.contentB').show();
  }



var dataJson;

$(document).ready(function(e) {
  var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
	    dataJson = JSON.parse(this.responseText);
	    if(document.URL.indexOf("cennik") >= 0){
        append_json(dataJson);
      }
	  }
	};
	xmlhttp.open("GET", "../data.json", true);
	xmlhttp.send();      
});

$('tr[data-href]').on("click", function() {
    document.location = $(this).data('href');
    console.log("som tu");
});

var volne = 0;

function append_json(data){
  var table = document.getElementById('myTable');
  var tableB = document.getElementById('myTableB')
  for(var i = 0; i < dataJson.flats.length; i++){
      var tr = document.createElement('tr');
      
      if(dataJson.flats[i].status == "V"){
      	tr.classList.add("available");
          
      }
      else if(dataJson.flats[i].status == "R"){
      	tr.classList.add("reserved");
      }
      else if(dataJson.flats[i].status == "P"){
      	tr.classList.add("sold");
      }
      if(document.URL.indexOf("cennik") >= 0 ){
        if(dataJson.flats[i].object == "A"){
          tr.classList.add("content");
        tr.setAttribute('onclick', "document.location = " + "'" + "../karta-bytu?" + dataJson.flats[i].path + "'");
        tr.innerHTML ='<td>' + dataJson.flats[i].name + '</td>' +
        '<td>' + dataJson.flats[i].floor + '</td>' +
        '<td>' + dataJson.flats[i].rozloha  + '</td>' +
        '<td>' + dataJson.flats[i].balkon  + '</td>' + 
        '<td>' + dataJson.flats[i].pivnica + '</td>' + 
        '<td>' + dataJson.flats[i].terasa + '</td>' +
        '<td>' + dataJson.flats[i].izby + '</td>' + 
        '<td>' + dataJson.flats[i].spolu + '</td>' +  
        '<td>' + dataJson.flats[i].cena.replace(',', ' ') + '</td>' + 
        '<td>' + dataJson.flats[i].cena2.replace(',', ' ') + '*</td>' + 
        '<td class="status">' + dataJson.flats[i].status + '</td>';
        table.appendChild(tr);
      }
      if(dataJson.flats[i].object == "B"){
        tr.classList.add("contentB");
        tr.setAttribute('onclick', "document.location = " + "'" + "../karta-bytu?" + dataJson.flats[i].path + "'");
        tr.innerHTML ='<td>' + dataJson.flats[i].name + '</td>' +
        '<td>' + dataJson.flats[i].floor + '</td>' +
        '<td>' + dataJson.flats[i].rozloha  + '</td>' +
        '<td>' + dataJson.flats[i].balkon  + '</td>' + 
        '<td>' + dataJson.flats[i].pivnica + '</td>' + 
        '<td>' + dataJson.flats[i].sklad + '</td>' + 
        '<td>' + dataJson.flats[i].komora + '</td>' +
        '<td>' + dataJson.flats[i].terasa + '</td>' +
        '<td>' + dataJson.flats[i].zahradka + '</td>' +
        '<td>' + dataJson.flats[i].izby + '</td>' + 
        '<td>' + dataJson.flats[i].spolu + '</td>' +  
        '<td>' + dataJson.flats[i].cena.replace(',', ' ') + '</td>' + 
        '<td>' + dataJson.flats[i].cena2.replace(',', ' ') + '*</td>' + 
        '<td class="status">' + dataJson.flats[i].status + '</td>';
        tableB.appendChild(tr);
      }
    }
  }
}


// Map settings


function initMap() {
  var uluru = {lat: 48.150046, lng: 17.116241};
  var map = new google.maps.Map(

      document.getElementById('map'), {zoom: 17, center: uluru, styles:[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.attraction",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ff0000"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi.attraction",
    "elementType": "labels.icon",
    "stylers": [
      {
        "color": "#ff0000"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "elementType": "labels.icon",
    "stylers": [
      {
        "color": "#ff8000"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi.government",
    "elementType": "labels.icon",
    "stylers": [
      {
        "color": "#804000"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi.medical",
    "elementType": "labels.icon",
    "stylers": [
      {
        "color": "#ff80c0"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#008040"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.icon",
    "stylers": [
      {
        "color": "#008040"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "poi.place_of_worship",
    "elementType": "labels.icon",
    "stylers": [
      {
        "color": "#800040"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi.school",
    "elementType": "labels.icon",
    "stylers": [
      {
        "color": "#800080"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi.sports_complex",
    "elementType": "labels.icon",
    "stylers": [
      {
        "color": "#0000ff"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]});
  //var marker = new google.maps.Marker({position: uluru, map: map});

  var marker = new google.maps.Marker({

            position: {lat: 48.150074, lng: 17.116167},

            icon: './images/logo.png',

            maxZoom: 10,

            map: map

        });
  


var shapes = [];
var path = [
new google.maps.LatLng(48.149080725035354, 17.113259965779775),
new google.maps.LatLng(48.1489912472732, 17.113458449547352),
new google.maps.LatLng(48.148819697460624, 17.11306826669295),
new google.maps.LatLng(48.14878748528432, 17.11299987036307),
new google.maps.LatLng(48.14872395565508, 17.112891240897966),
new google.maps.LatLng(48.14865684680638, 17.11277322370131),
new google.maps.LatLng(48.14845104578985, 17.112399055543733),
new google.maps.LatLng(48.14817008133052, 17.1118170161875),
new google.maps.LatLng(48.14796517315935, 17.11137713390906),
new google.maps.LatLng(48.14771628348303, 17.110847377662935),
new google.maps.LatLng(48.14744216840106, 17.1102636285309),
new google.maps.LatLng(48.147144000040164, 17.10961845153372),
new google.maps.LatLng(48.146849606175955, 17.109002884564802),
new google.maps.LatLng(48.146705082291994, 17.108730144053652),
new google.maps.LatLng(48.146496588981215, 17.108398891242132),
new google.maps.LatLng(48.146261410685085, 17.10802135301924),
new google.maps.LatLng(48.146117290997466, 17.107799282561132),
new google.maps.LatLng(48.146141451388615, 17.1077577083214),
new google.maps.LatLng(48.14646916005051, 17.108274423031503),
new google.maps.LatLng(48.146738176200216, 17.108712172449373),
new google.maps.LatLng(48.146940722231975, 17.10910540790951),
new google.maps.LatLng(48.14714985121033, 17.109534359691907),
new google.maps.LatLng(48.14741327965643, 17.110107010678803),
new google.maps.LatLng(48.1476432440144, 17.110611450365013),
new google.maps.LatLng(48.14784625461486, 17.111040381572025),
new google.maps.LatLng(48.148104912374365, 17.11159298929681),
new google.maps.LatLng(48.14845123937924, 17.11232378251202),
new google.maps.LatLng(48.148770111166066, 17.112895518954133),
new google.maps.LatLng(48.14888329939118, 17.113109422526577),
new google.maps.LatLng(48.14908194045225, 17.11326096733592)];
var polyline = new google.maps.Polygon({path:path, strokeColor: "#ffc25f", strokeOpacity: 1.0, strokeWeight: 4});
polyline.setMap(map);
map.setCenter(new google.maps.LatLng(48.148967408763156, 17.112868358991363), 21);
shapes.push(polyline);

map.data.loadGeoJson('data/map.json');


}


$(".carousel").carousel('pause');

if(document.URL.indexOf("cennik") >= 0){
  var tableOffset = $("#table_format").offset().top;
  var $header = $("#table_format > thead").clone();
  var $fixedHeader = $("#header-fixed").append($header);
  
  $(window).bind("resize", function(){
    tableOffset = $("#table_format").offset().top;
  })

  $(window).bind("scroll", function() {
      var offset = $(this).scrollTop();
      console.log(offset);
      console.log(tableOffset);
      if (offset >= tableOffset && $fixedHeader.is(":hidden")) {
          $fixedHeader.show();
      }
      else if (offset < tableOffset) {
          $fixedHeader.hide();
      }
  });
}

function showText(el){
  console.log($(el).parent()[0].children[1]);
  if($(el).parent()[0].children[1].classList.contains("show")){
    $(el).parent()[0].children[1].classList.add("hide");
    $(el).parent()[0].children[1].classList.remove("show");
    $(el)[0].children[0].classList.add("show");
    $(el)[0].children[0].classList.remove("hide");

    $(el)[0].children[1].classList.add("hide");
    $(el)[0].children[1].classList.remove("show");
  }
  else{
      $(el).parent()[0].children[1].classList.add("show");
      $(el).parent()[0].children[1].classList.remove("hide");

      $(el)[0].children[0].classList.add("hide");
    $(el)[0].children[0].classList.remove("show");

    $(el)[0].children[1].classList.add("show");
    $(el)[0].children[1].classList.remove("hide");
    }
}