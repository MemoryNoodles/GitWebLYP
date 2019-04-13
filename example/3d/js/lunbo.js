
/*执行切换*/
var oList=document.getElementById("list"), //图片外层Div对象
	aLi=oList.children,   	                 //图片列表
	oPrev=document.getElementById("prev"), 
	oNext=document.getElementById("next");
var arr=[];
for(var i=0;i<aLi.length;i++){
	var oSpan = aLi[i].children[0];
	arr[i] = aLi[i].className;
}
console.log(arr);
oPrev.onclick=function()
{       
	arr.unshift(arr.pop());
	toStyle();
};
oNext.onclick=function()
{
	arr.push(arr.shift());
	toStyle();
};
function toStyle()
{
	for(var i=0;i<aLi.length;i++)
	{
		aLi[i].className = arr[i];

	}	
}