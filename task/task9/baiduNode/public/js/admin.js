$(function(){
	init();

})

/*新增*/
$("#new_sub").on('click',function(){
	var form = $(".new_form").find('input');
	var newsnum = parseInt($("#newtype").val());
	var newstitle = form.eq(0).val();
	var newsimg = form.eq(1).val();
	var newscontent = form.eq(2).val();
	var newsdate = form.eq(3).val()== ""?"2016-11-11":form.eq(3).val();
	var postdata = {
		"newstype":newsnum,
		"newstitle":newstitle,
		"newscontent":newscontent,
		"newsdate":newsdate,
		"newsimg":newsimg
	}
	$.ajax({
		type:'post',
		url:'/admin/insert',
		dataType:'json',
		data:postdata,
		success:function(data){
			console.log(data);
		},
		complete:function(ms){
			init();
		}
	})
});

/*修改*/
$("#news_add").on('click','.news_change',function(){
	var id  = parseInt($(this).parent().attr("alt"));
	$("#news_hide").show();
	updateInit(id);
});

/*删除*/
$("#news_add").on('click','.news_delete',function(){
	var $that = $(this).parent();
	var id  = parseInt($(this).parent().attr("alt"));
	$.ajax({
		type:'post',
		url:'/admin/delete',
		dataType:'json',
		data:{"newsid":id},
		success:function(data){
			console.log(data);
			$that.remove();
		},
		complete:function(ms){
			init();
		}

	})
});


/*更新*/
$("#new_update").on('click',function(){
	var newsid = parseInt($(this).attr("alt"));
	var form = $("#news_hide").find('input');
	var newsnum = parseInt($("#checkout_type").val());
	var newstitle = form.eq(0).val();
	var newsimg = form.eq(1).val();
	var newscontent = form.eq(2).val();
	var newsdate = form.eq(3).val();
	var postdata = {
		"newsid":newsid,
		"newstype":newsnum,
		"newstitle":newstitle,
		"newscontent":newscontent,
		"newsdate":newsdate,
		"newsimg":newsimg
	}
	$.ajax({
		type:'post',
		url:'/admin/update',
		dataType:'json',
		data:postdata,
		success:function(data){
			console.log(data);
			$("#news_hide").hide();
			
		},
		complete:function(ms){
			init();
		}

	});

});


function updateInit(id){
	$.ajax({
		type:'get',
		url:'/admin/curnews',
		dataType:'json',
		data:{"newsid":id},
		success:function(data){
			console.log(data);
			var inform_get = $("#news_hide").find("input");
			$("#checkout_type").val(data[0].newstype);
			inform_get.eq(0).val(data[0].newstitle);
			inform_get.eq(1).val(data[0].newsimg);
			inform_get.eq(2).val(data[0].newscontent);
			inform_get.eq(3).val(data[0].newsdate.split("T")[0]);
			console.log(data[0].newstype);
		},

	});
	$("#new_update").attr("alt",id);
}

function init(){
	$.ajax({
		type:'get',
		url:'/admin/getnews',
		dataType:'json',
		success:function(data){
			console.log(data);
			var getnews = $("#news_add");
			getnews.empty();
			var li = "";
			for(var i = 0;i < data.length; i++){
				li = $('<li alt="'+data[i].newsid+'"><span>'+ data[i].newstitle +'</span><span class="time">'+ data[i].newsdate.split("T")[0] +'</span><input value="修改" class="news_change" type="button" /><input value="删除" class="news_delete" type="button" /></li>');
				getnews.append(li);
			}
			
		}
	});
}