var mouseEvent = "empty";
var mousex,mousey;
canvas = document.getElementById("circlecanvas");
ctx = canvas.getContext("2d");
color = "purple";
lineWidth1 = 2;
var width = screen.width;
var new_width = screen.width-30;
var height = screen.height;
var new_height = screen.height-300;
if (width<992){
    document.getElementById("circlecanvas").width=new_width;
    document.getElementById("circlecanvas").height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchevent",mytouchevent);
function mytouchevent(e){
    console.log("started");
    mousex = e.touches[0].clientX-canvas.offsetLeft;
    mousey = e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove",mytouchmove);
function mytouchmove(e){
    console.log("drawing");
    mousexcurrent = e.touches[0].clientX-canvas.offsetLeft;
    mouseycurrent = e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth1;
    console.log("#Last position of x and y");
    console.log("x = " + mousex + "y = " + mousey);
    ctx.moveTo(mousex,mousey);
    console.log("#Current position of x and y");
    console.log("x = " +  mousexcurrent + "y = " +  mouseycurrent);
    ctx.lineTo( mousexcurrent, mouseycurrent);
    ctx.stroke();

mousex=mousexcurrent;
mousey=mouseycurrent;}
