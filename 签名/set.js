window.onload = function () {
  var canvas = document.getElementById("test");
//   alert("hello");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    canvas.onmousedown=function(ev){
        ev=ev||window.event;
        if(canvas.setCapture){
            canvas.setCapture();
        }
        ctx.save();
        ctx.strokeStyle="pink";
        ctx.beginPath();
        ctx.moveTo(ev.clientX-canvas.offsetLeft,ev.clientY-canvas.offsetTop);
        document.onmousemove=function(ev){  
          ctx.save();     
            ev=ev||window.event;   
            ctx.lineTo(ev.clientX-canvas.offsetLeft,ev.clientY-canvas.offsetTop);
            ctx.stroke();
            ctx.restore();
        }
        document.onmouseup=function(){
            document.onmousemove=document.onmouseup=null;
            if(document.releaseCapture())
            {
                document.releaseCapture();
            }
        }
        return false;//取消浏览器下的默认行为。
    }
  }
};