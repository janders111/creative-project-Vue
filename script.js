
    
$(document).ready(function() {
    $("#searchSubmit").click(function(e) {//grab information from form
	    e.preventDefault();
	    var value = $("#searchInput").val();
        console.log(value);
        var myurl= "https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=" + value + "&site=stackoverflow";
        $.ajax({
            url : myurl,
            dataType : "json",
            success : function(json) {
            console.log(json);
            json = json;
            var results = "";
            results += "<div>";
            if (json.items.length > 0){
                for (var i=0; i<json.items.length; i++) {
                    results += "<h3>";
                    results += '<a href=' + json.items[i].link + '>' + json.items[i].title + '</a>';
                    results += "</h3>";
                }
            }
            else {results += '<h2>Sorry, no results found.</h2>'}
            results += "</div>";
            $("#searchResults").html(results);
            }
        });

    });
});
