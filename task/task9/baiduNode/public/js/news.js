$(function(){
	initnews(0);
	
});

function initnews(newstype){
	$.ajax({
		type:'get',
		url:'/news',
		dataType:'json',
		data:{newstype:newstype},
		success:function(data){
			//console.log(data[0]);
			var li = "";
			var news = $("#content");
			if(data.length >= 1){
				li = $('<div class="news_list"><img src="'+data[0].newsimg+'"><span>'+data[0].newscontent+'</span></div>');
				news.append(li);
				for(var i = 1;i < data.length; i++){
					li = $('<div class="news_list_small"><img src="'+data[i].newsimg+'"><span>'+data[i].newscontent+'</span></div>');
					news.append(li);
				}
			}
				
				
		}
	})
}


$("#news_list li").on('click',function(){
	var that = $(this).attr("alt");
	$("#content").empty();
	initnews(parseInt(that));
})