/*删除class
  obj -- > 对象
  cls --》 class名
*/
function delCls(obj, cls){
    var arr = obj.className.split(' ');
    if(arr.indexOf(cls) != -1){
        arr.splice(arr.indexOf(cls), 1);
    }
    obj.className = arr.join(' ')  
}
/*增加class
  obj -- > 对象
  cls --》 class名
*/
function addCls(obj, cls){
    var arr = obj.className.split(' ');
    if(arr.indexOf(cls) == -1){
        arr.push(cls); 
    }
    obj.className = arr.join(' ')  
}
/*是否有指定的class

*/
function hasCls(obj, cls){
    var arr = obj.className.split(' ');
    if(arr.indexOf(cls) != -1){
        return true;
    }else{
        return false;
    }
}
/*获取非行间样式
*/
function getStyle(ele, attr){
     //IE6/7/8
     if(ele.currentStyle){
       return ele.currentStyle[attr]
    }else{
      //w3c
      return  getComputedStyle(ele, null)[attr]
    }
 }
/**/
function getRect(obj){
    return obj.getBoundingClientRect();
}



