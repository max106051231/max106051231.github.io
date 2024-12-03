// JavaScript Document

/*

1.CheckLR1TB2:判斷左右還是上下移動,左右=1,上下=2

2.RB:(左上)為負方向,LT:(右下)正方向

3.AniWho:動的區塊(Motion)

4.TotalNum:幾輪(總張數/一輪張數)

5.AniTime:動畫時間

6.WH:一輪圖片寬度或高度

*/

function LRMenu1(CheckLR1TB2,RB,AniWho,LT,TotalNum,AniTime,WH){
	var j=0
	/*判斷上下左右*/
	/*到最底時會自動移回最前面*/
	
	/*左鍵設定開始*/
	if(CheckLR1TB2==1){
		$(RB).click(function(){
			j++
			if(j>TotalNum-1){j=0}
			$(AniWho).animate({left:-WH*j},AniTime) //-WH*j 為座標位置
		})
		/*左鍵設定結束*/

		/*右鍵設定開始*/

		$(LT).click(function(){
			j--
			if(j<0){j=TotalNum-1}
				$(AniWho).animate({left:-WH*j},AniTime)
		})
		/*右鍵設定結束*/
	}

	/*判斷上下*/
	/*到最底會卡住*/
	else if(CheckLR1TB2==2){
		/*輪播圖片為最上方時,上鍵消失,游標為預設值*/
		if(j==0){
			$(RB).css("background","none")
			$(RB).css("cursor","default")
			$(LT).css("background","")
		}
		
		/*上鍵設定開始 圖片往下跑*/
		$(RB).click(function(){
			j--
			/*輪播圖片為最上方時,上鍵消失,游標為預設值*/
			if(j==0){
				$(RB).css("background","none")
				$(RB).css("cursor","default")
			}
			
			/*當圖片在最上方時,圖片停止輪播*/
			if(j<0){
				j=0
			}
			/*當圖片不是最底時(輪播期間),下鍵出現*/
			if(j != TotalNum-1){
				$(LT).css("background","")
				$(LT).css("cursor","pointer")
			}
			/*圖片輪播程式*/
			$(AniWho).animate({top:-WH*j},AniTime)
		})
		/*上鍵設定結束*/
		
		/*下鍵設定開始 圖片往上跑*/
		$(LT).click(function(){
			j++
			/*輪播圖片最下方時,下鍵消失,游標為預設值*/
			if(j==TotalNum-1){
				$(LT).css("background","none")
				$(LT).css("cursor","default")
			}
			/*當圖片在最下方時,圖片停止輪播*/
			if(j>TotalNum-1){
				j=TotalNum-1
			}
			/*當圖片不是最上面時(輪播期間),上鍵出現*/
			if(j != 0){
				$(RB).css("background","")
				$(RB).css("cursor","pointer")
			}
			/*圖片輪播程式*/
			$(AniWho).animate({top:-WH*j},AniTime) //-WH*j 為座標位置
		})
		/*下鍵設定結束*/

		
	}
}





//新的topnavi	
$(function(){
	  $('#topnavi li:not(.subnavi li)').hover(
		  function(){
				 $(this).addClass('current');
				 $(this).find('.subnavi').stop(true,false).fadeIn(300);
			},
		  function(){
				 $('#topnavi li:not(.subnavi li)').removeClass('current');
				 $(this).find('.subnavi').stop(true,false).fadeOut(100);
			}
	  );
	});




//JavaScript Document
$(function(){
	var $block = $('#abgne_fade_pic'), 
		$ad = $block.find('.ad'),
		showIndex = 0,			// 預設要先顯示那一張
		fadeOutSpeed = 2000,	// 淡出的速度
		fadeInSpeed = 3000,		// 淡入的速度
		defaultZ = 10,			// 預設的 z-index
		isHover = false,
		timer, speed = 5000;	// 計時器及輪播切換的速度
 
	// 先把其它圖片的變成透明
	$ad.css({
		opacity: 0,
		zIndex: defaultZ - 1
	}).eq(showIndex).css({
		opacity: 1,
		zIndex: defaultZ
	});
 
	// 組出右下的按鈕
	var str = '';
	for(var i=0;i<$ad.length;i++){
		str += '<a href="#">' + (i + 1) + '</a>';
	}
	var $controlA = $('#abgne_fade_pic').append($('<div class="control">' + str + '</div>').css('zIndex', defaultZ + 1)).find('.control a');
 
	// 當按鈕被點選時
	// 若要變成滑鼠滑入來切換時, 可以把 click 換成 mouseover
	$controlA.click(function(){
		// 取得目前點擊的號碼
		showIndex = $(this).text() * 1 - 1;
 
		// 顯示相對應的區域並把其它區域變成透明
		$ad.eq(showIndex).stop().fadeTo(fadeInSpeed, 1, function(){
			if(!isHover){
				// 啟動計時器
				timer = setTimeout(autoClick, speed + fadeInSpeed);
			}
		}).css('zIndex', defaultZ).siblings('a').stop().fadeTo(fadeOutSpeed, 0).css('zIndex', defaultZ - 1);
		// 讓 a 加上 .on
		$(this).addClass('on').siblings().removeClass('on');
 
		return false;
	}).focus(function(){
		$(this).blur();
	}).eq(showIndex).addClass('on');
 
	$ad.hover(function(){
		isHover = true;
		// 停止計時器
		clearTimeout(timer);
	}, function(){
		isHover = false;
		// 啟動計時器
		timer = setTimeout(autoClick, speed);
	})
 
	// 自動點擊下一個
	function autoClick(){
		if(isHover) return;
		showIndex = (showIndex + 1) % $controlA.length;
		$controlA.eq(showIndex).click();
	}
 
	// 啟動計時器
	timer = setTimeout(autoClick, speed);
});

/**
 * Coin Slider - Unique jQuery Image Slider
 * @version: 1.0 - (2010/04/04)
 * @requires jQuery v1.2.2 or later 
 * @author Ivan Lazarevic
 * Examples and documentation at: http://workshop.rs/projects/coin-slider/
 
 * Licensed under MIT licence:
 *   http://www.opensource.org/licenses/mit-license.php
**/

(function($){var params=new Array;var order=new Array;var images=new Array;var links=new Array;var linksTarget=new Array;var titles=new Array;var interval=new Array;var imagePos=new Array;var appInterval=new Array;var squarePos=new Array;var reverse=new Array;$.fn.coinslider=$.fn.CoinSlider=function(options){init=function(el){order[el.id]=new Array();images[el.id]=new Array();links[el.id]=new Array();linksTarget[el.id]=new Array();titles[el.id]=new Array();imagePos[el.id]=0;squarePos[el.id]=0;reverse[el.id]=1;params[el.id]=$.extend({},$.fn.coinslider.defaults,options);$.each($('#'+el.id+' img'),function(i,item){images[el.id][i]=$(item).attr('src');links[el.id][i]=$(item).parent().is('a')?$(item).parent().attr('href'):'';linksTarget[el.id][i]=$(item).parent().is('a')?$(item).parent().attr('target'):'';titles[el.id][i]=$(item).next().is('span')?$(item).next().html():'';$(item).hide();$(item).next().hide();});$(el).css({'background-image':'url('+images[el.id][0]+')','width':params[el.id].width,'height':params[el.id].height,'position':'relative','background-position':'top left'}).wrap("<div class='coin-slider' id='coin-slider-"+el.id+"' />");$('#'+el.id).append("<div class='cs-title' id='cs-title-"+el.id+"' style='position: absolute; bottom:0; left: 0; z-index: 1000;'></div>");$.setFields(el);if(params[el.id].navigation)
$.setNavigation(el);$.transition(el,0);$.transitionCall(el);}
$.setFields=function(el){tWidth=sWidth=parseInt(params[el.id].width/params[el.id].spw);tHeight=sHeight=parseInt(params[el.id].height/params[el.id].sph);counter=sLeft=sTop=0;tgapx=gapx=params[el.id].width-params[el.id].spw*sWidth;tgapy=gapy=params[el.id].height-params[el.id].sph*sHeight;for(i=1;i<=params[el.id].sph;i++){gapx=tgapx;if(gapy>0){gapy--;sHeight=tHeight+1;}else{sHeight=tHeight;}
for(j=1;j<=params[el.id].spw;j++){if(gapx>0){gapx--;sWidth=tWidth+1;}else{sWidth=tWidth;}
order[el.id][counter]=i+''+j;counter++;if(params[el.id].links)
$('#'+el.id).append("<a href='"+links[el.id][0]+"' class='cs-"+el.id+"' id='cs-"+el.id+i+j+"' style='width:"+sWidth+"px; height:"+sHeight+"px; float: left; position: absolute;'></a>");else
$('#'+el.id).append("<div class='cs-"+el.id+"' id='cs-"+el.id+i+j+"' style='width:"+sWidth+"px; height:"+sHeight+"px; float: left; position: absolute;'></div>");$("#cs-"+el.id+i+j).css({'background-position':-sLeft+'px '+(-sTop+'px'),'left':sLeft,'top':sTop});sLeft+=sWidth;}
sTop+=sHeight;sLeft=0;}
$('.cs-'+el.id).mouseover(function(){$('#cs-navigation-'+el.id).show();});$('.cs-'+el.id).mouseout(function(){$('#cs-navigation-'+el.id).hide();});$('#cs-title-'+el.id).mouseover(function(){$('#cs-navigation-'+el.id).show();});$('#cs-title-'+el.id).mouseout(function(){$('#cs-navigation-'+el.id).hide();});if(params[el.id].hoverPause){$('.cs-'+el.id).mouseover(function(){params[el.id].pause=true;});$('.cs-'+el.id).mouseout(function(){params[el.id].pause=false;});$('#cs-title-'+el.id).mouseover(function(){params[el.id].pause=true;});$('#cs-title-'+el.id).mouseout(function(){params[el.id].pause=false;});}};$.transitionCall=function(el){clearInterval(interval[el.id]);delay=params[el.id].delay+params[el.id].spw*params[el.id].sph*params[el.id].sDelay;interval[el.id]=setInterval(function(){$.transition(el)},delay);}
$.transition=function(el,direction){if(params[el.id].pause==true)return;$.effect(el);squarePos[el.id]=0;appInterval[el.id]=setInterval(function(){$.appereance(el,order[el.id][squarePos[el.id]])},params[el.id].sDelay);$(el).css({'background-image':'url('+images[el.id][imagePos[el.id]]+')'});if(typeof(direction)=="undefined")
imagePos[el.id]++;else
if(direction=='prev')
imagePos[el.id]--;else
imagePos[el.id]=direction;if(imagePos[el.id]==images[el.id].length){imagePos[el.id]=0;}
if(imagePos[el.id]==-1){imagePos[el.id]=images[el.id].length-1;}
$('.cs-button-'+el.id).removeClass('cs-active');$('#cs-button-'+el.id+"-"+(imagePos[el.id]+1)).addClass('cs-active');if(titles[el.id][imagePos[el.id]]){$('#cs-title-'+el.id).css({'opacity':0}).animate({'opacity':params[el.id].opacity},params[el.id].titleSpeed);$('#cs-title-'+el.id).html(titles[el.id][imagePos[el.id]]);}else{$('#cs-title-'+el.id).css('opacity',0);}};$.appereance=function(el,sid){$('.cs-'+el.id).attr('href',links[el.id][imagePos[el.id]]).attr('target',linksTarget[el.id][imagePos[el.id]]);if(squarePos[el.id]==params[el.id].spw*params[el.id].sph){clearInterval(appInterval[el.id]);return;}
$('#cs-'+el.id+sid).css({opacity:0,'background-image':'url('+images[el.id][imagePos[el.id]]+')'});$('#cs-'+el.id+sid).animate({opacity:1},300);squarePos[el.id]++;};$.setNavigation=function(el){$(el).append("<div id='cs-navigation-"+el.id+"'></div>");$('#cs-navigation-'+el.id).hide();$('#cs-navigation-'+el.id).append("<a href='#' id='cs-prev-"+el.id+"' class='cs-prev'>prev</a>");$('#cs-navigation-'+el.id).append("<a href='#' id='cs-next-"+el.id+"' class='cs-next'>next</a>");$('#cs-prev-'+el.id).css({'position':'absolute','top':params[el.id].height/2-15,'left':0,'z-index':1001,'line-height':'30px','opacity':params[el.id].opacity}).click(function(e){e.preventDefault();$.transition(el,'prev');$.transitionCall(el);}).mouseover(function(){$('#cs-navigation-'+el.id).show()});$('#cs-next-'+el.id).css({'position':'absolute','top':params[el.id].height/2-15,'right':0,'z-index':1001,'line-height':'30px','opacity':params[el.id].opacity}).click(function(e){e.preventDefault();$.transition(el);$.transitionCall(el);}).mouseover(function(){$('#cs-navigation-'+el.id).show()});$("<div id='cs-buttons-"+el.id+"' class='cs-buttons'></div>").appendTo($('#coin-slider-'+el.id));for(k=1;k<images[el.id].length+1;k++){$('#cs-buttons-'+el.id).append("<a href='#' class='cs-button-"+el.id+"' id='cs-button-"+el.id+"-"+k+"'>"+k+"</a>");}
$.each($('.cs-button-'+el.id),function(i,item){$(item).click(function(e){$('.cs-button-'+el.id).removeClass('cs-active');$(this).addClass('cs-active');e.preventDefault();$.transition(el,i);$.transitionCall(el);})});$('#cs-navigation-'+el.id+' a').mouseout(function(){$('#cs-navigation-'+el.id).hide();params[el.id].pause=false;});$("#cs-buttons-"+el.id).css({'left':'95%','margin-left':-images[el.id].length*15/2-5,'position':'relative'});}
$.effect=function(el){effA=['random','swirl','rain','straight'];if(params[el.id].effect=='')
eff=effA[Math.floor(Math.random()*(effA.length))];else
eff=params[el.id].effect;order[el.id]=new Array();if(eff=='random'){counter=0;for(i=1;i<=params[el.id].sph;i++){for(j=1;j<=params[el.id].spw;j++){order[el.id][counter]=i+''+j;counter++;}}
$.random(order[el.id]);}
if(eff=='rain'){$.rain(el);}
if(eff=='swirl')
$.swirl(el);if(eff=='straight')
$.straight(el);reverse[el.id]*=-1;if(reverse[el.id]>0){order[el.id].reverse();}}
$.random=function(arr){var i=arr.length;if(i==0)return false;while(--i){var j=Math.floor(Math.random()*(i+1));var tempi=arr[i];var tempj=arr[j];arr[i]=tempj;arr[j]=tempi;}}
$.swirl=function(el){var n=params[el.id].sph;var m=params[el.id].spw;var x=1;var y=1;var going=0;var num=0;var c=0;var dowhile=true;while(dowhile){num=(going==0||going==2)?m:n;for(i=1;i<=num;i++){order[el.id][c]=x+''+y;c++;if(i!=num){switch(going){case 0:y++;break;case 1:x++;break;case 2:y--;break;case 3:x--;break;}}}
going=(going+1)%4;switch(going){case 0:m--;y++;break;case 1:n--;x++;break;case 2:m--;y--;break;case 3:n--;x--;break;}
check=$.max(n,m)-$.min(n,m);if(m<=check&&n<=check)
dowhile=false;}}
$.rain=function(el){var n=params[el.id].sph;var m=params[el.id].spw;var c=0;var to=to2=from=1;var dowhile=true;while(dowhile){for(i=from;i<=to;i++){order[el.id][c]=i+''+parseInt(to2-i+1);c++;}
to2++;if(to<n&&to2<m&&n<m){to++;}
if(to<n&&n>=m){to++;}
if(to2>m){from++;}
if(from>to)dowhile=false;}}
$.straight=function(el){counter=0;for(i=1;i<=params[el.id].sph;i++){for(j=1;j<=params[el.id].spw;j++){order[el.id][counter]=i+''+j;counter++;}}}
$.min=function(n,m){if(n>m)return m;else return n;}
$.max=function(n,m){if(n<m)return m;else return n;}
this.each(function(){init(this);});};$.fn.coinslider.defaults={width:940,height:250,spw:7,sph:5,delay:3000,sDelay:30,opacity:0.7,titleSpeed:500,effect:'',navigation:true,links:true,hoverPause:true};})(jQuery);