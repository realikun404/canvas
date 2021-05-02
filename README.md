# canvas
学习学习学习

1:初学canvas 

getContext():上下文环境

2：画矩形

fillRect(x,y,width,height) 不加单位 填充矩形

strokeRect(x,y,wdith,height) 不加单位 带边框的矩形
相当于在中间画
100 ：99.5-100.5 （99-101） 

clearRect(x,y,width,height)
清楚指定矩形区域，使其完全透明

fillStyle 设置图形的填充颜色

strokeStyle 设置图像轮廓颜色

lineWidth 线的宽度没有单位

lineJoin  线的连接处的样式
round 圆角，bevel 圆角，miter 直角

覆盖渲染
要注意这些函数，属性的前后顺序

3:绘制路径
图像的基本元素是路径。路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合。
步骤：
创建路径起始点-用画图命令去画路径-把路径封闭-路径生成便可以可以通过描边或填充路径渲染图形。

begininPath() 列表清空，可以重画图形。
moveTo（x，y） 将笔触移动到特定点去，当canvas初始化或beginPath（）调用后，通常会用该函数。
lineTo(x,y) 绘制一条从当前位置到指定位置的直线。
closePath（）闭合路径，即画一条直线回到初始点。
stroke（）通过线条来绘制图形轮廓。
fill（）通过填充区域的内容区域生成实心的图形。
rect(x,y,width,height) 画矩形。此时moveTo（0，0）；
lineCap 是Canvas 2D API 指定如何绘制每一条线段末端的属性。
有三个可能的值：
butt：线段末端以方形结束。
round：线段末端以圆形结束。
square：线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。
默认值是butt。

注意：当调用fill（）时，会自动闭合；而调用stroke（）时不会自动闭合。

4.save,restore
save() 相当于向样式栈压入当前样式,可类比push_back()
restore（）返回最近保存的样式，可类比pop（）
基本模板：ctx在这里为canvas对象
ctx.save()
//关于样式的设置
ctx.beginPath();
//关于路径
ctx.restore();

路径容器：每次调用路径api时，都会往路径做登记，beginPath（）清空该容器。
样式容器：每次调用样式api时，都会往样式容器登记。调用save（）时候，将样式容器里的状态压入样式栈。调用restore（）时候将样式栈的宅顶状态弹出，进行覆盖。

5.其他曲线
角度与弧度的关系：radians=(Math.PI/180)*degrees
###
arc(x,y,radius,startAngle,endAngle,anticlockwise)
画一个以（x，y）为圆心的以radius为半径的圆弧（圆），从startangle到endangle结束。
anticlockwise：为bool类型，是true顺时针，false逆时针。
###
arcto(x1,y1,x2,y2,radius);圆弧
注意这里还要一个moveTo（）来指定起始方向。
###二次贝塞尔
quadraticCurveTo(cp1x,cp1y,x,y);
绘制二次贝塞尔曲线，参数为控制点和结束点
###
三次贝塞尔
bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);
起点为moveTo指定的点