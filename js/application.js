
$(document).ready(function () {
	
	
	//set grid
	size = 10;
	var fieldWidth = 700;
	//draw grid
	for (var y = 0; y < size; y++) {
	    for (var x = 0; x < size; x++) {
	        $('#container').append("<div class='square'></div>");
	    }
	      $("#container").append("<div class='row'></div>");
    }
    //resize cells
    divSize = Math.round(fieldWidth/size);
    $('.square').width(divSize);
    $('.square').height(divSize);
    //color cells
    $('.square').on('mouseenter', function(){
	    $(this).addClass('colored');
    });
    
$('#reset').on('click', function(){
	var input = prompt("Please enter a number between 1 and 64", "");
	$('#container').clear;
	drawGrid(input);
});

function drawGrid(i){
	document.getElementById("container").innerHTML = "";
	size = i;
	var fieldWidth = 700;
	//draw grid
	for (var y = 0; y < size; y++) {
	    for (var x = 0; x < size; x++) {
	        $('#container').append("<div class='square'></div>");
	    }
	      $("#container").append("<div class='row'></div>");
    }
    //resize cells
    divSize = Math.round(fieldWidth/size);
    $('.square').width(divSize);
    $('.square').height(divSize);
    //color cells
    $('.square').on('mouseenter', function(){
	    $(this).addClass('colored');
    });
}

});
