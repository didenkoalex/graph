var _graph = document.getElementById("graph");
var graph = _graph.getContext("2d");


function _resize() {
	//alert("resize");
	_graph.height = window.innerHeight-13;
	_graph.width = window.innerWidth-6;
	draw_net("#eee");
	draw_coord("red");
	draw_graph(f);
	draw_coordinates();
}

function draw_net(color) {
	graph.beginPath();
	graph.lineWidth = 2;
	for (var x = 0.5; x < _graph.width; x += _graph.width/50) {
		graph.moveTo(x, 0);
		graph.lineTo(x, _graph.height);
	}
	
	for (var y = 0.5; y < _graph.height; y += _graph.width/50) {
		graph.moveTo(0, y);
		graph.lineTo(_graph.width, y);
	}
	graph.strokeStyle = color;
	graph.stroke();
}

function draw_coord(color) {
	graph.beginPath();
	graph.strokeStyle = "red";
	
	graph.moveTo(_graph.width/2, 0);
	graph.lineTo(_graph.width/2, _graph.height);
	graph.stroke();
	
	graph.moveTo(0, _graph.height/2);
	graph.lineTo(_graph.width, _graph.height/2);
	graph.stroke();
}

function draw_coordinates() {
	graph.beginPath();
	graph.strokeStyle = "#000";
	graph.lineWidth = 1;
	for(y=0; y<_graph.width; y+=_graph.width/50) {
		graph.moveTo(_graph.width/2-5, y);
		graph.lineTo(_graph.width/2+5, y);
		graph.stroke();
	}
	
	for(x=0; x<_graph.width; x+=_graph.width/50) {
		graph.moveTo(x, _graph.height/2-5);
		graph.lineTo(x, _graph.height/2+5);
		graph.stroke();
	}
}

function draw_graph(func) {
	var y0 = _graph.height / 2;
	graph.beginPath();
	graph.moveTo(0, y0);
	for (var x = 0; x < _graph.width; x+=2) {
		graph.lineTo(x, func(x - _graph.width/2) + y0);
	}
	
	graph.strokeStyle = "blue";
	graph.stroke();
	/*
	graph.moveTo(_graph.width/2, y0);
	for (var x = _graph.width/2; x > 0; x--) {
		graph.lineTo(x, func(x) + y0);
	}
	graph.stroke();
	*/
}

function f(x) {
		return -1*Math.cos(x/16) * 50;
}

_resize();

