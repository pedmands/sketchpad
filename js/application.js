
$(document).ready(function () {
	//set grid
	var number = 16;
	//draw grid
	for (var y = 0; y < number; y++) {
	    for (var x = 0; x < number; x++) {
	        $('#container').append("<div class='square'></div>");
	    }
	    
	      $("#container").append("<div class='row'></div>");
    }
    //resize cells
    divSize = (600)/number;
    $('.square').width(divSize);
    $('.square').height(divSize);
    //color cells
    $('.square').on('mouseenter', function(){
	    $(this).addClass('colored');
    });
});
