window.renderStatistics = function (ctx, names, times) {
	ctx.fillStyle = (0, 0, 0, 0.7);
	ctx.beginPath();
	ctx.moveTo(180, 110);
	ctx.quadraticCurveTo(180, 65, 250, 65);
	ctx.quadraticCurveTo(320, 20, 390, 65);
	ctx.quadraticCurveTo(460, 65, 460, 110);
	ctx.quadraticCurveTo(530, 155, 460, 200);
	ctx.quadraticCurveTo(460, 245, 390, 245);
	ctx.quadraticCurveTo(320, 290, 250, 245);
	ctx.quadraticCurveTo(180, 245, 180, 200);
	ctx.quadraticCurveTo(110, 155, 180, 110);
	ctx.fill();
	
	
	ctx.fillStyle = 'white';
	ctx.beginPath();
	ctx.moveTo(170, 100);
	ctx.quadraticCurveTo(170, 55, 240, 55);
	ctx.quadraticCurveTo(310, 10, 380, 55);
	ctx.quadraticCurveTo(450, 55, 450, 100);
	ctx.quadraticCurveTo(520, 145, 450, 190);
	ctx.quadraticCurveTo(450, 235, 380, 235);
	ctx.quadraticCurveTo(310, 280, 240, 235);
	ctx.quadraticCurveTo(170, 235, 170, 190);
	ctx.quadraticCurveTo(100, 145, 170, 100);
	ctx.fill();
	
	ctx.fillStyle = '#000';
	ctx.font = '16 px PT Mono';
	
	ctx.fillText ('Ура, вы победили!', 230, 70);
	ctx.fillText ('Список результатов: ', 230, 85);
	
	var max = -1;
	var maxIndex = -1;
	
	for (var i = 0; i < times.length; i++){
		var time = times[i];
		if (time > max){
			max = time;
			maxIndex = i;
		}
	}
	var histogramHeight = 150;
	var step = histogramHeight / (max - 0);
	var colors = ['blue', 'green', 'red', 'black'];
	
	for (var i = 0; i < times.length; i++){
		if (names[i] === 'Вы') {
			ctx.fillStyle = (255, 0, 0, 1);
		}
		else {
			ctx.fillStyle = (0, 0, 255, Math.random());
		}
		var x = 200 + i * 90;
		var y = times[i] * step;
		ctx.beginPath;
		ctx.moveTo(x, 200);
		ctx.lineTo(x, 200 - y);
		ctx.lineTo(x + 40, 200 - y);
		ctx.lineTo(x + 40, 200);
		ctx.closePath();
		ctx.fillText(names[i], x - 30, 180);
		ctx.fillText(Math.round(times[i]), x - 30, 200 - y - 20); 
	}
}
	