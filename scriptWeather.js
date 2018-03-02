$(document).ready(function() {
    $("#weatherSubmit").click(function(e) {//grab information from form
	   e.preventDefault();
	   var value = $("#weatherInput").val();
        console.log(value);
        var apiKey = '&APPID=e504a6aa409b9efb07bdb4b043afa0a9';
        var myurl= "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + apiKey;
        $.ajax({
            url : myurl,
            dataType : "json",
            success : function(json) {
            console.log(json);
            json = json;
            var results = "";
            if(json.weather.length > 0) {
                results += '<p>' + json.main.temp + " &deg;F in " + json.name + ". </p>";
                results += "<p>Current Status: ";
                for (var i=0; i<json.weather.length; i++) {
                    results += json.weather[i].description;
                    if (i !== json.weather.length - 1){
                        results += ", ";
                    }
                }
                results += "</p>";
                for (var i=0; i<json.weather.length; i++) {
                    results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
                }
                results += "<p>Current Humidity: " + json.main.humidity + "%  -  Current Pressure: " + json.main.pressure + "</p>";
            }
                
            else {
                results = "<p>City not found. Please try again.</p>";
            }
            $("#weatherResults").html(results);
            }
        });

    });
});