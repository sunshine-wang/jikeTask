/*var active = document.getElementsByClassName("active")[0];
var points = document.getElementsByClassName("point");

alert(active);
alert(active indexOf(points);
*/

$(function(){
	$(".leftlist").on("mouseover",function(){
		$(".leftlist_hide").hide();
		$(this).find(".leftlist_li").find("a").siblings(".leftlist_hide").show();

	})

	$(".leftlist").on("mouseout",function(){
		$(".leftlist_hide").hide();
	})

	$(".label_chose").on("mouseover",function(){
		for(var i in $(".label_chose")){
			if($(".label_chose").eq(i).hasClass("active")){
				var oldi=i;
				$(".label_chose").removeClass("active");
			}
		}
		$(this).addClass("active");
		for(var i in $(".label_chose")){
			if($(".label_chose").eq(i).hasClass("active")){
				var newi=i;
			    console.log(newi);
			}
		}
		$(".allclass").eq(oldi).hide();
		$(".allclass").eq(newi).show();
	})

	$(".banner").on("mouseover",function(){
		$(".bannerLeft img").show();
		$(".bannerRight img").show();
		clearInterval(set);
	})
	var set=setInterval(move,3000);
	$(".banner").on("mouseout",function(){
		$(".bannerLeft img").hide();
		$(".bannerRight img").hide();
		set=setInterval(move,3000);
	})
	var points = $(".point");
	var li_width=$(".banner-list li").width();
	console.log(li_width);
	var oldPos = $(".point.active").index(points);
	var newPos;
	function move(){
		var marginLeft = $(".banner-list").css("marginLeft");
		console.log(oldPos);
		if(oldPos < 4){
			var newPos = oldPos+1;
			console.log(newPos);
			points.eq(newPos).addClass("active").siblings().removeClass("active");
			$(".banner-list").animate({marginLeft: parseInt(marginLeft)-parseInt(li_width)+"px"},500);
			oldPos = newPos;
		}
		else{
			newPos = 0;
			points.eq(newPos).addClass("active").siblings().removeClass("active");
			$(".banner-list").animate({marginLeft: parseInt(marginLeft)-parseInt(li_width)+"px"},500,function(){
				$(".banner-list").css({marginLeft:"-"+li_width+"px"});
			})
			oldPos = newPos;
		}
	}
	$(".bannerRight").on("click",function(){

		move();

	})
	$(".bannerLeft").on("click",function(){
		var marginLeft = $(".banner-list").css("marginLeft");
		console.log(oldPos);
		if (oldPos>0) {
			var newPos = oldPos-1;
			console.log(newPos);
			points.eq(newPos).addClass("active").siblings().removeClass("active");
			$(".banner-list").animate({marginLeft:parseInt(marginLeft)+parseInt(li_width)+"px"},500);

			oldPos = newPos;
		}
		else{
			newPos = 4;
			points.eq(newPos).addClass("active").siblings().removeClass("active");
			$(".banner-list").animate({marginLeft: parseInt(marginLeft)+parseInt(li_width)+"px"},500,function(){
				$(".banner-list").css({marginLeft:"-"+li_width*5+"px"});
			})
			oldPos = newPos; 
		}

	})
	$(".point").on("click",function(){
		var marginLeft = $(".banner-list").css("marginLeft");
		for(var i in $(".point")){
			if ($(".point").eq(i).hasClass("active")) {
				var oldpoint = i;
				console.log(oldpoint);
				$(".point").eq(i).removeClass("active");
			}
			
		}
		$(this).addClass("active");
		for (var i in $(".point")) {
			if ($(".point").eq(i).hasClass("active")) {
				var newpoint = i;
				console.log(newpoint);
			}
		}
		var offset = newpoint-oldpoint+1;
		var oldmarginleft = oldpoint*li_width;
		var pointclick_left = parseInt(oldmarginleft)+parseInt(li_width)*offset;
		$(".banner-list").animate({marginLeft:"-"+pointclick_left+"px"},500);
		console.log(parseInt(li_width)*offset);

	})	


})



	