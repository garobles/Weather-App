$(document).ready(function(){
  var b;
  var t="si";
  var s=" C°";
  var word=" Fahrenheit";
  var letter=" F°";
  var f="<i class=\"fa fa-thermometer-quarter\"></i>";
  var w="<i class=\"fa fa-sun-o\"></i>" 
  var lon=0;
  var lat=0;
  var key="cc776d3939a16436e477054f415e0b7c";
  
  function getLocation(){
    if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(showPosition);
    }else{$("#result").text("Could not get location") }
  }
  function showPosition(position){
   lat = position.coords.latitude;
   lon = position.coords.longitude;
  }
  
  function check(){
   if($(window).width()<1000){
     $("#weather").html(w+"WX");
     $("#t").html(f+letter);
     }else{
     $("#weather").html(w+" Get Weather");
     $("#t").html(f+word);
     };
  }
  
function api(c, callback){
  $.getJSON("https://crossorigin.me/https://api.darksky.net/forecast/"+key+"/"+lat+","+lon+"?units="+t,   function(a){
  b=a.currently.icon;
  $("#result").html("Location: "+a.timezone+"<br>Summary: "+a.currently.summary+"<br>Temperature: "+a.currently.temperature+s+"<br>Real Feel: "+a.currently.apparentTemperature+s); 
   if(b.search("night")>=0){
        $("body").css("background-image","url(https://static.pexels.com/photos/26171/pexels-photo.jpg)")
            }else if(b.search("cloud")>=0){
              $("body").css("background-image","url(http://www.gazetteseries.co.uk/resources/images/5360796.jpg?display=1&htype=0&type=responsive-gallery)")
            }else if(b.search("rain")>=0){
              $("body").css("background-image","url(https://images4.alphacoders.com/235/235564.jpg)")
            }else if(b.search("snow")>=0){
              $("body").css("background-image","url(https://www.surfnetkids.com/resources/wp-content/uploads/2016/12/snow-720x477.jpg)")
            }
  })
 };
  
  check();
  getLocation(); 
  $(window).resize(check);
 
  $("#weather").click(function(){
    api(); 
    });
  
  $("#t").click(function(){
    if(t=="si"){
    t="us";
    s=" F°";
    word=" Celsius";
    letter=" C°";
    api();
    check();
    }else if(t=="us"){
      t="si";
      s=" C°";
      word=" Fahrenheit";
      letter=" F°";
      api();
      check();
    }
  });
});
  
                   