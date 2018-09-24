$(document).ready(function() {

	$(".unclicked").on("click", function() {
		var ID = $(this).find("a").attr("id");
		console.log(ID + ".html");
		$("#main").load(ID + ".html", function() {
			console.log("Complete");
		});
	});

});