/*---------------------------*/
/*-----------自定义flash----------------*/
/*---------------------------*/
/*条件如下
  flashImg： ul的class
  idot:      下面的点的class
  controlBtn: 左右按钮class
  基本布局
  <div id="">
     <ul class="flashImg"></ul>
	 <div class="controlBtn"></div>
	 <div class="idot"></div>
  </div>
*/
function Flash(id){
	/*获取整个轮播图框*/
	this.oFlash = document.getElementById(id);
	//图片外框
	this.oul = this.oFlash.getElementsByClassName('flashImg')[0];
	this.oIdot = this.oFlash.getElementsByClassName('idot')[0];
	this.arrSpan = getTag(this.oIdot, 'span');
	//获取图片
	this.ali = getTag(this.oul, 'li');
	//左右按钮
	this.oBtn = this.oFlash.getElementsByClassName('controlBtn')[0];
	this.prev = getTag(this.oBtn, 'span')[0];
	this.next = getTag(this.oBtn, 'span')[1];
	/*当前滚动第几张*/
	this.num = 0;

}
/*在原型下加方法*/
Flash.prototype = {
	/*修正指向*/
	constructor:Flash,
	/*初始化
	  bol: 布尔值-》是否创建下面的点
	  value： 数值 -》 滚动多少张图片
	  time: obj = {bol:true, time:2s} -》是否需要滚动，以及滚动时间长短
	*/
	init:function( bol, value, obj ){
		var _this = this; 

		/*滚多少张图片 默认为一张*/
		this.value = value ? value : 1;

		/*调用操作方法*/
		this.opear();

		/*是否创建下面的点*/
		this.bol = bol;
		if( this.bol ){
			this.createIdot();
		}

		/*是否需要定时滚动*/
		if(obj && obj.bol){
			this.time = setInterval(function(){
				_this.nextFunc(_this);
			}, obj.time )


			/*移动到图片上是定时器不执行*/
			this.oFlash.onmouseenter = function(){
				clearInterval(_this.time);
			}
			this.oFlash.onmouseleave = function(){
				_this.time = setInterval(function(){
					_this.nextFunc(_this);
				}, obj.time )
			}
		}


	},
	opear:function(){
		var _this = this;
		//动态改写ul的宽度
		this.oul.style.width = this.ali[0].offsetWidth*this.ali.length + 'px';
		
		this.w =  this.ali[0].parentNode.offsetWidth/this.ali[0].offsetParent.offsetWidth;
		/*左右按钮事件*/
		this.next.onclick = function(){

			//if(_this.num < _this.ali.length -1){
			if(_this.num < Math.round(_this.w) -1){
				_this.num ++;
				_this.tab();
			}

		}
		this.prev.onclick = function(){

			if(_this.num > 0){
				_this.num --; 
				_this.tab();
			}
		}
	},
	/*动态创建下面的点*/
	createIdot:function(){
		/*根据图片的多少创建相应的点数*/
		for(var i=0; i<this.ali.length; i++){
			var span = document.createElement('span');
			this.oIdot.appendChild(span);
		}
		this.arrSpan[0].className = 'active';
		/*创建完后给点赋值事件*/
		this.idot();
	},
	/*tab切换*/
	tab:function(){

		/*如果传的值this.bol为true则切换高亮*/
		if(this.bol){
			for(var i=0, l=this.arrSpan.length; i<l; i++){
				delCls(this.arrSpan[i], 'active');
			}
			addCls(this.arrSpan[this.num], 'active');
		}
		/*设置ul的margin-left*/
		/*this.oul.style.marginLeft = -this.ali[0].offsetWidth*this.value*this.num + 'px';*/
		this.oul.style.marginLeft = -this.ali[0].offsetParent.offsetWidth*this.value*this.num + 'px';
	},
	/*下一张*/
	nextFunc:function(that){
		if(that.num < Math.round(that.w) -1){
			that.num ++;
			that.tab();
		}else{
			that.num = 0;
			that.tab();
		}
	},
	/*点的操作*/
	idot:function(){
		/*函数调用时改变this的指向，先保存下面用*/
		var _this = this;
		for(var i=0, l=this.arrSpan.length; i<l; i++){
			!function(i){

				_this.arrSpan[i].onclick = function(){
					_this.num = i;
					_this.tab();
				}
			}(i)
		}
	},

}