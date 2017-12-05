'use strict';
window.renderStatistics = function (ctx, names, times) {
  var drawCloud = function (cloudFillStyle, x0, y0) {
    ctx.fillStyle = cloudFillStyle;
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.quadraticCurveTo(x0, y0 - 85, x0 + 110, y0 - 85);
    ctx.quadraticCurveTo(x0 + 180, y0 - 130, x0 + 250, y0 - 85);
    ctx.quadraticCurveTo(x0 + 320, y0 - 85, x0 + 320, y0);
    ctx.quadraticCurveTo(x0 + 390, 195, x0 + 320, y0 + 130);
    ctx.quadraticCurveTo(x0 + 320, y0 + 175, x0 + 250, y0 + 175);
    ctx.quadraticCurveTo(x0 + 180, 310, x0 + 110, y0 + 175);
    ctx.quadraticCurveTo(x0, y0 + 175, x0, y0 + 130);
    ctx.quadraticCurveTo(x0 - 110, 175, x0, y0);
    ctx.fill();
  };
  var drawText = function (fillStyleHex, font, x0, y0, phrase) {
    ctx.fillStyle = fillStyleHex;
    ctx.font = font;
    ctx.fillText(phrase, x0, y0);
  };
  var getMaxElement = function (blocks) {
    var max = -1;
    for (var i = 0; i < blocks.length; i++) {
      var piece = blocks[i];
      if (piece > max) {
        max = piece;
      }
    }
    return (max);
  };
  var getRandomColor = function (name, nameStyle, otherStyle) {
    if (name === 'Вы') {
      ctx.fillStyle = nameStyle;
    } else {
      var a = Math.random();
      ctx.fillStyle = otherStyle + a + ')';
    }
  };
  var drawHistogram = function (histogramHeight, blockTimes, blockNames, x0, width, maxValue) {
    var step = histogramHeight / (maxValue - 0);
    for (var i = 0; i < times.length; i++) {
      getRandomColor(names[i], 'rgba(255, 0, 0, 1)', 'rgba(0, 0, 255, ');
      var x = x0 + i * width;
      var y = times[i] * step;
      ctx.beginPath();
      ctx.moveTo(x, 220);
      ctx.lineTo(x, 220 - y);
      ctx.lineTo(x + 40, 220 - y);
      ctx.lineTo(x + 40, 220);
      ctx.fill();
      ctx.fillStyle = '#000';
      ctx.font = '16 px PT Mono';
      ctx.fillText(names[i], x, 235);
      ctx.fillText(Math.round(times[i]), x, 200 - y);
    }
  };
  drawCloud('rgba(0, 0, 0, 0.7)', 220, 100);// shadow
  drawCloud('rgba(255, 255, 255, 1)', 210, 90);// cloud
  drawText('#000', '16 px PT Mono', 300, 16, 'Ура, вы победили!');
  drawText('#000', '16 px PT Mono', 300, 32, 'Список результатов: ');
  var maxValue = getMaxElement(times);
  drawHistogram(150, times, names, 220, 90, maxValue);
};
