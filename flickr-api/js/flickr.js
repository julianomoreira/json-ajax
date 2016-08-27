$(document).ready(function(){

	$("button").click(function(){
		$("button").removeClass("selected");
		$(this).addClass("selected");
		var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		var animal = $(this).text();
		var flickerOptions = { 
			
			tags: animal,			
			format: "json"
		};
		function displayPhotos(data) {
			var photoHTML = '<ul>';						
			$.each(data.items, function(index, photo){				
				//console.log(photo.media.m);
				photoHTML += '<li class="grid-25 tablet-grid-50">';
				photoHTML += '<a href="' + photo.link + '" class="image">';					
				photoHTML += '<img src="' + photo.media.m  + '"></a></li>';
			});	
			photoHTML += '</ul>';
			$('#photos').html(photoHTML);
		}		
		$.getJSON(flickerAPI, flickerOptions, displayPhotos)
				/*optional stuff to do after success */		
	});	

}); // end ready