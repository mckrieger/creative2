$(document).ready(function() {
  //Need it to be in ready so the page is loaded.
  //$ is a jquery that pulls out the document variable, then says when ready is triggered, call function
  $("#searchSubmit").click(function(e) {
	   e.preventDefault();
	    var value = $("#searchInput").val();
      var myurl= "http://icanhazdadjoke.com/search?limit=15&term=" + value;
	     $.ajax({
	        url : myurl,
	         dataType : "json",
	          success : function(json) {
    		      console.log(json);
              var results = "";
          		results += '<h2>Results:</h2>';
              results += '<div id=\"result_container\">'
              console.log(json.results)
              for (var i=0; i<json.results.length; i++){
                results += "<div class=\"result\" >";
                results += "<p class =\"searchResults\">" + json.results[i].joke +"</p>"
                results += "</div>";
              }
              if (json.results.length == 0){
                results += "<p  class=\"searchResults\">No Search Results Found</p>"
              }
              results += "</div>";

          		$("#results").html(results);
        }
      });
    });

  $("#randomSubmit").click(function(e) {
    e.preventDefault();
     var myurl= "https://icanhazdadjoke.com/" ;
      $.ajax({
         url : myurl,
          dataType : "json",
           success : function(json) {
             console.log(json);
             var results = "";
             results += "<h2>Results:</h2>";
                results += "<div class=\"result\" >";
                results += "<p id =\"randomResult\">" + json.joke +"</p>"
               results += "</div>"
             $("#results").html(results);
           }
         });
  });
});
