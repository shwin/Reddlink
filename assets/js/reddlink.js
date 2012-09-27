$(function() {
		  $('.dropdown-toggle').dropdown();
		 
		  $('.dropdown input, .dropdown label').click(function(e) {
			e.stopPropagation();
		  });
		});
		
		$('.dropdown-menu-colleges').find('form').click(function (e) {
			e.stopPropagation();
		});
		
$('#search_button').click(function(e){
		e.preventDefault();
			window.location.href = "http://www.cornell.edu/search/index.cfm?q=" + $('#search_field').val() + "&tab=people";
			});
			
			