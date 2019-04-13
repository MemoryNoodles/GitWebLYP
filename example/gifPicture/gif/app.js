(function(){var d,g,f,j,b,c,h;d=function(){function a(){}return a.prototype.transparent={empty:16514043,alter:16777215},a.prototype.prepare=function(E,R){var H,K,U,N,J,G,O,C,I,M,T,S,P,Q,L,B,A,q,F,k,z;for(T=function(e){return function(i){var m,l,o;return o=G.pixelData[i],o||(l=4*i,m=Array.prototype.slice.call(I.data,l,l+4),o=m[3]?1:2,G.pixelData[i]=o),2===o}}(this),U=function(e){return function(W){var Y,ab,aj,ae,aa,af,V,Z,ad,ai,ag,ah,ac,y,x,X,s;if(!G.renderData[W]){for(Y=W%G.width,ag=~~(W/G.width),af=R,ac=Math.max(0,Y-af+1),y=Math.min(Y+af,G.width),X=Math.max(0,ag-af+1),s=Math.min(ag+af,G.height),ah=ae=V=ac,Z=y;Z>=V?Z>ae:ae>Z;ah=Z>=V?++ae:--ae){for(x=aa=ad=X,ai=s;ai>=ad?ai>aa:aa>ai;x=ai>=ad?++aa:--aa){if(ab=ah-Y,aj=x-ag,af*af>ab*ab+aj*aj&&!T(ah+x*G.width)){return void (G.renderData[W]=1)}}}return G.renderData[W]=2,q.push(W)}}}(this),K=function(e){return function(i,l){return i%G.width&&U(i-1),l||U(i),(i+1)%G.width?U(i+1):void 0}}(this),R||(R=0),J=E.getContext("2d"),G={width:E.width,height:E.height},G.total=G.width*G.height,I=J.getImageData(0,0,G.width,G.height),C=P=0,F=G.total;F>=0?F>P:P>F;C=F>=0?++P:--P){if(A=4*C,H=I.data[A+3]){for(S=Q=0;2>=Q;S=++Q){I.data[A+S]=I.data[A+S]*H/255+255-H}I.data[A+3]=255,N=I.data[A]<<16+I.data[A+1]<<8+I.data[A+2],N=~~(N*H/255),N===this.transparent.empty&&(N=this.transparent.alter,I.data[A]=N>>16,I.data[A+1]=N>>8&255,I.data[A+2]=255&N)}}for(J.putImageData(I,0,0),G.pixelData=new Uint8Array(G.total),G.renderData=new Uint8Array(G.total),q=[],C=L=0,k=G.width;k>=0?k>L:L>k;C=k>=0?++L:--L){U(C),U(G.total-C-1)}for(C=B=0,z=G.height;z>=0?z>B:B>z;C=z>=0?++B:--B){U(C*G.width),U((C+1)*G.width-1)}for(O=0;O<q.length;){M=q[O],M>G.width&&K(M-G.width),K(M,!0),M+G.width<G.total&&K(M+G.width),O+=1}return G},a.prototype.getShadowCanvas=function(C){var z,k,v,A,x,q,D,y,B,m,w;for(z=$("<canvas>")[0],z.width=C.width,z.height=C.height,x=z.getContext("2d"),D=x.getImageData(0,0,C.width,C.height),A=[this.transparent.empty>>16,this.transparent.empty>>8&255,255&this.transparent.empty,255],v=[this.transparent.alter>>16,this.transparent.alter>>8&255,255&this.transparent.alter,255],q=B=0,w=C.total;w>=0?w>B:B>w;q=w>=0?++B:--B){for(k=C.renderData[q]<2?v:A,y=m=0;3>=m;y=++m){D.data[4*q+y]=k[y]}}return x.putImageData(D,0,0),z},a.prototype.getMarginedCanvas=function(k,m){var l,o,i;return o=this.prepare(k,m),i=this.getShadowCanvas(o),l=i.getContext("2d"),l.drawImage(k,0,0),i},a}(),g=function(){function a(l){var k,m,i;this.options=l||{},(k=this.options).width||(k.width=180),(m=this.options).height||(m.height=180),(i=this.options).margin||(i.margin=1),this.images=[],this.workspace=$(".workspace"),this.gallery={wrap:$(".gallery"),items:$(".gallery-items"),remove:$(".gallery-remove")},this.gallery.items.on("click",".gallery-item",function(e){return function(o){var n;return n=e.indexOfWrap(o.currentTarget),~n?e.show(n):void 0}}(this)).on("click",".gallery-item-remove",function(e){return function(o){var n;return o.stopPropagation(),n=e.indexOfWrap(o.currentTarget.parentNode),~n?e.remove(n):void 0}}(this)),this.gallery.remove.on("click",function(e){return function(n){return e.gallery.items.toggleClass("gallery-items-remove")}}(this)),this.edger=new d}return a.prototype.toColor=function(i){var k;for(k=i.toString(16);k.length<6;){k="0"+k}return"#"+k},a.prototype.indexOfWrap=function(k){var m,l,o,i;for(m=o=0,i=this.images.length;i>=0?i>o:o>i;m=i>=0?++o:--o){if(l=this.images[m],l.wrap[0]===k){return m}}return -1},a.prototype.normalize=function(y){var v,k,m,w,p,l,z,q,x;return x=this.options.width,p=this.options.height,q=this.options.margin,k=y.width,v=y.height,x>=k&&p>=v?y:(l=k/x,z=v/p,z>l?x=~~(k/z):p=~~(v/l),m=$("<canvas>")[0],m.width=x+2*q,m.height=p+2*q,w=m.getContext("2d"),w.drawImage(y,q,q,x,p),m=this.edger.getMarginedCanvas(m,q),y=new Image,y.src=m.toDataURL(),y)},a.prototype.length=function(){return this.images.length},a.prototype.clear=function(){return this.images=[]},a.prototype.update=function(){return this.images.length?this.gallery.wrap.addClass("has-items"):this.gallery.wrap.removeClass("has-items")},a.prototype.add=function(i){var k;return i=this.normalize(i),k=$('<div class="gallery-item"><div class="gallery-item-remove"><i class="fa fa-remove">').append($(i).clone()).appendTo(this.gallery.items),this.images.push({img:i,wrap:k}),this.update()},a.prototype.remove=function(i){var k;return k=this.images.splice(i,1)[0],k.wrap.remove(),this.active===k&&(this.active=null,i>=this.images.length&&(i-=1),this.show(i)),this.update()},a.prototype.get=function(e){return 0>e&&(e+=this.images.length),this.images[e]},a.prototype.each=function(e){return this.images.forEach(e)},a.prototype.show=function(i){var l,k;return null!=(l=this.active)&&l.wrap.removeClass("active"),this.active=this.get(i),null!=(k=this.active)&&k.wrap.addClass("active"),this.workspace.html(this.active?$(this.active.img).clone():"")},a}(),f=function(){function a(){this.wrap=$(".reveal-wrap"),this.overlay=$(".reveal-overlay"),this.content=$(".reveal"),this.overlay.on("click",function(e){return function(){return e.hide()}}(this))}return a.prototype.show=function(e){return this.wrap.addClass("active"),this.content.html(e)},a.prototype.hide=function(){return this.wrap.removeClass("active"),this.content.html("")},a}(),b=new g,h=new f,c=function(){var a;return a={},function(k){var i;return a.expire&&a.expire>Date.now()?k(a.data):(i=new XMLHttpRequest,i.open("GET","/put_token",!0),i.onload=function(){return a={data:this.responseText,expire:Date.now()+60000},k(a.data)},i.send())}}(),j=function(k,m,l){var o,i;return o=new FormData,o.append("token",k),o.append("file",m),i=new XMLHttpRequest,i.open("POST","http://upload.qiniu.com/",!0),i.onloadend=function(){var a;return a=JSON.parse(this.responseText),200===this.status?l(a):void 0},i.send(o)},
    
    $("#btn-load").on("click",function(a){
        return $('<input type=file accept="image/*">').on("change",function(i){
            var l,k;
            console.log(new FileReader);
            return(l=this.files[0])?(k=new FileReader,k.onload=function(m){
                var n;return n=new Image,
                    console.log(m, new FileReader,this.result)
                    n.src=this.result,
                    n.onload=function(){
                    return b.add(n),
                        b.show(-1)
                }
            },
            k.readAsDataURL(l)):void 0}).trigger("click")}),
    
    $("#btn-dump").on("click",function(k){
        var i,a;
        if(b.length()){
             return i=new GIF({workers:2,
                               quality:10,
                               workerScript:"gif/gif.worker.js",
                               transparent:d.prototype.transparent.empty,
                               background:white
                              }),
                 a={delay:$("#delay").val()},
                 b.each(function(e){
                         return function(l){
                             return i.addFrame(l.img,a)
                         }
                 }(this)),
                 i.on("finished",function(l){
                 var m;
                 return m= new FileReader,
                     m.onload=function({
                         $("#gen_gif").attr("src",this.result)
                     },
                                        m.readAsDataURL(l)
             }),i.render()
             }
                      })
        }).call(this);
