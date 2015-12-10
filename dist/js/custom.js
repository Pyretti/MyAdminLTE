/**** Adds 'active' class to sidebar menu ****/
$( window ).load(function() {
	var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
		$("#sidebar-menu a").each(function(){
			if($(this).attr("href") == pgurl || $(this).attr("href") == '' ) {
				$(this).parent().addClass("active");
				$(this).parent().parent().closest("li").addClass("active");
			}
		})
	});