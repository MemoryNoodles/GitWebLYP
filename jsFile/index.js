
/*工具方法*/
var view = {              
    w:document.documentElement.clientWidth || document.body.clientWidth,    
};
/*得到非行间样式的css*/
function getStyle(obj,attr){
    if( obj.currentStyle){   //IE
        return obj.currentStyle[attr];        
    }else{

        return getComputedStyle(obj,false)[attr];        
    }

}
// window.onload = function(){
/*头部动画 -- 依次加载菜单*/
!function(){
    var oUl = document.getElementById('oUl');
    var aLi = oUl.children; 
    var i=0;
    var iTime = setInterval(function(){
        navMove(i);
        i++; 
    },300)
    function navMove(i){
        if( i > aLi.length-1 ){
            clearInterval(iTime); 
        }else{                     
            aLi[i].style.cssText = "top:0; opacity:1"; 
        }  
    }
}()

/*菜单背景*/
!function(){
    var oUl = document.getElementById('oUl');
    var navBg = document.getElementById('navBg');
    oUl.onmouseover = function(){
        navBg.style.height = '480px'; 
    }
    oUl.onmouseout = function(){
        navBg.style.height = '0'; 
    }

    /*课程背景随着鼠标移动*/
    var oUl_ul = oUl.getElementsByTagName('ul');
    for(var j=0,l=oUl_ul.length; j<l; j++){
        var ali = oUl_ul[j].getElementsByTagName('li');
        for(var i=0;i<ali.length;i++){
            ali[i].onmousemove = function(ev){
                var line = this.parentNode.getElementsByClassName('line')[0];
                line.style.top = this.offsetTop + 'px';
                line.style.height = this.offsetHeight +'px';
            }
        }
    }
}();
/*js课件中的手风琴效果*/
!function(){
	var oUl = document.getElementById('oUl');
	var oUl_ol = oUl.getElementsByTagName('ol');
	for(var j=0,l=oUl_ol.length; j<l; j++){
        var ali = oUl_ol[j].getElementsByTagName('li');
		 for(var i=0;i<ali.length;i++){
            ali[i].onclick = function(ev){
				$(this.children[0]).slideToggle();              
            }
        }
    }
}()

/*主页3D动画*/
!function(){
    /*主页3D动画*/
    var oBanner = document.getElementById('contain');
    var aImg = oBanner.getElementsByTagName('img');
    oBanner.onmousemove = function(ev){
        var iCenter = (view.w )/2;
        var iX=parseInt(ev.clientX-iCenter);
        var iOld=parseInt(getStyle(this,"PerspectiveOrigin"));
        var iTimer=Math.abs(iOld-iX);
        iTimer=iTimer<30?0:parseInt(iTimer);
        this.style.transition=iTimer+"ms";
        this.style.WebkitPerspectiveOrigin=iX+"px center";
        this.style.MozPerspectiveOrigin=iX+"px center";

    };
}()

function iframe(){
    var aiframe = document.getElementsByTagName('iframe');
    for(var i=0,l=aiframe.length; i<l; i++){
        var dHeight = aiframe[i].contentWindow.document.body.offsetHeight; 
        aiframe[i].style.height= dHeight+ 50+'px';
        aiframe[i].style.width= '100%';
    }

}

$(function(){
   $('.load').ajaxStart(function(){
       $(this).show();
      
   });
   $('.load').ajaxStop(function(){
       $(this).hide();
   });
	var bodyH = $('#wrapBox').height() + 'px';
	/*内容的回调*/
   $('#oUl a').click(function(){
       var href=this.dataset.href+' .wrap';
       $("#wrapBox").load(href, function(){
           
          //if(href.indexOf('webpack.html') != -1) 
           
            PrismS();        
		   setTimeout(iframe,4000);
	   });
       return false;
   });
	/*旁边的移入移出*/
	$("#aside").hover(function(){
		$("#aside").animate({'width':'8%'});
		$("#aside a").css('display','block');
		$("#wrapBox").animate({'width':'92%'});
	},function(){
		$("#aside").animate({'width':'1%'});
		$("#wrapBox").animate({'width':'99%'});
		$("#aside a").css('display','none');
	});
	$("#aside").css('height',bodyH);
	
	
    
})


