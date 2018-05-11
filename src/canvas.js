import {fabric} from 'fabric';
import pic from './components/beach.png';

var canvas, canvasColor, textbox;


export function initCanvas() {
	canvas = new fabric.Canvas('drawing-canvas');
	var img = new Image();
	img.onload = function(){
		var oImg = new fabric.Image(img,{selectable:false});
		canvas.add(oImg);
		oImg.sendToBack();
	}
	img.src = pic;
	// img.sendToBack();
	// canvas.setBackgroundImage(pic,canvas.renderAll.bind(canvas));
	// var rect = new fabric.Rect({
	//   fill: 'red',
	//   width: 256,
	//   height: 256,
	//   opacity:0
	// });

	// canvas.add(rect);
	// canvas.renderAll();
	// canvasColor = addCanvasColor();
	// textbox = initTextBox();
	// canvas.add(canvasColor,textbox);
	// textbox.bringToFront();
	
	canvas.renderAll();
	return canvas;
}

export function addCanvasColor() {
	canvasColor = new fabric.Rect({
	  fill: 'red',
	  width: 256,
	  height: 256,
	  opacity:0.5,
	  selectable: false
	});

	canvas.add(canvasColor);
	canvas.renderAll();
	return canvasColor;
}

export function initTextBox() {
	textbox = new fabric.IText('Honey,\nI\'m subtle', {
	    fontSize: 50,
	    left: 10,
	    top: 10,
	    lineHeight: 1,
	    originX: 'left',
	    textAlign: 'center',
	    fill: 'yellow'
  	});
  	canvas.add(textbox);
  	canvas.renderAll();
	return textbox;
}