'use strict';
$(document).ready(function () {
	Handlebars.registerHelper('panel', function(heading, body) {
		debugger
	  return "<div class='panel panel-default'>"+
              "<div class='panel-heading'>" + heading + "</div>"+
              "<div class='panel-body'>"+
                "<pre>"+
                  body + 
                "</pre>"+
              "</div>"
            "</div>";
	});
	var context = {};
	$('.answer-hb-content').each(function () {
		var source = $(this).html();
		var template = Handlebars.compile(source);
		var el_html = template(context);
		$(this).html(el_html);
	})
})