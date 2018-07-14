// Using jQuery $.ajax
// $.ajax({
//   url: 'http://www.omdbapi.com/?apikey=60f7bdd3&t=sharknado',
//   success: function(response) {
//     console.log(response);
//     console.log(response.Actors);
//     $("#omdbPoster").attr("src", response.Poster);
//     $("#omdbTitle").html(response.Title);
//     $("#omdbActors").html(response.Actors);
//   }
// });

//Using Javascript to get AJAX data
// var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//    if (this.readyState == 4 && this.status == 200) {
//       console.log(this.responseText);
//       console.log(JSON.parse(this.responseText));
//       var data = JSON.parse(this.responseText);
//       document.getElementById("omdbActors").innerHTML = data.Actors;
//       document.getElementById("omdbTitle").innerHTML = data.Title;
//       document.getElementById("omdbYear").innerHTML = data.Year;

//       var poster = document.getElementById("omdbPoster");
//       poster.setAttribute("src", data.Poster);
//     }
//   };
// xhttp.open("GET", 'http://www.omdbapi.com/?apikey=60f7bdd3&t=sharknado', true);
// xhttp.send();


// For 1st AJAX & JSON exercise using jquery $.ajax()
// var url;
// $.ajax({
//   url: 'https://jsonplaceholder.typicode.com/photos/1',
//   method: 'GET'
// }).done(function(data) {
//   console.log(data);
//   console.log(data["title"]);
//   url = data["thumbnailUrl"];
//   $("img").attr("src", url);
// });

// For 2nd AJAX & JSON exercise using jQuery $.getJSON
//  $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=New+York,us&units=imperial&APPID=710d968a9a3a8f2c6da4dc4dfa8ec87b',
//   function(data) {
//   console.log(data);
//   var city = data["name"];
//   var temp = data["main"]["temp"];
//   // var pressure = data["main"]["pressure"];
//   // var humidity = data["main"]["humidity"];
//   $("#city").html(city);
//   $("#temp").html(temp);
//   // $("#pressure").html(pressure);
//   // $("#humidity").html(humidity);
// })


// For 3rd AJAX & JSON class
$("#btn").click(function(){
var city2 = $("#city2").val();
 $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + city2 + ',us&units=imperial&APPID=710d968a9a3a8f2c6da4dc4dfa8ec87b',
 function(data) {
  console.log(data);
  var temp = data["main"]["temp"];
  $("#temp2").html(temp);
  var humidity = data["main"]["humidity"];
  $("#hum").html(humidity);
  var speed = data["wind"]["speed"];
  $("#mph").html(speed);
  var description = data["weather"][0]["description"];
  $("#des").html(description);
 })
})
