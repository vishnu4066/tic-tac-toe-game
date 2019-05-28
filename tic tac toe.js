
var boxArray = new Array(9);
var turn=0,won=-1;
function initialize() {
			
	for (var i = 0;i<boxArray.length ; i++) {
		 boxArray[i]=-1;
	}
	won=0;
	$('.player-box').text(".");
}
function iswon(){
	if(boxArray[0]==boxArray[1]&&boxArray[1]==boxArray[2]&&boxArray[0]!=-1){
		alert('player'+turn+'won');
		won=1;
	}
	if(boxArray[3]==boxArray[4]&&boxArray[4]==boxArray[5]&&boxArray[3]!=-1){
		alert('player'+turn+'won');
		won=1;
	}
	if(boxArray[6]==boxArray[7]&&boxArray[7]==boxArray[8]&&boxArray[6]!=-1){
		alert('player'+turn+'won');
		won=1;
	}
	if(boxArray[0]==boxArray[3]&&boxArray[3]==boxArray[6]&&boxArray[0]!=-1){
		alert('player'+turn+'won');
		won=1;
	}
	if(boxArray[1]==boxArray[4]&&boxArray[4]==boxArray[7]&&boxArray[1]!=-1){
		alert('player'+turn+'won');
		won=1;
	}
	if(boxArray[2]==boxArray[5]&&boxArray[5]==boxArray[8]&&boxArray[2]!=-1){
		alert('player'+turn+'won');
		won=1;
	}
	if(boxArray[0]==boxArray[4]&&boxArray[4]==boxArray[8]&&boxArray[0]!=-1){
		alert('player'+turn+'won');
		won=1;
	}
	if(boxArray[2]==boxArray[4]&&boxArray[4]==boxArray[6]&&boxArray[2]!=-1){
		alert('player'+turn+'won');
		won=1;
	}
	var i;
	for (var i =0; i<boxArray.length ; i++) {
		if(boxArray[i]==-1)
			break;
	}
	if(i==9&&won==0){
		alert('draw');
	}
}
$(document).ready(function() {
	initialize();
	$('.player-box').click(function(e) {
		var clicked=$(this).attr('data-box');
		if(turn==0){
			if(boxArray[clicked-1]==-1){
				$(this).text('x');
				boxArray[clicked-1]=0;
				turn=1;
			}
		}else{
			if(boxArray[clicked-1]==-1){
				$(this).text('o');
				boxArray[clicked-1]=1;
				turn=0;
			}
		}
		iswon();
	});
	$('#reset').click(function(){
		initialize();
	});
});
