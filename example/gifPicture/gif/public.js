/**
 dom: 元素ID或者obj；
 tag:标签
*/
function $(dom, cls){
	//如果dom是对象则得到他下面的标签
	if(typeof dom == 'object' && cls){   
		return dom.getElementsByClassName(cls);
	}
	//如果dom是iD则得到他下面的标签
	else if(dom && cls){
		return document.getElementById(dom).getElementsByClassName(cls)[0];	
	}
	//如果tag为undefined
	else{
		return document.getElementById(dom);
	}
}

/*
  得到非行间样式
  obj :对象
  attr:属性
*/
function getStyle(obj,attr){
    if( obj.currentStyle){
        return obj.currentStyle[attr];        
    }
    return getComputedStyle(obj)[attr];        
}

/*
  返回对象在浏览器中的位置
  obj : 对象
*/
function getRect(obj){
	return obj.getBoundingClientRect();
}

/* 拖动
   objChilde : 要拖动的物体
   objParent : 限制objChilde在objParent内拖动
*/
function drag(objChilde,objParent, ev){
	var e = ev || window.event,
		disX = e.clientX,  //鼠标距离屏幕的X距离
		disY = e.clientY,  //鼠标距离屏幕的Y距离
		left = getRect(objChilde).left,   //块距离屏幕的X距离
		top = getRect(objChilde).top,     //块距离屏幕的Y距离
        
        leftP = getRect(objParent).left,
        topP = getRect(objParent).top;
	var numX = disX - left;
	var numY = disY - top;
	/*鼠标移动的时候*/
	document.onmousemove = function(ev){
		var e = ev || window.event;
		objChilde.style.left = e.clientX -  numX - leftP +'px';
		objChilde.style.top = e.clientY -  numY - topP +'px';
		return false;		
	}
	/*鼠标抬起时*/
	document.onmouseup = function(e){		
		document.onmousemove = null;
		document.onmouseup = null;
	}
}

/**删除class
   obj: DOM对象；
   cls: class名称
*/
function delCls(obj, cls){
    if(obj.className == '')  return;
    var arr = obj.className.split(' ');
    for(var i=0; i<arr.length; i++){
        if(arr[i] == cls){
            arr.splice(i,1);
        }
    }
    obj.className = arr.join(' ');
}
/**增加class
   obj: DOM对象；
   cls: class名称
*/
function addCls(obj, cls){
    var arr = obj.className.split(' ');
    for(var i=0;i<arr.length; i++){
        if(arr[i] == cls) return;
    }
    obj.className += ' '+cls;
}