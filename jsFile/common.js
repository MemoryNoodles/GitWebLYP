!function(w,d){
    var aiframe = d.getElementsByTagName('iframe');
    for(var i=0,l=aiframe.length; i<l; i++){
        var dHeight = aiframe[i].contentWindow.document.body.offsetHeight; 
        aiframe[i].style.height= dHeight+'px';
        aiframe[i].style.width= '80%';
    }

}(window,document)

/*----------------------------工具函数--------------------------------*/
/*添加class*/
function addCls(obj, cls){
    var arr = obj.className.split(' ');
    for(var i=0; i<arr.length; i++){
        if(arr[i] == cls){
            return;
        } 
    }
    obj.className += ' '+cls;
}
/*删除class*/
function delCls(obj,cls){
    if(!obj.className) return;
    var arr = obj.className.split(' ');
    for(var i=0; i<arr.length; i++){
        if(arr[i] == cls){
            arr.splice(i,1);
        } 
    }
    obj.className = arr.join(' ');
}
/*----------------------------方法函数--------------------------------*/
//轮播图函数
function flash(strId, dots){
    this.imgBoxId = document.getElementById(strId);
    this.aLI = this.imgBoxId.children;                 //包裹图片的LI
    this.num = 0;
    /*获取原点的li*/
    this.dots = document.getElementById(dots).children; 

}
/*函数的原型下添加方法 */
flash.prototype = {
    init:function(strId){
        var _this = this;
        /*根据li的个数设置 ul的宽度*/
        this.imgBoxId.style.width = this.aLI[0].offsetWidth*this.aLI.length+'px';
        /*每过两秒执行一次autoPlay*/
        this.time = setInterval(function(){
            _this.next();
        }, 3000);

        /*执行点击圆点*/
        this.clickDot();
        /*鼠标移入移出*/
        this.imgBoxId.onmouseover = function(){
            clearInterval(_this.time);
        } 
        this.imgBoxId.onmouseout = function(){
            _this.time = setInterval(function(){
                _this.next();
            }, 3000);
        } 
    },
    /*下一张*/
    next:function(){   
        var _this = this;
        if(this.num > this.aLI.length -1 ){
            this.num = 0;
        }else{
            this.imgBoxId.style.left =  -this.aLI[0].offsetWidth*this.num + 'px';   
            ++this.num;
            this.Dots(); 
        }  
        if(!this.time){
            this.time = setInterval(function(){
                _this.next();
            }, 3000);
        }

    },
    /*圆点的cls变化*/
    Dots:function(){
        for(var i=0; i<this.dots.length; i++){
            delCls(this.dots[i],'active');
        }
        addCls(this.dots[this.num-1],'active');
    },
    /*点击圆点滚到相应的位置*/
    clickDot:function(that){
        var _this = this;
        for(var i=0; i<this.dots.length; i++){
            this.dots[i].index = i;
            this.dots[i].onclick =function(){
                clearInterval(_this.time); 
                _this.time = null
                _this.num = this.index;
                _this.next();

            }
        }
    },

}