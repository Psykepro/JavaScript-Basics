var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.fillStyle = '#90CAD7';
ctx.strokeStyle = '#22545F';
ctx.lineWidth = 3;
ctx.beginPath();
ctx.arc(400, 300, 92, 0, rad(360));

ctx.save();
// scale ctx horizontally
ctx.scale(3, 1.1);
// draw circle which will be stretched into an oval
ctx.arc(420, 380, 20, 0, rad(360), false);
// restore to original state
ctx.restore();

//// save state
//ctx.save();
//// scale ctx horizontally
//ctx.scale(3, 1.1);
//// draw circle which will be stretched into an oval
//ctx.beginPath();
//ctx.arc(100, 100, 20, 0, rad(360), false);
//// restore to original state
//ctx.restore();
//// apply styling
//ctx.fillStyle = '#396693';
//ctx.lineWidth = 4;
//ctx.strokeStyle = 'black';



//ctx.moveTo(240, 110);
//ctx.lineTo(240, 230);
//ctx.moveTo(360, 230);
//ctx.lineTo(360, 110);

//ctx.save();
//ctx.scale(3, 1.1);
//ctx.arc(100, 210, 20, 0, rad(180));
//ctx.closePath();
////ctx.arc(100, 210, 50, rad(320), rad(270));
//ctx.restore();
ctx.fill();
ctx.stroke();



function rad(deg){
    return deg * Math.PI / 180;
}