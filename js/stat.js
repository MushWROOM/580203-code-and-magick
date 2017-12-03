window.renderStatistics = function (ctx, names, times) {
	var drawCloud = function (fillStyleR, fillStyleG, fillStyleB, fillStyleA, x0, y0){
		ctx.fillStyle = (fillStyleR, fillStyleG, fillStyleB, fillStyleA);
		ctx.beginPath();
	    ctx.moveTo(x0, y0);
		ctx.quadraticCurveTo(x0, y0 - 45, x0 + 70, y0 - 45);
		ctx.quadraticCurveTo(x0 + 140, y0 - 90, x0 + 210, y0 - 45);
		ctx.quadraticCurveTo(x0 + 280, y0 - 45, x0 + 280, y0);
		ctx.quadraticCurveTo(x0 + 350, 155, x0 + 280, y0 + 90);
		ctx.quadraticCurveTo(x0 + 280, y0 + 135, x0 + 210, y0 + 135);
		ctx.quadraticCurveTo(x0 + 140, 290, x0 + 70, y0 + 135);
		ctx.quadraticCurveTo(x0, y0 + 135, x0, y0 + 90);
		ctx.quadraticCurveTo(x0 - 70, 155, x0, y0);
		ctx.fill();
	}
	
	var drawText = function (fillStyleHex, font, x0, y0, text) {
		ctx.fillStyle = fillStyleHex;
		ctx.font = font;
		ctx.fillText = (text, x0, y0);
	}
	
	var getMaxElement = function (blocks){
	  var max = -1;
	  for (var i = 0; i < blocks.length; i++){
		  var element = blocks[i];
		  if (element > max){
			  max = element;
		  }
	  }
	  return (max);
	}
	
	var getRandomColor = function(name) {
		if (name == 'Вы') {
			ctx.fillStyle = (255, 0, 0, 1);
		}
		else {
			var a = Math.random();
			ctx.fillStyle = (0, 0, 255, a);
		}
	}	
	
	var drawHistogram = function (histogramHeight, times, names, x0, width, maxValue){
	  var step = histogramHeight / (maxValue - 0);
	
	  for (var i = 0; i < times.length; i++){
		  getRandomColor(names[i]);
		  var x = x0 + i * width;
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
	
	
	drawCloud(0, 0, 0, 0.7, 180, 110); // shadow
	drawCloud(255, 255, 255, 1, 170, 100); // cloud
	
	
	
	/*ctx.fillStyle = (0, 0, 0, 0.7);
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
	*/
	
	drawText = ('#000', '16 px PT Mono', 230, 70, 'Ура, вы победили!');
	drawText = ('#000', '16 px PT Mono', 230, 85, 'Список результатов: ');
	
	/*ctx.fillStyle = '#000';
	ctx.font = '16 px PT Mono';
	
	ctx.fillText ('Ура, вы победили!', 230, 70);
	ctx.fillText ('Список результатов: ', 230, 85);
	*/
	var maxValue = getMaxElement(times);
	
	
	/*var histogramHeight = 150;
	var step = histogramHeight / (maxValue - 0);
	
	for (var i = 0; i < times.length; i++){
		getRandomColor(names[i]);
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
	}*/
	drawHistogram(150, times, names, 200, 90, maxValue);
}

	