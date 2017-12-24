var  liNodes = document.getElementsByTagName('li');
var box=document.getElementsByClassName('pic')[0];
var links =box.getElementsByTagName('a');
var i=0;
// 导航条
window.onload =function(){
	for (var j=0; j<liNodes.length; j++)
	{
		liNodes[j].onmouseover = function(){
			this.className = "subMenuShow ";
			}
		liNodes[j].onmouseout = function(){
			this.className = "";
		}
	}
}
// 图片
function imgchange(){
		links[i%8].style.display='none';
		i++;
		links[i%8].style.display='block';
}
var timer=setInterval(imgchange,3000)
	box.onmouseover=function(){
		clearInterval(timer);
	}
	box.onmouseout=function(){
		timer=setInterval(imgchange,3000)
	}
// 轮播效果
var speed=30;
var content=document.getElementById("content");
var p=document.getElementById("p");
var nu=document.getElementById("null");
nu.innerHTML=p.innerHTML;
function  changeToLeft(){
	if(nu.offsetWidth<=content.scrollLeft)
	{
		
		content.scrollLeft-=p.offsetWidth
	}
	else
	{
		console.log(content.scrollLeft);
		content.scrollLeft=content.scrollLeft+1;
	}
}
var a=setInterval(changeToLeft,speed);
content.onmouseover=function(){
	clearInterval(a);
}
content.onmouseout=function(){
	a=setInterval(changeToLeft,speed);
}