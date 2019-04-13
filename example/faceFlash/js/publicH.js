/*-------------------------------工具方法---------------------------*/
!function(window){
	var rf = {};
	/**
      dom: 元素ID或者obj；
      tag:标签
    */
	rf.getTag = function(dom, tag){
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
	};
	/**删除class
       obj: DOM对象；
       cls: class名称
    */
	rf.delCls = function(obj, cls){
		if(obj.className == '')  return;
		var arr = obj.className.split(' ');
		for(var i=0; i<arr.length; i++){
			if(arr[i] == cls){
				arr.splice(i,1);
			}
		}
		obj.className = arr.join(' ');
	};
	/**增加class
       obj: DOM对象；
       cls: class名称
    */
	rf.addCls = function( obj, cls ){
		
		var arr = obj.className.split(' ');
		for(var i=0;i<arr.length; i++){
			if(arr[i] == cls) return;
		}
		obj.className += ' '+cls;
		
	};
	/**得到对象的飞行间属性值
       obj: DOM对象；
       attr: 样式属性
    */
	rf.getStyle = function( obj, attr ){
		
		if(obj.currentStyle){
			return obj.currentStyle(attr);
		}else{
			return getComputedStyle(obj, null)[attr];
		}
		
	};
	
	window.$Func = rf;
}(window)






