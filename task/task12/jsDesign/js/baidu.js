$(function(){
	var bg_skin = localStorage.getItem("bg_skin");
	if(bg_skin != null){
		$("#content").find('.logo img').attr("src","./image/skin_logo.png");
		$("#content").css('background',"url("+bg_skin+")").addClass('change_skin');
	}
	$(".no_line").on('mouseenter',function(){
		$(".righ_list").show();
	});
	$(".righ_list").on('mouseout',function(){
		$(".righ_list").hide();
	});
	$(".ul_list").on('click','li',function(){
		var alt = $(this).attr("alt");
		$(this).addClass("active").siblings("li").removeClass("active");
		if(alt == 0){
			$(".my_care").show().siblings().hide();
		}else if(alt == 1){
			$(".recommended").show().siblings().hide();
		}else if(alt == 2){
			$(".nav").show().siblings().hide();
		}else if(alt == 3){
			$(".video").show().siblings().hide();
		}
		else{
			$(".shopping").show().siblings().hide();
		}
	});
	$(window).scroll(function(){
		var height = $("#content").height();
		var totalheight = $(window).height() + $(window).scrollTop();
		console.log(height);
		console.log(totalheight);
		console.log($(window).height());
		var alt = $(".ul_list").find('.active').attr("alt");
		var scrollThing = new forScroll();
		var div = "";
		if(height - totalheight  < 200){
			scrollThing.init(alt);
		}		
	});
	
	//原型模式
	var forScroll = function(){

	}
	forScroll.prototype = {
		constructor:forScroll,
		init:function(alt){
			if(alt == 1){
				div = $('<div><span class="img_news_title">中央气象台发布寒潮橙色预警和暴雪蓝色预警</span><div class="whether"><img src="./image/whether.jpeg"><img src="./image/whether.jpeg"><img src="./image/whether.jpeg"></div></div>');
				$('.img_news').append(div);
			}
			else if(alt == 3){
				div = $('<div class="film"><img src="./image/video1.jpg"><span>粉红猪小妹</span></div>');
				$('.video').append(div);
			}
			else if(alt = 4){
				div =$('<div class="shop"><img src="./image/shop1.jpg"><div class="shop_title"><span>煌上煌肉干组合</span><span>煌上煌肉干组合</span></div></div>');
				$('.shopping').append(div);
			}
		}
	}
	localStorage.setItem("address",'宁波');
	localStorage.setItem("temperature",'12');
	localStorage.setItem("pm",'63');
	$(".address").text(localStorage.getItem('address'));
	$(".temperature").text(localStorage.getItem('temperature'));
	$(".pm").text(localStorage.getItem('pm'));
	$("#change_skin").on('click',function(){
		$(".skin").addClass('skin_show');
	});

	//显示换肤
	$("#skin_none").on('click',function(){
		$('.skin').removeClass('skin_show');
	})
	//点击图片换肤
	$(".skin-img").on('click','img',function(){
		var bg_skin = $(this).attr('src');
		$("#content").find('.logo img').attr("src","./image/skin_logo.png");
		$("#content").css('background',"url("+bg_skin+")").addClass('change_skin');
		localStorage.setItem("bg_skin",bg_skin);
	});

	//换肤导航栏，切换热门及卡通肤色
	$(".skin-nav").on('click','li',function(){
		$(this).addClass('active').siblings('li').removeClass('active');
		if($(this).attr('alt') == 0){
			$('.hot').addClass('active').siblings('ul').removeClass('active');
		}
		else{
			$('.game').addClass('active').siblings('ul').removeClass('active');
		}
	})
});
