
$(document).ready(function () {
//draw initial grid
	drawGrid(12);
	
//new grid button
$('#reset').on('click', function(){
	var input = prompt("Please enter a number between 1 and 64", "");
	if(input > 0 && input < 64){
	$('#container').clear;
	drawGrid(input);
	}
	else{
	alert("you crazy!")};
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
    
    //enable cell coloring
   $('.square').on('mouseenter', function(){
	    $(this).addClass('red');
    });
}


});
