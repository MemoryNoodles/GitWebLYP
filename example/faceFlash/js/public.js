/*-------------------------------工具方法---------------------------*/
/**
 dom: 元素ID或者obj；
 tag:标签
*/
function getTag(dom, tag){
	//如果dom是对象则得到他下面的标签
	if(typeof dom == 'object' && tag){   
		return dom.getElementsByTagName(tag);
	}
	//如果dom是iD则得到他下面的标签
	else if(dom && tag){
		return document.getElementById(dom).getElementsByTagName(tag);	
	}
	//如果tag为undefined
	else{
		return document.getElementById(dom);
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